const express = require('express');
const pcatController = require('../controllers/pcatController');

const router = express.Router();
router.get('/',pcatController.category_list_get);

module.exports = router;