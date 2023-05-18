const express = require('express');
const Router = express.Router();
const sellerController = require('../Controllers/sellerController');
const upload = require('../multerStorage/upload');


Router.post('/api/become-seller',upload, sellerController.becomeSeller);
Router.post('/api/edit-seller',upload, sellerController.updateSeller);
Router.get('/api/all-sellers', sellerController.allSellers);
Router.get('/api/single-seller/:name', sellerController.singleSeller);
Router.delete('/api/delete-seller/:id', sellerController.deleteSeller);

module.exports = Router; 