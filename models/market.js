const mongoose=require("mongoose");
const {Schema}=mongoose;

const marketSchema= new mongoose.Schema(
    {
        tittle:String,
        image:String,
        content:{
            type:String
        },
        date:Date

    }
)

const Market=mongoose.model("Market",marketSchema);
module.exports=Market;