import React, { useEffect, useState } from 'react'
import { getWeatherForecast } from '../utils/api'
import './WeatherForecast.css'

const WeatherForecast = ({city}) => {
    const [forecast,setForecast]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
        const fetchForecast=async()=>{
            try {
                const forecast=await getWeatherForecast(city)
                setForecast(forecast)
                setIsLoading(false)
                console.log(forecast)
                
            } catch (error) {
                setError(error.message)
                setIsLoading(false)
                
            }

        }
        if(city){
            fetchForecast()
        }
    },[city])


    if(isLoading){
        return(
            <div className="forecast-container">
            <h2>5-day weather forecast</h2>
            <p className='loading'>Loading.....</p>
        </div>
        )
    }
    
    if(error){
        return(
            <div className="forecast-container">
            <h2>5-day weather forecast</h2>
            <p className='error'>Unable to fetch forecast Data</p>
        </div>
        )
    }


  return (
    <div className='forecast-container'>
        <h2>5 days Forecast</h2>
        <div className="forecast-grid">
            {forecast.map((day,index)=>(
                <div className="forecast-card" key={index}>
                    <div className="day-header">
                        <span className='day-name'>{new Date(day.dt*1000).toLocaleDateString()}</span>
                    </div>
                    <div className="temperature">
                        <span className='day-temp'>{day.main.temp}&#8451;</span>
                    </div>
                    <div className="weather-description">
                        <span className='description'>{day.weather[0].description}</span>
                    </div>
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default WeatherForecast
