import db from '../config/db.js';


// Get All prodects API
export const GetAllproducts = (req, res) => {

    const sql = "SELECT * FROM things";
    
        db.query(sql, (err, result) => {
    
            if (err) {
                res.json({
                    status: false,
                    message: "unable to fetch data"
                });
    
            } else {
                res.json({
                    status: true,
                    products: result
    
                });
    
            }
    
    
        });
}

// Product Detail API 

export const GetProductDetail = (req, res)=>{

        const productsId = req.params.id;

    const sql = "SELECT * FROM things WHERE id=?";

    db.query(sql, [productsId], (err, result) => {

        if (err) {
            res.json({
                status: false,
                message: "unable to fetch data"
            });

        } else {
            res.json({
                status: true,
                product: result[0]

            });

        }


    });

}