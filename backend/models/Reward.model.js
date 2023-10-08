const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    Gift_url: {type:String,require:true},
    Gift_name: {type:String,require:true},
    Coin_Req: {type:String,require:true},
})

const RewardModel = mongoose.model("reward",eventSchema);

module.exports = {
    RewardModel
}