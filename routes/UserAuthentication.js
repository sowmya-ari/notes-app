var express = require('express');
var router = express.Router();
var controller = require('../controllers/UserAuthentication')

router.post('/signup',controller.authorizeUser)
router.post('/signin',controller.authenticateUser)
module.exports = router;