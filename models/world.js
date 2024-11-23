const mongoose=require("mongoose");
const {Schema}=mongoose;

const worldSchema= new mongoose.Schema(
    {
        tittle:String,
        image:String,
        content:{
            type:String
        },
        date:Date

    }
)

const World=mongoose.model("World",worldSchema);
module.exports=World;