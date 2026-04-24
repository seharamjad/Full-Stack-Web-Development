// Router(). It is expressjs function use to setup the path 
const express = require('express');

const router = express.Router();
// importing the student controller 
const { addStudent, getAllStudents, getStudentById } = require('../controller/studentController')

// defing the route 
router.post('/add', addStudent);

// route of getting all student data 
router.get('/allstudents', getAllStudents )


// route of getting student by ID 
router.get('/getstudent/:id', getStudentById)


// finally exporting the router
module.exports = router; 