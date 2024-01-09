
function App() {
const key = import.meta.env.VITE_KEY
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=imperial&q="
  return (
<div className="card">
  <div className="search">
    <input type="text" placeholder="Enter City Name"/>
    <button>
      <img src="assets/search.png" alt="" />
    </button>
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
