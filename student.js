const express =require('express');
const  Student_table= require('./mens');
const router= new express.Router();
console.log("routerrrrrrr");
router.post("/mens", async (req,res) =>{
    try{
        const addingrecord= new Student_table(req.body)
       //res.write(addingrecord);
         const insertmen= await addingrecord.save();   //saves data in db 
         res.status(201).send(insertmen );
        } catch(e){
         res.status(400).send(e);
                 }
   
})

//read data
router.get('/mens', async (req,res) =>{
    try{
        const getstudents=await Student_table.find({}) 
         res.send(getstudents );
        } catch(e){
         res.status(400).send(e);
                 }
    
})

//data of a particular individual
router.patch('/mens/:id', async (req,res) =>{
    try{
        const _id=req.params.id;
       const getstudent=await Student_table.findByIdAndUpdate(_id,req.body,{new:true}) //new means show me new dat
        res.send(getstudent );
       } catch(e){
        res.status(500).send(e);   //the server encountered an unexpected condition that prevented it from fulfilling the request.
                }
})

//delete
router.delete('/mens/:id', async (req,res) =>{
    try{
        const _id=req.params.id;
       const getstudent=await Student_table.findByIdAndDelete(_id,req.body) 
        res.send(getstudent );
       } catch(e){
        res.status(500).send(e);              //the server encountered an unexpected condition that prevented it from fulfilling the request.
                }
})

router.get('/query', async (req ,res) =>{
    try{
       // const name=req.params.name;
       //const querystudent=await Student_table.deleteOne({name: "mehvish"})   //deleteMany
       //const querystudent=await Student_table.exists({name: "mehvish"})
       //const querystudent=await Student_table.findOne({name:"mehvish"}) //new means show me new dat
       const querystudent=await Student_table.where("name").equals("mehvish")
        res.send(querystudent );
        console.log(querystudent);
       } catch(e){
        res.status(500).send(e);   //the server encountered an unexpected condition that prevented it from fulfilling the request.
                }
})
module.exports=router;