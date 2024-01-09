
function App() {
const key = import.meta.env.VITE_KEY
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=imperial&q="
  return (
<div className="card">
  <div className="search">
    <input type="text" />
  </div>
</div>

  )
}

export default App
