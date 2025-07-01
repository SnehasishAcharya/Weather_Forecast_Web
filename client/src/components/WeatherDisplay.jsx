import React from 'react'
import WeatherForecast from './WeatherForecast'
import "./WeatherDisplay.css"

const WeatherDisplay = ({weatherData}) => {
    
    if(weatherData==null){
        return(
            <div>
                <p>No weather message</p>
            </div>
        )
    }
  return (
    <>
    <div className="weather-container">
        <div className="main-weather-card">
            <div className="city-info">
                <h2>{weatherData.name}</h2>
            </div>
            <div className="temperature-info">
                <p className='temperature'>{weatherData.main.temp}&#8451;</p>
                <p className='feels-like'><span>Feels like</span>:{weatherData.main.feels_like}&#8451;</p>
            </div>
            <div className="weather-details-grid">
                <div className="detail-card">
                    <h3>Humidty</h3>
                    <p>{weatherData.main.humidity} %</p>
                </div>
                <div className="detail-card">
                    <h3>Wind Speed</h3>
                    <p>{weatherData.wind.speed}KM/H</p>
                </div>
            </div>

        </div>
    </div>
    <WeatherForecast city={weatherData.name} />

    </>
    
  )
}

export default WeatherDisplay
