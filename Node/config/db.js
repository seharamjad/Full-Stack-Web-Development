// const mysql = require('mysql2');
import mysql from 'mysql2';
// Install env from npm and import here
import 'dotenv/config';

const db = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
});

db.connect((err) => {
    if (err) {
        console.log("connection error!!");
    } else {
        console.log("connection success");
    }
});

// module.exports = db;
export default db;