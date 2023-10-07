const express = require("express")
const { EventModel } = require("../models/Event.model");

const EventRouter = express.Router();

EventRouter.post("/addevent", async(req, res) => {
  const {
    title,
    position,
    img,
    people,
    start_time,
    type1,
    end_time,
    type2,
    duration,
    date,
    month,
    video,
    speaker,
    instructor_desc,
    instructor_img,
  } = req.body;

  const new_event = await new EventModel({
    title,
    position,
    img,
    people,
    start_time,
    type1,
    end_time,
    type2,
    duration,
    date,
    month,
    video,
    speaker,
    instructor_desc,
    instructor_img
  })

  new_event.save();
  res.send({msg:"event added successfully"});
});

EventRouter.get("/getevents",async(req,res)=>{
  const my_events = await EventModel.find();
  res.send(my_events);
})

module.exports = {
    EventRouter
}
