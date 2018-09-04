const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();
router.get('/',inventoryController.get_inventories_list);

module.exports = router;