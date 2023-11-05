import React from 'react'
import "./main.css"

const Main = ({SetCity ,getWeather,weather,isActive,resetWeather,city,gradus,humid,humidIcon,wind,windIcon,pressure,pressureIcon,error}) => {


  return (
    <div className='main-div'>
      <h1>WeatherApp by Timur</h1>
      <div className='search-div'>
        <input id='search'  type="text" placeholder='City' onChange={(e) => SetCity(e.target.value)} 
        value={city}
        />
        <button className="button" type="button" value="put the city" onClick={getWeather}>Put the city</button>
        <button className='button' type="submit" onClick={resetWeather}> Reset</button>
        </div>
        <div className='resultOfErrors'>
          <p className='error'>{error}</p>
        </div>
        <div className='result-div'>
            <div className='left-content'>
            <span className='country' ><p>{isActive && weather.location.country}</p> </span>
            </div>
            <div className='right-content'>
            <span className='temp'><p>{isActive && weather.current.temp_c}{gradus}</p></span> 
            </div>
            <div className='bottom-content' >
              <div className='options-div'>
              {humid}
              <span><p>{isActive? weather.current.humidity:""}{humidIcon}</p></span>
              </div>
              <div className='options-div'>
              {wind}
              <span><p>{isActive? weather.current.wind_mph:""}{windIcon}</p></span>
              </div>
              <div className='options-div'>
              {pressure}
              <span><p>{isActive? weather.current.pressure_mb:""}{pressureIcon}</p></span>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Main