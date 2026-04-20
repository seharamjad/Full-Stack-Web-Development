import db from '../config/db.js';


export const userLogin = (req, res) => {

    const { email, pass } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";
    db.query(sql, [email], (err, result) => {
        if (err) {
            return res.json({
                status: false,
                message: "unable to login user"
            });
        }
        if (result.length == 0) {
            return res.json({
                status: false,
                message: "unable to find user"
            });

        }

        const user = result[0];

        if (user.password != pass) {
            return res.json({
                status: false,
                message: "invalid Email/Password"

            });
        }

        res.json({
            status: true,
            message: "login success !",
            user: user

        })



    });
}

export const userRegister = (req, res) => {
    const { firstname, lastname, username, password, email, phonenumber, address, postalcode } = req.body;

    // Check if required fields are provided
    if (!firstname || !lastname || !username || !password || !email) {
        return res.json({
            status: false,
            message: "Please provide all required fields"
        });
    }

    const sql = `INSERT INTO users (firstname, lastname, username, password, email, phonenumber, address, postalcode, created_at) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`;

    db.query(sql, [firstname, lastname, username, password, email, phonenumber, address, postalcode], (err, result) => {
        if (err) {
            return res.json({
                status: false,
                message: "unable to register user",
                error: err.message
            });
        }

        res.json({
            status: true,
            message: "User registered successfully!"
        });
    });
}