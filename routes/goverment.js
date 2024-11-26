const express=require("express");
const router=express.Router();
const Goverment=require("../models/goverment.js");



router.get("/",async(req,res)=>{

    let goverment=await Goverment.find({});
  
  res.render("./goverment/home.ejs",{goverment})
  
  })

  router.get("/:id",async(req,res)=>{

    let {id}=req.params;
    
    let goverment=await Goverment.findById(id);
    
    
    res.render("./goverment/show.ejs",{goverment});
    
    
    })



module.exports=router;