const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    title: String,
    opportunities:String,
    duration:Number,
    color: String,
    image:String,
    role: String
})

const CourseModel = mongoose.model("course",CourseSchema);

module.exports = {
    CourseModel
}