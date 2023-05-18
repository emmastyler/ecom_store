const connection = require('../connect');
const getUsers = (async (req, res, next) => {
    try {

        const sql = `SELECT * FROM coredb`;
        connection.query(sql, function(err, result) {
            if (err) throw err;
            if(result.length > 0){

                res.status(200).json({
                   result: result
                    
                })   
            }
            else {
                res.status(500).json({'message':'Cannot get users'});
               
            }
        })
        
    } catch (error) {
        console.log(error);
    }
})

module.exports = {getUsers}; 