//importing the student model/schema
const Student = require('../models/student');

//now creating API of adding the student data
const addStudent = async (req,res) => {
    try{
        //getting the data from user for each column/field
        const {name,email,course,city,marks} = req.body;

        //validating the data before saving
        if(!name || !email || !course || !city || !marks){
            return res.status(400).json({
                success:false,
                message:'Please provide all required fields'
            })
        }

        //if user enter all the fields then save data into database
        const student = await Student.create({name,email,course,city,marks})

        //getting the success status
        res.status(200).json({
            success:true,
            message:'Student data created successfully!',
            data:student
            
        })
    }catch(error){
    

    }
}

//API for fetching all the students data
const getAllStudents = async(req,res) => {
    try{
        const students = await Student.find();
        res.status(200).json({
            success:true,
            message:'All students fetched successfully!',
            //finding the total length of all data
            count: students.length,
            //displaying all the data
            data: students
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:'Something went wrong!',
            error: error.message
        })
    }
}

//API to get any specific student data
const getStudentById = async(req,res) => {
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({
                success:false,
                message:'Student not found'
            })
        }
        res.status(200).json({
            success:true,
            message:'Here is Student data:',
            data: student
        })
    }catch(error){
    if(error.name == 'CastError'){
        return res.status(400).json({
            success:false,
            message:'Invalid ID format'
        })
        res.status(500).json({
            success:false,
            message:'Server error'
        })
    }
    }
}

//API to update the specific student data
const updateStudent = async(req,res) => {
    try{
    const {name,email,course,city,marks} = req.body;
    
    //validation
    if(!name || !email || !course || !city || !marks === undefined){
        return res.status(400).json({
            success:false,
            message:'please provide the required fields'
        })

        
    }
    }catch(error){

    }
}
//Api for deleting the student data
const deleteStudent = async(req,res)=>{
    try{
        await Student.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:'Here is Student data:',
            deleteId : req.params.id
        })
    }catch(err){
        if(error.name == 'CastError'){
        return res.status(400).json({
            success:false,
            message:'Invalid ID format'
        })
        res.status(500).json({
            success:false,
            message:'Server error'
        })
    }
        
    }
}

//exporting this module
module.exports = { addStudent, getAllStudents, getStudentById, deleteStudent };