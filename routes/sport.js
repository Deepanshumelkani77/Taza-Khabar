const express=require("express");
const router=express.Router();
const Sport=require("../models/sport.js");

router.get("/",async(req,res)=>{

    let sport=await Sport.find({});
  
  res.render("./sport/home.ejs",{sport})
  
  })
  
  router.get("/:id",async(req,res)=>{
  
    let {id}=req.params;
    
    let sport=await Sport.findById(id);
    
    
    res.render("./sport/show.ejs",{sport});
    
    
    })

    module.exports=router;