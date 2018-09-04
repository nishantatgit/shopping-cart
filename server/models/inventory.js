const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    inventoryid : { type : String , required : true},
    productid : { type : String , required : true},
    quantity : { type : Number , required : true},
    price : { type : Number , required : true},
});

module.exports = mongoose.model('Inventory',InventorySchema);