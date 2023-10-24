const express = require("express");
const { EventModel } = require("../models/Event.model");
const EventRouter = express.Router();

EventRouter.post("/addevent", async (req, res) => {
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
    btn,
    main_desc,
    reg_desc,
    speaker_post,
    month_num,
    year
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
    instructor_img,
    btn,
    main_desc,
    reg_desc,
    speaker_post,
    month_num,
    year
  });

  new_event.save();
  res.send({ msg: "event added successfully" });
});

EventRouter.get("/getevents", async (req, res) => {
  try {
    const { position } = req.query;
    console.log(position);
    if (position) {
      const model = await EventModel.find({ position: position });
      res.status(200).json(model);
    } else {
      const model = await EventModel.find();
      res.status(200).json(model);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
});

EventRouter.get("/searchevents",async(req,res)=>{
  try{
    const query = req.query;
    const model = await EventModel.find({
       $or : [{position: { $regex: query.q, $options: "i" }  },{speaker:{ $regex: query.q, $options: "i" } }]   
    })
    res.status(200).json(model)
  }
  catch(err){
    console.log(err)
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
})



EventRouter.get("/getevents/:eventID", async (req, res) => {
  const { eventID } = req.params;
  const one_event = await EventModel.findOne({ _id: eventID });
  res.send({ one_event });
});

EventRouter.get("/registerevents/:eventID", async (req, res) => {
  const { eventID } = req.params;
  const register_data = await EventModel.findOne({ _id: eventID });
  res.send({ register_data });
});





module.exports = {
  EventRouter,
};
