const mongoose=require("mongoose");
const {Schema}=mongoose;

const videoSchema= new mongoose.Schema(
    {
        tittle:String,
        video:String,
        date:Date

    }
)

const Video=mongoose.model("Video",videoSchema);
module.exports=Video;