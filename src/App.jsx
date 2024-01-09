
function App() {
const key = import.meta.env.VITE_KEY

const search = async () => {
  const element=document.getElementsByClassName("cityInput")
  if(element[0].value==='')
  {
    return 0
  }
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${element[0].value}&appid=${key}`

  let response = await fetch(apiUrl)
  let data = response.json()
}

 return (
<div className="card">
  <div className="search" >
    <input className="cityInput" type="text" placeholder="Enter City Name"/>
    <div className="search-icon" onClick={()=>{search()}}>
      <img src="assets/search.png" alt="" />
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
        <img src="humidity.png" alt="" />
        <div>
          <p className="humidity">50%</p>
          <p>Humidity</p>
        </div>
      </div>
      <div className="col">
        <img src="wind.png" alt="" />
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
