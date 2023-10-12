const mongoose = require("mongoose");

const ShareLinkSchema = mongoose.Schema({
    F_name: {type:String,require:true},
    Email: {type:String,require:true},
    Ph_number:{type:String,require:true},
    R_Code:{type:String,require:true}
})

const ShareLinkModel = mongoose.model("ShareLinkData",ShareLinkSchema);

module.exports = {
    ShareLinkModel
}