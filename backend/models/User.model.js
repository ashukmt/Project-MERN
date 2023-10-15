const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const referralCodeGenerator = require('referral-code-generator')

const userSchema = mongoose.Schema({
    name : {type : String,required : true},
    email : {type : String,required : true},
    password : {type : String,required : true},
    number : {type : Number,required : true},
    coin: {type: Number,required: false, default: 100},
    referalCode: {type: String, required: false, default: referralCodeGenerator.alpha('lowercase', 12)},
    msatScore: {type: Number, required: false, default: 0},
    profilePic: {type: String},
    courseName: {type: String}
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {
    UserModel
}