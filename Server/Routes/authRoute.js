const express = require('express');
const Router = express.Router();
const authController = require('../Controllers/authController');

Router.post('/api/register', authController.createUser);
Router.post('/api/login', authController.loginUser);
Router.post('/api/reset-password', authController.resetPassword);
Router.post('/api/change-password', authController.changePassword);



module.exports = Router; 