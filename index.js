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



app.get("/recipe/:id", (req,res)=> {
    const recipeId = req.params.id;
   
    const findData = chefData.chefs.find((data) => data.id === recipeId);
    res.send(findData)
})

app.listen(port, ()=>{
    console.log('connected successfully')
})