const express = require("express");
const app = express();
const port = 5000;
var cors = require('cors')

const chefData = require('./data/chef.json');

app.use(cors());

app.get("/", (req, res)=>{
    res.send('server connected successfully')
})

app.get("/chef", (req,res)=>{
    res.send(chefData)
})

app.listen(port, ()=>{
    console.log('connected successfully')
})