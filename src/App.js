import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Main from './header/main/main';

function App() {
  const text = 'askdfljeiofjse;lfij'
  const API_KEY = "317147e078c54d6c882102156230710";
  const [city,Setcity] = useState("")
  const [weather,setWeather]  = useState({})
  const [isActive,setIsActive] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const  [gradus,setGradus] =  useState("")
  const [humid , setHumid] = useState("")
  const [humidIcon,setHumidIcon] = useState("")
  const [wind,setWind] = useState("")
  const [windIcon,setWindIcon] = useState("")
  const [pressure,setPressure] = useState("")
  const [pressureIcon,setPressureIcon] = useState("")
  const [error,setError] = useState('')



  const getWeather = async () =>{
    
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    
    const data = await response.json()

    try{
      if(response.status === 200){
        setIsActive (true)
    setWeather(data)
    setIsLoading(false)
    setGradus("°C")
    setHumid("Humidity")
    setHumidIcon("%")
    setWind("Wind")
    setWindIcon("mph")
    setPressure("Pressure")
    setPressureIcon("hPA")
    console.log(data)
    setError('')
      } else if(response.status === 400){
        setError("Put the right name of the city")
     defaultWeather()
      } else if(response.status === 404){
        setError("Server isn't working")
        defaultWeather()
      }
    } catch(e){
      console.log(e)
    }
    
    
  }
   const defaultWeather = async()=>{
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bishkek&aqi=no`)
    const data2 = await response.json()
    setWeather(data2)
    Setcity("")
   }


  const resetWeather = async ()  =>{
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bishkek&aqi=no`)
    const data2 = await response.json()
    setWeather(data2)
    setError("")
    Setcity("")
    
  }
  useEffect(() => {
    (async () => {
      
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bishkek&aqi=no`)
        const data = await response.json()
        setWeather(data)
        setIsActive(true)
        setGradus("°C")
    setHumid("Humidity")
    setHumidIcon("%")
    setWind("Wind")
    setWindIcon("mph")
    setPressure("Pressure")
    setPressureIcon("hPA")
      } catch (e) {
        alert('Сервер недоступен или отключен')
      } finally {
        setIsLoading(false)
      }
    })()
  }, []);
  return (
  <div className='App'>
     <Main
     SetCity = {Setcity}
     city={city}
     gradus = {gradus}
     getWeather = {getWeather}

     weather = {weather}
     error={error}
     isActive = {isActive}

     isLoading = {isLoading}
     resetWeather = {resetWeather}
     humid={humid}
     humidIcon = {humidIcon}
     wind={wind}
     windIcon={windIcon}
     pressure={pressure}
     pressureIcon={pressureIcon}
     />
  </div>
  );
}

export default App;
