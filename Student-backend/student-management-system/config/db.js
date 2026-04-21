// in this file, we are going to make mongoDB connection 
const mongoose = require('mongoose');

const connectDB = async () => {
        try {
                // getting mongodb URL from env file 
                const conn = await mongoose.connect(process.env.MONGO_URL);
                console.log('mongo is connected successfully');
        } catch (err) {
                console.log('Error in connecting to MongoDB: ', err);
        }
}

//export this file to use in server.js 
module.exports = connectDB;