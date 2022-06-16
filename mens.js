const express=require('express');
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/newdatabase",{
    useUnifiedTopology:true,
    useNewUrlParser:true})
 .then( () =>{console.log("connection successfull")   }) 
 .catch( (e) =>{ console.log("con failed ")  })

//schema
const stuschema = new mongoose.Schema({
    roll_no:{
        type:Number,
        require:[true,"Rollno is required"],
        unique:true,        
        minlength:3,
        maxlength:20
        
    } ,
    name:{
        type:String,
        require:true,
        uppercase:true,
        trim:true,
        description: "must be a string and is required"
    } ,
    score:{
        type:Number,
        require:true,
        trim:true
    },
    dob:{
        type:Date,
        require:true,
        trim:true
    },

})

const  Student_table = new mongoose.model("Student_table",stuschema);
 module.exports=Student_table;
 //module.exports.var =10;