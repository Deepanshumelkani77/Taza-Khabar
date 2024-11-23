const mongoose=require("mongoose");
const {Schema}=mongoose;

const govermentSchema= new mongoose.Schema(
    {
        tittle:String,
        image:String,
        content:{
            type:String
        },
        date:Date

    }
)

const Goverment=mongoose.model("Goverment",govermentSchema);
module.exports=Goverment;