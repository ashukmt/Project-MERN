const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
title : {type:String},
position : {type : String},
img : {type:String},
people : {type:String},
start_time : {type:String},
type1 : {type:String},
end_time : {type:String},
type2 : {type:String},
duration : {type :String},
date : {type:String},
month : {type:String},
video : {type:String},
speaker : {type:String},
instructor_desc : {type:String},
instructor_img :  {type:String},
btn :{type:String},
main_desc : {type:String},
reg_desc : {type:String},
speaker_post:{type:String},
month_num : {type:String},
year : {type:String}
})

const EventModel = mongoose.model("event",eventSchema);

module.exports = {
    EventModel
}