const express = require('express')
const mongoose = require('mongoose')
const { QuestionModel } = require('../models/Question.model')

const QuestionRouter = express.Router()

QuestionRouter.get('/',async(req,res)=>{
    try{
        const questions =  await QuestionModel.find()
        if(!questions) res.status(404).json({error: true,message:"Question not found"})
        res.status(200).json(questions)
    }catch(e){
        console.log(e)
        res.status(500).json({error:true, message:"Internal Server Error"})
    }
})

QuestionRouter.post('/add',async(req,res)=>{
    try{
        const {ques,options,ans,category} = req.body;
        const question = new QuestionModel({ques,options,ans,category})
        const result = await question.save()
        if(result){
             res.status(200).send("Question Added successfull")
             return;
        }
        res.status(401).json({error:true,message:"Wrong Data entered"})
    }catch(error){
        console.log(error)
        res.status(500).send({error:true,meesage:"Internal Server Error"})
    }
})

QuestionRouter.put('/edit/:_id',async(req,res)=>{
    try{
        const {_id} = req.params
        const {ques,options,ans,category} = req.body;
        const result = await QuestionModel.findOneAndUpdate({_id},{ques,options,ans,category})
        if(result){
             res.status(200).send("Question Updated successfull")
             return;
        }
        console.log(result)
        res.status(401).json({error:true,message:"Wrong Data entered"})
    }catch(error){
        console.log(error)
        res.status(500).send({error:true,meesage:"Internal Server Error"})
    }
})

module.exports = { QuestionRouter }