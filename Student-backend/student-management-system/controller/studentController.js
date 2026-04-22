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
            // data: student
            
        })
    } catch (err) {
    }
}
// exporting this module
module.exports = {addStudent };
