const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    Que: {type:String,require:true},
    Ans: {type:String,require:true},
    
})

const FAQModel = mongoose.model("freAskQue",eventSchema);

module.exports = {
    FAQModel
}