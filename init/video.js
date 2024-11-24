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
tittle:"cricket",
video:"cricket.mp4",
date:new Date('2024-11-17T09:30:00Z')
    }
    ,
    {
tittle:'voting',
video:"voting.mp4",
date:  new Date('2024-11-16T13:00:00Z')
    }


]);