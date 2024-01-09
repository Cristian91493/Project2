import { useState } from "react";
import search_icon from "./assets/images/search.png";
import clear_icon from "./assets/images/search.png";
import cloud_icon from "./assets/images/clouds.png";
import drizzle_icon from "./assets/images/drizzle.png";
import humidity_icon from "./assets/images/humidity.png";
import mist_icon from "./assets/images/mist.png";
import rain_icon from "./assets/images/rain.png";
import snow_icon from "./assets/images/snow.png";
import wind_icon from "./assets/images/wind.png";
import "./App.css";

function App() {
  const key = import.meta.env.VITE_KEY;

  const [wicon, setWicon] = useState(cloud_icon);
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("Austin");
  const [error, setError] = useState("");

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${element[0].value}&appid=d4079964a3cd9077c9d812e80619f6f3`;

    try {
      let response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      let data = await response.json();
      console.log(data);

      setHumidity(data.main && data.main.humidity ? data.main.humidity : "");
      setWindSpeed(data.wind && data.wind.speed ? data.wind.speed : "");
      setTemperature(data.main && data.main.temp ? data.main.temp : "");
      setLocation(data.name ? data.name : "Austin");

      // Set the weather icon based on data.weather[0].icon
      if (data.weather && data.weather.length > 0) {
        const iconCode = data.weather[0].icon;
        setWeatherIcon(iconCode);
      } else {
        setWicon(clear_icon); // Default icon if data is not available
      }

      // Reset the error state in case the previous search had an error
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again.");
    }
  };

  const setWeatherIcon = (iconCode) => {
    // Add your icon logic here based on iconCode
    // Example logic:
    if (iconCode === "01d" || iconCode === "01n") {
      setWicon(clear_icon);
    } else if (iconCode === "02d" || iconCode === "02n") {
      setWicon(cloud_icon);
    } else if (iconCode === "03d" || iconCode === "03n") {
      setWicon(drizzle_icon);
    }
    // ... Add more conditions for other icon codes
  };

  return (
    <div className="card">
      <div className="search">
        <input className="cityInput" type="text" placeholder="Enter City Name" />
        <div className="search-icon" onClick={() => search()}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="error" style={{ display: error ? "block" : "none" }}>
        <p>{error}</p>
      </div>
      <div className="weather">
  <img src={wicon} alt="Weather Icon" />
  <h1 className="temp">{temperature}° F</h1>
  <h2 className="city">{location}</h2>
  <div className="details">
    <div className="col">
      <img src={humidity_icon} alt="Humidity Icon" />
      <div>
        <p className="humidity">{humidity}%</p>
        <p>Humidity</p>
      </div>
    </div>
    <div className="col">
      <img src={wind_icon} alt="Wind Icon" />
      <div>
        <p className="wind">{windSpeed} mph</p>
        <p>Wind Speed</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
