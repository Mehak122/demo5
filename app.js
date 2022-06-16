//This is CRUD in Mongoose and Node wwith query..

const express = require('express');
const Student_table=require("./mens");     //
//const router = require(" ../Routers./student");
const router = require("./student");
const app = express();
const port = process.env.PORT || 3001;     //dynamic port
const bcrypt = require ('bcryptjs');


const securepassword = async (password) => {
    const passwordhash=await bcrypt.hash(password , 10)  ;                 //returns a promise
    console.log(passwordhash);

    const passwordmatch = await bcrypt.compare(password, passwordhash);
    console.log(passwordmatch);
} 
securepassword("mehak@123");


app.get('/', async (req,res) =>{
    try{
   const result= await Student_table
    //.find({roll_no :2})             //find sty with roll =2
    .find( {roll_no : {$gt : 3 } } )     //$lte   $in     // .find({roll_no  : {$in :[2] } })
    .select({ })
    .limit(1)
    console.log(result);
    res.send(result);
    }
    catch(e){
        res.status(400).send(e);
                }
    })
app.use(express.json());  //with this we can use api data (which is in json ) in express
app.use(router);



app.listen(port, () =>{
    console.log(`connection is at the port ${port}`);
})

