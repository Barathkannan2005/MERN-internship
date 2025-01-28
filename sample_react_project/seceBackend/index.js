const express = require('express')
const path = require('path')
const mdb = require
const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to Backend \nYOur Roller coster starts from now on\n Fastern your codebase so you can catchup of what is been taught")
})
app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.listen(3001,()=>{
    console.log("Server Started");

})