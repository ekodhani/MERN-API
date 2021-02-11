const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// Create -> Post
router.post('/product', productsController.createProduct)

// Read-> Get
router.get('/products', productsController.getAllProducts)

module.exports = router;