import { useState } from "react"
import search_icon from "./assets/images/search.png"
import clear_icon from "./assets/images/search.png"
import cloud_icon from "./assets/images/clouds.png"
import drizzle_icon from "./assets/images/drizzle.png"
import humidity_icon from "./assets/images/humidity.png"
import mist_icon from "./assets/images/mist.png"
import rain_icon from "./assets/images/rain.png"
import snow_icon from "./assets/images/snow.png"
import wind_icon from "./assets/images/wind.png"
import "./App.css"


function App() {
const key = import.meta.env.VITE_KEY

const [wicon,setWicon]= useState(cloud_icon)

const search = async () => {


  const element=document.getElementsByClassName("cityInput")
  if(element[0].value==='')
  {
    return 0
  }
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${element[0].value}&appid=d4079964a3cd9077c9d812e80619f6f3`

  let response = await fetch(apiUrl)
  let data = await response.json()
  console.log(data)


  const humidity = document.getElementsByClassName("humidity")
  console.log(humidity)
  const wind = document.getElementsByClassName("wind")
  const temperature = document.getElementsByClassName("temp")
  const location = document.getElementsByClassName("city")

  humidity[0].innerHTML = data.main.humidity
  wind[0].innerHTML = data.wind.speed
  temperature[0].innerHTML = data.main.temp
  location[0].innerHTML = data.name

  if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
  {
    setWicon(clear_icon)
  }
  else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
  {
    setWicon(cloud_icon)
  }
  else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
  {
    setWicon(drizzle_icon)
  }
  else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
  {
    setWicon(drizzle_icon)
  }
  else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
  {
    setWicon(rain_icon)
  }
  else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
  {
    setWicon(rain_icon)
  }
  else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
  {
    setWicon(snow_icon)
  }
  else
  {
    setWicon(clear_icon)
  }
}

 return (
<div className="card">
  <div className="search" >
    <input className="cityInput" type="text" placeholder="Enter City Name"/>
    <div className="search-icon" onClick={()=>{search()}}>
      <img src={search_icon} alt="" />
    </div>
    
  </div>
  <div className="error" style={{display: "block"}}>
    <p>Invalid city name</p>
  </div>
  <div className="weather">
    <img src="" alt="" />
    <h1 className="temp">22° F</h1>
    <h2 className="city">Austin</h2>
    <div className="details">
      <div className="col">
        <img src={humidity_icon} alt="" />
        <div>
          <p className="humidity">50%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="col">
        <img src={wind_icon} alt="" />
        <div>
          <p className="wind">15 mph</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default App
