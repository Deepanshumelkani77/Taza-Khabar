
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
const router=express.Router();


//setup Schema

const News=require("./models/news.js")
const Sport=require("./models/sport.js")
const Market=require("./models/market.js")
const Goverment=require("./models/goverment.js")
const World=require("./models/world.js")
const Video =require("./models/video.js")




//router

const news=require("./routes/news.js");
app.use("/news",news);




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


  //market page

  app.get("/market",async(req,res)=>{

    let market=await Market.find({});
  
  res.render("./market/home.ejs",{market})
  
  })
  
  app.get("/market/:id",async(req,res)=>{

    let {id}=req.params;
    
    let market=await Market.findById(id);
    
    
    res.render("./market/show.ejs",{market});
    
    
    })

    //goverment page

    app.get("/goverment",async(req,res)=>{

      let goverment=await Goverment.find({});
    
    res.render("./goverment/home.ejs",{goverment})
    
    })

    app.get("/goverment/:id",async(req,res)=>{

      let {id}=req.params;
      
      let goverment=await Goverment.findById(id);
      
      
      res.render("./goverment/show.ejs",{goverment});
      
      
      })

      //world page

      app.get("/world",async(req,res)=>{

        let world=await World.find({});
      
      res.render("./world/home.ejs",{world})
      
      })

      app.get("/world/:id",async(req,res)=>{

        let {id}=req.params;
        
        let world=await World.findById(id);
        
        
        res.render("./world/show.ejs",{world});
        
        
        })

        //video page

        app.get("/video",async(req,res)=>{
          let video=await Video.find({})
          console.log(video)
          res.render("./video/index.ejs",{video})

        })