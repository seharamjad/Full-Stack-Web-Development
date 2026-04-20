// // Create a connection to your database  
// // Now we use create connection but mostly or in future we use create pool bcz create connection 1 user → 1 connection → database
// // Pool mai Multiple users ek time pe use kar sakte hain
// // mysql.createConnection
// // mysql.createPool (mostly use)
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "project_db"
// })


// db.connect((err) => {
//     if (err) {
//         console.log("Connection Error!");
//     } else {
//         console.log("Connection Success!");
//     }
// });



// // localhost:3000/api/products 
// app.get('/api/products', (req, res) => {


//     const sql = "SELECT * FROM products";

//     db.query(sql, (err, result) => {

//         if (err) {
//             res.json({
//                 status: false,
//                 message: "unable to fetch data"
//             });

//         } else {
//             res.json({
//                 status: true,
//                 products: result

//             });

//         }


//     });



//     // this is used to add api manually 
//     // res.json({
//     //     // Connect to the database
//     //     // install pakage : mysql2    
//     //     name: "Coffee",
//     //     price: "1500",
//     //     reating: "4.6",
//     //     description: "Great Drink"
//     // })
// });




// // Create Detail product API 
// app.get('/api/products/:id', (req, res) => {

//     const productsId = req.params.id;

//     const sql = "SELECT * FROM products WHERE id=?";

//     db.query(sql, [productsId], (err, result) => {

//         if (err) {
//             res.json({
//                 status: false,
//                 message: "unable to fetch data"
//             });

//         } else {
//             res.json({
//                 status: true,
//                 product: result

//             });

//         }


//     });

// });


// const express = require('express');
// const cors = require('cors');
import express from 'express';
import db from './config/db.js';
import cors from 'cors';

// Add the env 
import 'dotenv/config';

import productRoute from './routes/productRoutes.js';
import userRoute from './routes/userRoutes.js';
const app = express();


app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use('/api/products', productRoute);
app.use('/api/user', userRoute );



// localhost:3000/api/products
// req=request ,res=response
app.get('/api/products', (req, res) => {


    // const sql = "SELECT * FROM things";

    // db.query(sql, (err, result) => {

    //     if (err) {
    //         res.json({
    //             status: false,
    //             message: "unable to fetch data"
    //         });

    //     } else {
    //         res.json({
    //             status: true,
    //             products: result

    //         });

    //     }


    // });



    // res.json({
    //     name:"Coffee",
    //     price:"1200",
    //     rating:"4.5"
});


// // Create Detail product API 
app.get('/api/products/:id', (req, res) => {

    // const productsId = req.params.id;

    // const sql = "SELECT * FROM things WHERE id=?";

    // db.query(sql, [productsId], (err, result) => {

    //     if (err) {
    //         res.json({
    //             status: false,
    //             message: "unable to fetch data"
    //         });

    //     } else {
    //         res.json({
    //             status: true,
    //             product: result[0]

    //         });

    //     }


    // });

});


// Login API 

app.post('/api/user/login', (req, res) => {

    // const { email, pass } = req.body;

    // const sql = "SELECT * FROM users WHERE email=?";
    // db.query(sql, [email], (err, result) => {
    //     if (err) {
    //         return res.json({
    //             status: false,
    //             message: "unable to login user"
    //         });
    //     }
    //     if (result.length == 0) {
    //         return res.json({
    //             status: false,
    //             message: "unable to find user"
    //         });

    //     }

    //     const user = result[0];

    //     if (user.password != pass) {
    //         return res.json({
    //             status: false,
    //             message: "invalid Email/Password"

    //         });
    //     }

    //     res.json({
    //         status: true,
    //         message: "login success !",
    //         user: user

    //     })



    // });

});





// localhost:3000
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Project is running !!');
});

// These are the npm pakages that is used run project in run time
// npm install -g nodemon
// npm install --save-dev nodemon 