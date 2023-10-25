const mongoose = require('mongoose')

const QuestionSchema = mongoose.Schema({
    ques: {type: String, required: true},
    options: {type: Array, required: true},
    ans: {type: Number, required: true},
    category: {type: String, required: true, validate: (val)=>val==="aptitude"||val==="logical"||val==="coding"||val==="communication"}
})

const QuestionModel = mongoose.model('question',QuestionSchema)

module.exports = {QuestionModel}