const express=require("express");
const router=express.Router();
const News=require("../models/news.js");



    //news
router.get("/news",async(req,res)=>{

    let news=await News.find({});
    
    res.render("./news/home.ejs",{news});
    })
    
    router.get("/news/:id",async(req,res)=>{
    
    let {id}=req.params;
    
    let news=await News.findById(id);
    
    
    res.render("./news/show.ejs",{news});
    
    
    })

    module.exports=router;