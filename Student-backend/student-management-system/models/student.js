const mongoose = require('mongoose');

// defning the schema for student collection in MongoDB 
const studentSchema = new mongoose.Schema({
    // here we define all the columns names
    name: {
        type: String,
        required: [true, 'Student name is required'],
        trim: true,
        minLength: [3, 'Name contains at least 3 characters'],
        maxLength: [40, 'Nmae should not be more than 40 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        lowercase: true,
    },
    course: {
        type: String,
        required: [true, 'Course is required'],
        enum: {
            values: ['MERN', 'React', 'AI', 'Web', 'Graphic'],
            message: 'We are only offering theses courses: MERN, React, AI, Web, Graphic'
        }
    },
    marks: {
        type: Number,
        required: true,
        min: 0,
        max: 200,
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    isActive:{
        type: Boolean,
        default:true
    }

})
module.exports = mongoose.model('student', studentSchema)