const express = require('express');
const Router = express.Router();
const emailVerification = require('../Controllers/verifyEmailController');

Router.get('/confirm', emailVerification.verifyEmail);

module.exports = Router; 