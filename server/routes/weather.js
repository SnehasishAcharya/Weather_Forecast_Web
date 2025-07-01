const express=require("express")
const router=express.Router()
const getCurrentWeather=require("../utils/api")
router.post("/weather",async(req,res)=>{
    try {
        const city=req.body.cityName
        const weatherData=await getCurrentWeather(city)
        res.json(weatherData)
        
    } catch (error) {
        res.status(500).json({error:"Failed to upload"})
    }

})
module.exports=router