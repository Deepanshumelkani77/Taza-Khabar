
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





//router

app.get("/news",(req,res)=>{

    res.send("home page");
})