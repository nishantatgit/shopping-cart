const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcatSchema = new Schema({
    pcatid : { type : String , required : true},
    pcatname : { type : String , required : true}, 
    pcatdesc : { type : String , required : false}
});

module.exports = mongoose.model('pcat',pcatSchema);