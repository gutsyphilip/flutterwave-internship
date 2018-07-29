var express = require('express');
var router = express.Router();

const {
  register
} = require('../controllers')

/* GET users listing. */
router.get('/', register.registerAttendee ) 

module.exports = router;
