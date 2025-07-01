const API_KEY= "77f1e531159e8d5d84dbd2e773ad8371"
export const getWeatherForecast=async(city)=>{
    try {
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
        if(!response.ok){
            throw new Error("Unable to fetch")
        }
        const data= await response.json()
        return data.list
        
    } catch (error) {
        throw error
        
    }

}