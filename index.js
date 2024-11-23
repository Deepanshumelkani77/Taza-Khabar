
const express = require('express');
const app = express();
const port=7007;
app.listen(port,()=>{
    console.log("app is listening",port);
})






const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


//setup basic connection


const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const ejsMate=require("ejs-mate");
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));



const News=require("./models/news.js")
const Sport=require("./models/sport.js")



//router

app.get("/news",async(req,res)=>{

let news=await News.find({});

res.render("./news/home.ejs",{news});
})

app.get("/news/:id",async(req,res)=>{

let {id}=req.params;

let news=await News.findById(id);


res.render("./news/show.ejs",{news});


})



//sports page

app.get("/sport",async(req,res)=>{

  let sport=await Sport.find({});

res.render("./sport/home.ejs",{sport})

})

app.get("/sport/:id",async(req,res)=>{

  let {id}=req.params;
  
  let sport=await Sport.findById(id);
  
  
  res.render("./sport/show.ejs",{sport});
  
  
  })