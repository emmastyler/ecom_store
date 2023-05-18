
const connection = require('../connect');

const addProduct = (async(req, res) => {

    try {
        const {
            name,
            size,
            color,
            oldPrice,
            currentPrice,
            description,
            specification,
            keyFeatures,
            weight,
            availability,
            deliveryStatus,
            videoUrl,
            category,
            subCategory,

        } = req.body;
        if(!req.file){
            res.status(400).json({
                message: 'Please upload a valid product image',
                error: true
            })
        }
        let imageUrl = req.file.path;
        //console.log(imageUrl);
       
        let filename= req.file.filename;
        let sizes = req.file.size;

        const splits = filename.split("-")
        const resplits = splits[1].split(".")
        const value = resplits[0];
        const customId = sizes + Number(value);

        let insertProductsql = `INSERT INTO products (id, name, size, color, oldPrice, currentPrice, description, specification, keyFeatures,weight,availability,deliveryStatus,imageUrl,videoUrl,category,subCategory) VALUES ('${customId}','${name}', '${size}','${color}','${oldPrice}','${currentPrice}','${description}','${specification}','${keyFeatures}','${weight}','${availability}','${deliveryStatus}','${imageUrl}','${videoUrl}','${category}','${subCategory}')`;
            connection.query(insertProductsql, (err, result) => {
                if(err) throw err;
                res.status(201).json({
                    message: 'Product created successfully',
                    error:false
                });
            })   
            
} catch (error) {
        console.log(error);
    }
});

const updateProduct = (async(req, res) => {
    try {
        const {
            name,
            size,
            color,
            oldPrice,
            currentPrice,
            description,
            specification,
            keyFeatures,
            weight,
            availability,
            deliveryStatus,
            videoUrl,
            category,
            subCategory,

        } = req.body;
        if(!req.file){
            res.status(400).json({
                message: 'Please upload a valid product image',
                error: true
            })
        }

        let imageUrl = req.file.path;
        //console.log(imageUrl);
        let id = req.params.id;
       
        let sql = `SELECT * FROM products WHERE id = ?`;
        connection.query(sql, [id], function(err, result) {
            if (err) throw err;
            if(result.length > 0){

                let updateProductSql = `UPDATE products SET name =?, size = ?, color = ?, oldPrice = ?, currentPrice = ?, description = ?, specification = ?, keyFeatures = ?, weight = ?, availability = ?, deliveryStatus = ?, imageUrl = ?, videoUrl = ?, category = ?, subCategory = ? WHERE id =?`;

                connection.query(updateProductSql, [name, size, color, oldPrice, currentPrice, description, specification, keyFeatures, weight, availability, deliveryStatus, imageUrl, videoUrl,category, subCategory, id],(err, result) => {
                    if(err) throw err;
    
                })   
                res.status(201).json({
                    message: 'Product details updated successfully',
                    error:false
                });
            }
            else{
                res.json({
                    message: 'Product not found',
                    error:true
                })
               
            }
        })

} catch (error) {
        console.log(error);
    }
})


const deleteProduct = (async(req, res) => {
try {
    const {id} = req.params;
    console.log(id);
    let deleteProductSql = `DELETE FROM products WHERE id =?`;
    connection.query(deleteProductSql, [id],(err, result) => {
        if(err) throw err;
        console.log(result);
        if(result.affectedRows > 0) {
            res.status(201).json({ 
                message: 'Product deleted successfully',
                error:false
            })
        }
        else{
            res.status(401).json({
                message: 'Product not found',
                error:true
            })
        }
       
    })
} catch (error) {
    console.log(error);
}
});

const allProducts = (async (req, res) => {
    try {
        let sql = `SELECT * FROM products WHERE 1`;
    connection.query(sql, function(err, result) {
        if (err) throw err;
        //console.log(result);
        if(result.length > 0){
            res.status(200).json({
               
                data:result
            })
        }

        else {
            res.status(404).json({
                message: 'Product not found',
                error:true
            })
        }
    })
    } catch (error) {
        console.log(error);
    }
    
});

const singleProduct = (async (req, res) => {
    try {
        let {id} = req.params;
        let sql = `SELECT * FROM products WHERE id = ?`;
        connection.query(sql, [id], function(err, result) {
            if (err) throw err;
            //console.log(result);
            if(result.length > 0){
                res.status(200).json({ 
                    data:result
                })
            }
            else {
                res.status(404).json({
                    message: 'Product not found',
                    error:true
                })
            }
        }) 
    } catch (error) {
        console.log(error);
    }
    
});


module.exports = {addProduct, updateProduct, deleteProduct, allProducts, singleProduct}