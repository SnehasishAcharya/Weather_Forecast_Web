const {Schema,model}=require("mongoose")
const fvrtCitySchema=Schema({
    city:{
        type:String,
        required:true,
        trim:true
    },
    weather:{
        temp:Number,
        condition:String
    },
    userId:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now

    }

})
module.exports=model("fvrtcity",fvrtCitySchema)
