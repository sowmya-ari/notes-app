var express = require('express');
var router = express.Router();
const controller = require('../controllers/notes')

router.get('/notes',controller.ReadAllNotes)
router.get('/notes/:id',controller.ReadParticularNoteById)
router.post('/notes',controller.createNote)
router.delete('/notes/:id',controller.findByIdAndDeleteNote)
router.put('/notes/:id',controller.findByIdAndUpdateNote)
router.patch('/notes/:id',controller.findByIdAndUpdateTitle)

module.exports = router;