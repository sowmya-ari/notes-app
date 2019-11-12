const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors= require('cors');
const models = require('./models/index')
const notesRoutes = require('./routes/notes')
const authenticationRoutes = require('./routes/UserAuthentication')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(notesRoutes)
app.use(authenticationRoutes)

app.get('/', (req, res) => {
  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('dotenv').config()
const port = process.env.PORT
models.sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`notes app is listening on port ${port}!`)
    });
});