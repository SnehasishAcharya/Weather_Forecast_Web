require("dotenv").config()
const axios=require("axios")
const API_KEY=process.env.API_KEY
const BASE_URI="https://api.openweathermap.org/data/2.5/"
async function getCurrentWeather(city) {
    try{
        const response=await axios.get(`${BASE_URI}/weather`,{
            params:{
                q:city,
                units:"metric",
                apiId:API_KEY
            }
        })
         return response.data
    }
    catch(err){
        console.log("Error getting the current weather :",err)
        throw err

    }
    
}
async function getForecast(city) {
    try{
        const response=await axios.get(`${BASE_URI}/forecast`,{
            params:{
                q:city,
                units:"metric",
                apiId:API_KEY

            }
        })

    }
    catch(err){
        console.log("error getting the forecast:",err)
        throw err



    }
    
}
module.exports={getCurrentWeather,getForecast}