import db from '../config/db.js'

const AddToCart = (req, res)=>{

    const {userID, productID, quantity} = req.body;

    const sql = 'INSERT INTO cart (userID, productID, quantity, created_at) VALUES(?,?,?, NOW())';
    
    db.query(sql,[userID, productID, quantity], (err, result)=>{
        
        if(err){
                return res.json({
                status: false,
                message: "Unable to Add to cart"
            });
        } 
        res.json({
            status: true,
            message: "login success !",
            user: user

        })


    })

}