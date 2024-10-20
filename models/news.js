const mongoose=require("mongoose");
const {Schema}=mongoose;

const newsSchema= new mongoose.Schema(
    {
        tittle:String,
        image:String,
        content:{
            type:String
        },
        date:Date

    }
)

const News=mongoose.model("News",newsSchema);
module.exports=News;