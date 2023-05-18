const express = require('express');
const Router = express.Router();
const dashboardController = require('../Controllers/dashboardController');
const auth = require('../Middleware/auth');

Router.get('/dashboard/user', auth, dashboardController.user);

module.exports = Router; 