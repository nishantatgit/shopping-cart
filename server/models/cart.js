const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    cartid : { type : String , required : false},
    userid : { type : String , required : false },
    pid : { type : String , required : false},
    pcatid : { type : String , required : false},
    pname : { type : String , required : false},
    price : {type : Number , required : false }  
});

module.exports = mongoose.model('Cart',CartSchema);
