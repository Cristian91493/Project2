
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
</div>

  )
}

export default App
