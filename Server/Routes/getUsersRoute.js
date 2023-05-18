const express = require('express');
const Router = express.Router();
const getUsersController = require('../Controllers/getUsersController');


Router.get('/users', getUsersController.getUsers);

module.exports = Router; 