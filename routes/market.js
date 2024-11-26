const express=require("express");
const router=express.Router();
const Market=require("../models/market.js");


  //market page

  router.get("/",async(req,res)=>{

    let market=await Market.find({});
  
  res.render("./market/home.ejs",{market})
  
  })
  
  router.get("/:id",async(req,res)=>{

    let {id}=req.params;
    
    let market=await Market.findById(id);
    
    
    res.render("./market/show.ejs",{market});
    
    
    })



module.exports=router;