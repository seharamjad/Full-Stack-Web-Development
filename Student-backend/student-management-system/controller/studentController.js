//importing the student model/schema
const Student = require('../models/student');

//now creating API of adding the student data
const addStudent = async (req, res) => {
    try {
        const { name, email, course, city, marks } = req.body;

        if (!name || !email || !course || !city || marks === undefined || marks === null) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields',
            });
        }

        const student = await Student.create({ name, email, course, city, marks });

        res.status(201).json({
            success: true,
            message: 'Student data created successfully!',
            data: student,
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists',
            });
        }
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            error: error.message,
        });
    }
};

//API for fetching all the students data
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            success: true,
            message: 'All students fetched successfully!',
            count: students.length,
            data: students,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            error: error.message,
        });
    }
};

//API to get any specific student data
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Here is Student data:',
            data: student,
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format',
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

//API to update the specific student data
const updateStudent = async (req, res) => {
    try {
        const { name, email, course, city, marks } = req.body;

        if (
            name === undefined ||
            email === undefined ||
            course === undefined ||
            city === undefined ||
            marks === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: 'Please provide the required fields',
            });
        }

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, email, course, city, marks },
            { returnDocument: 'after', runValidators: true }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Student updated successfully!',
            data: student,
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format',
            });
        }
        res.status(500).json({
            success: false,
            message: 'Something went wrong!',
            error: error.message,
        });
    }
};

//Api for deleting the student data
const deleteStudent = async (req, res) => {
    try {
        const deleted = await Student.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Student deleted successfully',
            deleteId: req.params.id,
        });
    } catch (err) {
        if (err.name === 'CastError') {
            return res.status(400).json({
                success: false,
                message: 'Invalid ID format',
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

//exporting this module
module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
