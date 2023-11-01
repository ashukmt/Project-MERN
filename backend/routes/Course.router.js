const express = require('express')
const {CourseModel} = require('../models/Course.model')

const CourseRouter = express.Router()

CourseRouter.get('/',async(req,res)=>{
    try{
        
        const courses = await CourseModel.find();
        if(!courses) res.status(404).send("Courses not found")
        res.status(200).send(courses)
    }catch(error){
        res.status(500).send("Internal Server Error")
    }
})

CourseRouter.post('/add',async(req,res)=>{
    try{
        const {title,opportunities,role,duration,color,image} = req.body
        const newCourse = new CourseModel({title,opportunities,role,duration,color,image})
        await newCourse.save();
        res.status(200).send("Inserted Sucessfully")
    }catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})

CourseRouter.patch('/update/:_id',async(req,res)=>{
    try{
        const {title,role,opportunities,duration,color,image} = req.body
        const {_id} = req.params
        await CourseModel.findOneAndUpdate({_id},{title,role,opportunities,duration,color,image});
        res.status(200).send('Updated Sucessfully')
    }catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
})

module.exports = {
    CourseRouter
}