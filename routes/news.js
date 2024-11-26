const express=require("express");
const router=express.Router();
const News=require("../models/news.js");



    //news
router.get("/",async(req,res)=>{

    let news=await News.find({});
    res.render("./news/home.ejs",{news});

    })


    router.get("/new",(req,res)=>{

        res.send("./news/new.ejs");
      })


    
    router.get("/:id",async(req,res)=>{
    
    let {id}=req.params;
    
    let news=await News.findById(id);
    
    
    res.render("./news/show.ejs",{news});
    
    
    })

    

    module.exports=router;