const express=require("express");
const router=express.Router();
const World=require("../models/world.js");


router.get("/",async(req,res)=>{

    let world=await World.find({});
  
  res.render("./world/home.ejs",{world})
  
  })

  router.get("/:id",async(req,res)=>{

    let {id}=req.params;
    
    let world=await World.findById(id);
    
    
    res.render("./world/show.ejs",{world});
    
    
    })


module.exports=router;