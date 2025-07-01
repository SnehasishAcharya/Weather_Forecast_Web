import React from 'react'
import { useState } from 'react'
import "./WeatherSearch.css"

const WeatherSearch =({onSearch}) => {
    const [city,setCity]=useState('')
    const [loading,setLoading]=useState(false)
    const  handleSubmit= async(e)=>{
        e.preventDefault();
        setLoading(true)
        try{
          await onSearch(city)

        }
        finally{
          setLoading(false)
        }

    }
  return (
    <>
    <form onSubmit={handleSubmit} className='search-form'>
        <div className="search-input-container">
          <input type="text" placeholder='Search City Name' className='search-input' disabled={loading} value={city} onChange={(e)=>{
            setCity(e.target.value) 
        }}  />
        </div>
        <input type="submit" value={loading?"Searching":"Search"} disabled={loading} className='search-button' />
    </form>
    </>
  )
}

export default WeatherSearch
