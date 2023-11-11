const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const referralCodeGenerator = require('referral-code-generator')

const userSchema = mongoose.Schema({
    username : {type : String,required : true},
    email : {type : String,required : true},
    password : {type : String,required:false},
    number : {type : Number,required : false},
    coin: {type: Number,required: false, default: 100},
    referalCode: {type: String, required: false},
    msatScore: {type: Number, required: false, default: 0},
    profilePic: {type: String},
    courseName: {type: String},
    msatDay: {type: String},
    registered: {type: Boolean,default:false}
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {
    UserModel
}