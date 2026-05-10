// Router(). It is expressjs function use to setup the path
const express = require('express');

const router = express.Router();
const { register } = require('../controller/authController');

// defining the route for register
router.post('/register', register);

module.exports = router;                      
