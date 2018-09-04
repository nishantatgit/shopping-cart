const express = require('express');
const productController = require('../controllers/productCrontoller');

const router = express.Router();

router.get('/', productController.product_list_get);
router.get('/:pcatid/',productController.product_list_get_by_category); 

module.exports = router;