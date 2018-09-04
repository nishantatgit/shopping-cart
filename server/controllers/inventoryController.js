const inventory = require('../models/inventory');

exports.get_inventories_list = (req,res) => {
    inventory.find({},(err, inventories) => {
        res.json(JSON.stringify(inventories));
    });
}
