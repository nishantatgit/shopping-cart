const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username : { type : String , required : true , unique : true},
    password : { type : String , required : true },
    admin : { type : boolean , default : false}
});

User.plugin(passportLocalMongoose)