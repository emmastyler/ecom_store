const connection = require('../connect');
const dotenv = require('dotenv');

dotenv.config();


const verifyPin = (req, res, next) => {
  const pin = req.body.pin || req.query.pin || req.headers["x-access-token"];

  if (!pin) {
    return res.status(403).send("A pin is required for authentication");
  }
  try {
    const decode = 'SELECT * FROM coredb WHERE pin = ?';
    connection.query(decode, [pin], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {

            const decoded = result.map((user) =>
            {
            return {
                status:user.Status,
                details: {
                    firstName:user.FirstName,
                    lastName:user.LastName,
                    email:user.Email,
                    password:user.Password,
                    
                },
                key: user.BlockchainId? user.BlockchainId : user.Password? user.Password : user
                    }
            });
            req.user = decoded;
        }
    });
    
  } catch (err) {
    return res.status(401).send("Invalid Pin");
  }
  return next();
};

module.exports = verifyPin;
