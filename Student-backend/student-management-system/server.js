// import the pakages that we need to use in our server 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// import the database connection function from config/db.js file 
const connectDB = require('./config/db');



// import the route file 
const studentRoutes = require('./routes/studentRoutes');



// load environment variable from .env file 
dotenv.config();

// call the database connection function to connect to MongoDB
connectDB();

// Create a variable for using express pakage 
const app = express();


// now indicating the express server to use json format for sending and receiving data 
app.use(express.json());

// enabling cors for all routes 
app.use(cors());



// router calling 
app.use('/api/students', studentRoutes);



// running nodejs on registered port
// getting port from .env file 
const PORT = process.env.PORT


// demo running of api 
app.get('/test', (req,res)=>{
        res.json('this is a testing API');
})

//running the server on this port now 
app.listen(PORT, ()=>{
    console.log(`Port is running on this ${PORT}`);
})