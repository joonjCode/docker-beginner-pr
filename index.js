const mongoose = require("mongoose");
const express = require("express");

const app = express();

const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
    .connect(DATABASE,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
    })
    .then(()=> {
        console.log("DB Connected.");
    })
    .catch(()=>{
        console.log("DB connection failed.");
    });


app.get("/", (req, res)=>{
    res.json({
        message:"You are visiting ROOT"
    })
})
app.listen(8000, ()=>{
    console.log("Listening to port 8000..")
})