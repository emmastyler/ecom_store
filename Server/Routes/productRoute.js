const express = require('express');
const Router = express.Router();
const productController = require('../Controllers/productController');
const upload = require('../multerStorage/upload');


Router.post('/api/add-product',upload, productController.addProduct);
Router.post('/api/edit-product/:id',upload, productController.updateProduct);
Router.get('/api/get-products', productController.allProducts);
Router.get('/api/get-product/:id', productController.singleProduct);
Router.delete('/api/delete-product/:id', productController.deleteProduct);

module.exports = Router; 