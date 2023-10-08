const mongoose = require("mongoose");
const schema=mongoose.Schema({
    userName:{type:String,required:true},
    password:{type:String,required:true},
})

const AdminModel=mongoose.model("cources",schema);

module.exports = {
   AdminModel
}