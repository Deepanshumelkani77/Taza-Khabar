
//setup express
const express = require('express');
const app = express();
const port=7007;
app.listen(port,()=>{
    console.log("app is listening",port);
})




//setup mongodb

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
app.use(express.urlencoded({extended:true}));


//setup Schema

const News=require("./models/news.js")
const Sport=require("./models/sport.js")
const Market=require("./models/market.js")
const Goverment=require("./models/goverment.js")
const World=require("./models/world.js")





//router

const news=require("./routes/news.js");
app.use("/news",news);

const sport=require("./routes/sport.js");
app.use("/sport",sport);

const market =require("./routes/market.js");
app.use("/market",market);

const goverment=require("./routes/goverment.js");
app.use("/goverment",goverment);

const world=require("./routes/world.js");
app.use("/world",world);






      

        //video page

        app.get("/video",async(req,res)=>{
          let video=await Video.find({})
          console.log(video)
          res.render("./video/index.ejs",{video})

        })