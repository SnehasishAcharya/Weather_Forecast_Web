import React, { useState } from 'react'
import "./SearchForm.css"

const SearchForm = ({onSearch}) => {
    const [cityName,setCityName]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const handleSearch=async(e)=>{
       
        e.preventDefault()
        setIsLoading(true)
        
        try{
            if(cityName.trim()!=''){
            
            await onSearch(cityName)
        }
        }
        catch(err){
            console.log("Someting error:",err.message)
        }
        finally{
            setIsLoading(false)
            setCityName('')
        }

        
        

    }
  return (
    <div className='search-form-container'>
        <form onSubmit={handleSearch}>
            <input type="text" placeholder='Enter City Name' disabled={isLoading} onChange={(e)=>{
                setCityName(e.target.value)
            }} value={cityName} className='search-input' aria-label='Search city name' />
            <button type='submit' disabled={isLoading} className={isLoading?'searching-button':'search-button'}>{isLoading?'searching':'search'}</button>
        </form>
      
    </div>
  )
}

export default SearchForm
