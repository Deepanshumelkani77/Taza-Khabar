const mongoose=require("mongoose");
const {Schema}=mongoose;

const sportSchema= new mongoose.Schema(
    {
        tittle:String,
        image:String,
        content:{
            type:String
        },
        date:Date

    }
)

const Sport=mongoose.model("Sport",sportSchema);
module.exports=Sport;