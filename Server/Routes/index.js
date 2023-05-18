const express = require('express');
const Router = express.Router();
const indexController = require('../Controllers/indexController');

Router.get('/', indexController.fetchUsers);

module.exports = Router; 