const Product = require('../models/productModel');

// @ROUTE   GET /api/products
// @desc    Fetch all products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @ROUTE   GET /api/products/:id
// @desc    Get single product
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

// @ROUTE   POST /api/products/
// @desc    Create a new product
async function createProduct(req, res) {
  try {
    const product = {
      title: 'Sample product',
      description: 'Sample product description',
      price: 100,
    };

    const newProduct = await Product.create(product);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
