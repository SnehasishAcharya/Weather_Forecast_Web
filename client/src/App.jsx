import { useState } from 'react'
import SearchForm from './components/SearchForm'
import WeatherDisplay from './components/WeatherDisplay'
import ErrorMessage from './components/ErrorMessage'
import './App.css'
import axios from 'axios'

function App() {
  const [weatherData,setWeatherData]=useState(null)
  const [error,setError]=useState({occurred:false,message:" "})
  const handleCitySearch= async(cityName)=>{
    try{
      const response=await axios.post(`${import.meta.env.VITE_API_URL}/api/weather`,{cityName:cityName})
       setWeatherData(response.data)


    }
    catch(err){
      setError({occurred:true,message:err.message})


    }

  }

  if(error.occurred){
    return(
      <>
      <ErrorMessage error={error} />
      </>
      
    )
  }

  return (
    <>
    <div className="App">
      <header className='App-header'>
        <h1>Weather Forecast App</h1>
        <SearchForm onSearch={handleCitySearch}/>
        <WeatherDisplay weatherData={weatherData}/>
      </header>

    </div>
      
    </>
  )
}

export default App
