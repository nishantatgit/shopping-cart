/*Model name capital and singular (e.g. User)
Collection name small and plural (e.g. users)
Model object mapped/translated to collection document and vice versa (e.g. object of model: new User({name: "abc"}), document in collection: {"name": "abc"})
Model and its objects have methods/hooks (e.g. pre, post hooks; validations etc)*/


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    pid : { type : String , required : true},
    pname : { type : String , required : true},
    pdesc : { type : String , required : false},
    pcatid : { type : String , required : false},
});

module.exports = mongoose.model('Product',ProductSchema);