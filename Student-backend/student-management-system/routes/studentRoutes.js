// Router(). It is expressjs function use to setup the path 
const express = require('express');

const router = express.Router();
// importing the student controller 
const { addStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } = require('../controller/studentController')

// defing the route 
router.post('/add', addStudent);

// route of getting all student data 
router.get('/allstudents', getAllStudents )


// route of getting student by ID 
router.get('/getstudent/:id', getStudentById)

// route to update the student 
router.put('/update/:id', updateStudent)

// route to delete the student data 
router.delete('/delete/:id', deleteStudent)


// finally exporting the router
module.exports = router; 