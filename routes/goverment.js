const express=require("express");
const router=express.Router();
const News=require("../models/news.js");



router.get("/goverment",async(req,res)=>{

    let goverment=await Goverment.find({});
  
  res.render("./goverment/home.ejs",{goverment})
  
  })

  router.get("/goverment/:id",async(req,res)=>{

    let {id}=req.params;
    
    let goverment=await Goverment.findById(id);
    
    
    res.render("./goverment/show.ejs",{goverment});
    
    
    })



module.exports=router;