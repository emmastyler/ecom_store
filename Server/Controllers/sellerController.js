const connection = require('../connect');
const {sendStoreCreatedEmail} = require('../email/transporter');


const becomeSeller = (async (req, res) => {
    try {
        const {name, url, bio, email, whatsapp, address} = req.body;
        if(!req.file){
            res.status(400).json({
                message: 'Please upload a valid banner image',
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


        let sellerExist = `SELECT * FROM sellers WHERE name = ?`;
        connection.query(sellerExist, [name], function (err, result) {
            if(err) throw err;
            if (result.length > 0) {
                res.status(403).json({
                    message:`Store name not available`,
                    error:true
                });
            }
            else{
                let sql = `INSERT INTO sellers (id, name, url, bio, email, whatsapp, address, imageUrl) VALUES ('${customId}', '${name}', '${url}','${bio}', '${email}', '${whatsapp}', '${address}', '${imageUrl}')`;
                        connection.query(sql, (err, result) => {
                            if(err) throw err;

                            sendStoreCreatedEmail(
                              name,
                              url, 
                              email,
                              whatsapp,
                              address,
                         );
                        })   
                        res.status(201).json({
                            message: 'Store created successfully',
                            error:false
                        });
            }
        })

    } catch (error) {
        
    }
   
});

const updateSeller = (async (req, res) => {
    try {
        const {name, url, bio, email, whatsapp, address} = req.body;
        let imageUrl = req.file.path;

        let sellerExist = `SELECT * FROM sellers WHERE email = ?`;
        connection.query(sellerExist, [email], function (err, result) {
            if(err) throw err;
            if (result.length > 0) {
                
                let changeSellerSql = `UPDATE sellers SET name =?, url = ?, bio = ?, whatsapp = ?, address = ? imageUrl = ? WHERE email =?`;
                connection.query(changeSellerSql, [name, url, bio, whatsapp, address, imageUrl, email], function(err, result) {

                    if (err) throw err;
                    res.status(200).json({
                        message: 'Store details updated successfully',
                        error:false                    
                    })
                })
                

            }
            else {
                res.status(404).json({
                    message: 'Store not found',
                    error:true
                })
            }
    })
    } catch (error) {
        console.log(error);
        res.json({message: error, error: true})
    }
});

const singleSeller = (async (req, res) => {
    try {
        let {name} = req.params;
        let sellerExist = `SELECT * FROM sellers WHERE name = ?`;
        connection.query(sellerExist, [name], function (err, result) {
            if(err) throw err;
            if (result.length > 0) {
                res.status(200).json({
                    data:result
                })
            }
            else {
                res.status(404).json({
                    message: `Store not found`,
                    error: true
                })
            }
            });

    } catch (error) {
        
    }
});

const allSellers = (async (req, res) => {
    try {
        let sellersExist = `SELECT * FROM sellers WHERE 1`;
        connection.query(sellersExist, function (err, result) {
            if(err) throw err;
            if (result.length > 0) {
                res.status(200).json({
                    data:result
                })
            }
            else {
                res.status(404).json({
                    message: `Stores not found`,
                    error: true
                })
            }
            });

    } catch (error) {
        
    }
});


const deleteSeller = (async (req, res) => {

})

module.exports = {becomeSeller, updateSeller, singleSeller, allSellers, deleteSeller};