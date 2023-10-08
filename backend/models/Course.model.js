const mongoose = require("mongoose");
const schema=mongoose.Schema({
    course:{type:String,required:true},
    courseName:{type:String,required:true},
    courseSubheadder:{type:String,required:true},
    des1:{type:String,required:true},
    des2:{type:String,required:true},
    des3:{type:String,required:true}
})

const CourcesModel=mongoose.model("cources",schema);

module.exports = {
   CourcesModel
}