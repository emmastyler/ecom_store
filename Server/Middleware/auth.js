const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();


const verifyToken = (req, res, next) => {
  const bearerHeader = req.body.token || req.query.token || req.headers["authorization"];


  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;

    try {
      const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  } 


  if (!bearerHeader) {
    return res.status(403).send("A token is required for authentication");
  }
  
};

module.exports = verifyToken;