require("dotenv").config()
const axios=require("axios")
const { getCurrentWeather } = require("./weatherApi")
const { response } = require("../app")
const API_KEY= process.env.WEATHER_API_KEY
const BASE_URI="https://api.openweathermap.org/data/2.5/"
async function makeApiCall(endpoints,params) {
    try{
        const response=await axios.get(`${BASE_URI}${endpoints}`,{
            params:{
                ...params,
                units:"metric",
                appid:API_KEY
            }

        })
        return response.data

    }
    catch(err){
        console.log("Api call failed:",err.message,err.response.data)
        throw err

    }
    
}
module.exports= async function getCurrentWeather(city){
    
   return makeApiCall('/weather',{q:city})

}