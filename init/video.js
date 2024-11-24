const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Video=require("../models/video.js");

Video.insertMany([
    {
tittle:"10 second  10 second Biggest Win For A Pre-Poll Alliance In Last 50 Years: PM Modi On Maharashtra",
video:"https://www.ndtv.com/video/biggest-win-for-a-pre-poll-alliance-in-last-50-years-pm-modi-on-maharashtra-864628",
date:new Date('2024-11-17T09:30:00Z')
    }
    ,
    {
tittle:'After Mahayuti Keeps Maharashtra, Next Challenge In Selecting Chief Minister',
video:"https://www.ndtv.com/video/after-mahayuti-keeps-maharashtra-next-challenge-in-selecting-chief-minister-864553",
date:  new Date('2024-11-16T13:00:00Z')
    }


]);