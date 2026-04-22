// Router(). It is expressjs function use to setup the path 
const express = require('express');

const router = express.Router();
// importing the student controller 
const { addStudent } = require('../controller/studentController')

// defing the route 
router.post('/add', addStudent);

// finally exporting the router
module.exports = router; 