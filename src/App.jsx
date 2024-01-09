
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
  </div>
</div>

  )
}

export default App
