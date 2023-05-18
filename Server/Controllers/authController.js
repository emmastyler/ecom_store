const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('../connect');

const {sendConfirmationEmail, sendPasswordResetEmail} = require('../email/transporter');


const createUser = (async (req, res, next) => {

    try {
        const { 
            fullName, 
            phone, 
            email, 
            password
            /*phone,
            city,
            state,
            country,
            address,
            district, */

            } = req.body;
            //const password = '';
            

        const token = jwt.sign({email:email}, process.env.JWT_SECRET);

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const confirmationCode =  token;
    
        //!check if user exists

        let userExist = `SELECT * FROM customers WHERE email = ? OR phone = ? `;
        connection.query(userExist, [email, phone], function (err, result) {
            if (err) throw err;
            if (result.length > 0) {
               
                const user = result.map((user) =>
                    {
                    return {
                        values: user.email === email ? 'Email' : user.phone === phone ? 'Phone Number' : '',
                        key: user.email? user.email : user.phone? user.phone : user

                            }
                    })

                if(user !== undefined){
                    const values = user.map((uservalue) => uservalue.values);
                    res.status(403).json({
                        message:`${values[0]} already exists`
                    });
                    //console.log(process.env.PORT);
                }
            }
            else {

                    // program to generate random strings for UserId

                    // declare all characters
                   /*  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    const character ='0123456789';

                    function generateString(length) {
                        let result = ' ';
                        const charactersLength = characters.length;
                        for ( let i = 0; i < length; i++ ) {
                            result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }

                        return result.trim();
                    }
 */
                   /*  function generateString2(length) {
                        let results = ' ';
                        const characterLength = character.length;
                        for ( let i = 0; i < length; i++ ) {
                            results += character.charAt(Math.floor(Math.random() * characterLength));
                        }

                        return results.trim();
                    }
                    const userId = generateString(16);
                    const blockChainId = generateString2(2); */
                   
                        
                       /*  const insertID = `G-${result.length + 1}${blockChainId}`;
                        console.log(blockChainId);    */

                        let sql = `INSERT INTO customers (firstname, email, phone, password) VALUES ('${fullName}', '${email}','${phone}', '${hashedPassword}')`;
                        connection.query(sql, (err, result) => {
                            if(err) throw err;

                            sendConfirmationEmail(
                                fullName,
                                email,
                                confirmationCode
                                
                         );
                        })      
                    
             console.log(fullName + ' ' + email );
             res.status(201).json({
                message: 'Signup successful'
            });
            }
             
        });

        
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }


});

const loginUser = (async (req, res, next) => {
   try {
    const { email, password } = req.body;
    
    let sql = `SELECT * FROM customers WHERE email = ?`;
    connection.query(sql, [email], function(err, result) {
        if (err) throw err;
        if(result.length > 0){
        const match = bcrypt.compareSync(password, result[0].password);
             //console.log(match);   
             //console.log(result[0].password);  
             if(match){
                const tokenSecret = jwt.sign(
                    { password: result[0].password },
                    process.env.JWT_SECRET,
                    {
                    expiresIn: "3m",
                    }
                );
                res.status(200).json({
                    'data': {
                        id:result[0].id,
                        email:result[0].email,
                        phone:result[0].phone,
                        fullname:result[0].firstname 
                    },
                    'token': tokenSecret,
                    'message':'Login Successfull',
                    
                })   
             }   
             else {
                res.status(401).json({
                    message: 'Password or Email is incorrect'
                })
             }  
        }

        else{
            res.status(401).json({
                message: 'Email or Password is incorrect'
            })
        }
        
    });

    

   } catch (error) {
    console.log(error.message);
    res.json({error: error.message});
   }

});

const resetPassword = (async (req, res, next) => {
    try {
        const { email } = req.body;
    
        let sql = `SELECT * FROM customers WHERE email = ?`;
        connection.query(sql, [email], function(err, result) {
            if (err) throw err;
            if(result.length > 0){
                const firstname = result[0].firstname;
                const id = result[0].id;
                const secret = process.env.JWT_SECRET + result[0].password;
                const payload = {
                    email: result[0].email,
                    id: result[0].id,
                }
                const token = jwt.sign(payload,secret, { expiresIn: "15m" });
                sendPasswordResetEmail(
                    firstname,
                    email,
                    id,
                    token            
             );
                
            }

            else {
                res.status(401).json({
                    'message':'Invalid Email',
                    
                })   
            }
        });
    } catch (error) {
        
    }
})

const changePassword = (async (req, res, next) => {
    try {
    const token = req.query.token;
    const id = req.query.id
    const { password, confirmPassword } = req.body;

    if(password!== confirmPassword){
        res.status(500).json({ message:'Passwords do not match' });
    } else{
        let sql = `SELECT * FROM customers WHERE id = ?`;
        connection.query(sql, [id], function(err, result) {
            if (err) throw err;
            if(result.length > 0){
                const secret = process.env.JWT_SECRET + result[0].password;
                //const payload = jwt.verify(token,secret);

                const jwtVerify = jwt.verify(token, secret, function(err, decoded) {
                    if (err) {
                      
                       return err = {
                          name: err.name,
                          message: err.message
                        }
                      
                    }

                    //console.log(decoded);
                    //console.log(err);

                    return req.payload = decoded?.id
                    //console.log(req.payload);
                  });

               //console.log(jwtVerify);

                if(jwtVerify == id){
                     const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(password, salt);
                let changePasswordSql = `UPDATE customers SET password =? WHERE id =?`;
                connection.query(changePasswordSql, [hashedPassword, req.payload], function(err, result) {

                    if (err) throw err;

                    res.status(200).json({
                        message: 'Password changed'
                    })
                })
                } 
                
                else {
                    res.status(401).json({
                        name:jwtVerify.name,
                        message: jwtVerify.message
                    })
                }
            }

            else{
                res.status(401).json({
                    message:'Invalid Id',
                })
            }
        })
    }

    } catch (error) {
        console.log(error.message);
        res.send(error.message)
    }
    
    
})
/* const validateUser = (async (req, res, next) => {
    try {
        const { loginPin, blockChainId } = req.body;

        const sql = `SELECT * FROM coredb WHERE LoginAuth =? AND BlockchainID =?`;
        connection.query(sql, [loginPin, blockChainId], function(err, result) {
            if (err) throw err;
            if(result.length > 0){

                 // Create token
                const tokenSecret = jwt.sign(
                    { pin: loginPin },
                    process.env.JWT_SECRET,
                    {
                    expiresIn: "3m",
                    }
                );
                res.status(200).json({
                    'token': tokenSecret,
                    'message':'Login Successfull',
                    
                })   
            }
            else {
                res.status(401).json({'message':'Login Pin is incorrect'});
                console.log('No record found');
            }
        })
        
    } catch (error) {
        
    }
}) */

module.exports = {createUser, loginUser, resetPassword, changePassword}; 