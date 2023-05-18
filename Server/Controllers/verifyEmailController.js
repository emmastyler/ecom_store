const connection = require('../connect');
const verifyEmail = (async (req, res, next) => {
    try {
        const confirmationCode = req.query.confirmationCode;

        let userExist = `SELECT * FROM coredb WHERE token = ?`;
        connection.query(userExist, [confirmationCode], function (err, result) {
            if (err) throw err;
             if(result.length > 0) {
                let sql = "UPDATE coredb SET Status = 'Active' WHERE token = ?";
                connection.query(sql,[confirmationCode], function (err, result) {
                    if (err) throw err;
                    res.status(200).json({message: "Email verified successfully"})
                    console.log(result.affectedRows + " record(s) updated");
                });
                 
                
             }
        })

    } catch (error) {
        console.log(error);
    }

  });

  module.exports = {verifyEmail};