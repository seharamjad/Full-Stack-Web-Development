// importing the student model/schema 
const Student = require('../models/student');

// now creating API of adding the student data 
const addStudent = async (req, res) => {
    try {
        // getting the data from user for each column/field 
        const { name, email, course, city, marks } = req.body;

        // validating the data before saving 
        if (!name || !email || !course || !city || !marks) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            })
        }
        // if user enter all the fields then save the data into database 
        const student = await Student.create({ name, email, course, city, marks })

        // getting the success status 
        res.status(200).json({
            success:true,
            message: 'Student data creati=ed successfully!',
            data : student
        })
    } catch (err) {

    }
}


// API for fetching all the student data 
const getAllStudents = async (req, res)=>{
    try{
        const students = await Student.find();
        return res.status(200).json({
            success: true,
            message: 'All students fetched successfully!',
            //finding the total length of all student data
            count: students.length,
            //diplaying all the data 
            data: students
        })

    }catch(err){
        res.status(500).json({
            success: false,
            message:'Something went wrong!',
            error: err.message
        })

    }
}


// API to get any specific student data 
const  getStudentById = async(req, res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'Here is Student data',
            data: student,
        })

    }catch(err){
        if(err.name == 'CastError'){
            return res.status(400).json({
                success: false, 
                message: 'Invalid ID format'
            })
        res.status(500).json({
            success: false,
            message: 'Server error'
        })

        }

    }
}


// API to update the specific student data 
const updateStudent = async(req, res)=>{
    try{
        const {name, email, course, city, marks} = req.body;

        //Validation 
        if(!name || !email || !course || !city || !marks === undefined){
            return  res.status(400).json({
                success: false,
                message: 'Please provide the required fields'
            })
        }
        // getting the student previous data to update 
        const updateData = {};
        // getting the previous values from database 
        updateData.name = name;
        updateData.email = email;
        updateData.course = course;
        updateData.marks = marks;
        updateData.city = city;

        // finally updating the data into database 
        const student = await Student.findByIdAndUpdate(
            req.params.id, updateData, 
            // { new : true }
        )
        // validating if student not found 
        if(!student){
            return res.status(404).json({
                success: false,
                message: 'Student not found'
            })
        }
        

    }catch(err){

    }
}


// exporting this module
module.exports = {addStudent, getAllStudents, getStudentById };
