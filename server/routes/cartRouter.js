const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get('/:userid',cartController.get_cart_details);
router.post('/',cartController.add_item_to_cart);
router.delete('/', cartController.clear_cart);
router.delete('/:pid',cartController.delete_item_from_cart);

module.exports = router;