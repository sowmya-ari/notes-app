const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./models')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require('dotenv').config()
const port = process.env.PORT
sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log(`notes app is listening on port ${port}!`)
    });
});