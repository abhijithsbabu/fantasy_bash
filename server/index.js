const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express()

const user_model = require("./models/users");
const { Console } = require('console');
const e = require('express');

app.use(express.json())
app.use(cors())

mongoose.connect(
    "mongodb+srv://abhi183:escn1838@cluster0.uainy.mongodb.net/Akvkf?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
    }
);

app.post("/signin", async(req,res)=>
{
    const uname = req.body.name;
    const pwd = req.body.password;
    console.log("posted data")
    const newuser = new user_model({
        username:uname,
        password:pwd,
    });
    try {  
    await newuser.save();
    res.send()
    } catch (error) {
        console.log(error)
    }
})

app.post('/login', async(req,res) => {
    const uname = req.body.uname;
    const pwd = req.body.pwd;
    console.log(uname)
    user_model.find({username:uname},(err,result) => {
        if(err){
            throw err
        }
        console.log(result)
        if(result.length==0)
        {
            res.send({"msg":"no_user"})
        }
        else{
            console.log(result[0].password)
            if(result[0].password == pwd){
                res.send({"msg":"true"})
            }
            else res.send({"msg":"false"})
        }
    });
})

app.listen(8044,()=>{
    console.log("Server running successfully on 8044")
})