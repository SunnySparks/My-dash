import React, { useState } from "react";
import axios from "axios";
import cloud from "../../assets/Weather/cloud.png";
import sun from "../../assets/Weather/sun.png";
import rain from "../../assets/Weather/rain.png";
import drizzle from "../../assets/Weather/drizzle.png";
import cloudysun from "../../assets/Weather/cloudysun.png";
import wind from "../../assets/Weather/wind.png";
import snow from "../../assets/Weather/snow.png";
import hail from "../../assets/Weather/hail.png";
import storm from "../../assets/Weather/storm.png";
import scattered from "../../assets/Weather/scattered.png";
import mist from "../../assets/Weather/mist.png";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const weatherImg = () => {
    const weath = weatherData.weather[0].description;
    switch (weath) {
      case "clouds":
        return <img src={cloud} alt="Clouds" />;
        console.log(weath);
        break;
      case "few clouds":
        return <img src={cloudysun} alt="Few Clouds" />;
        console.log(weath);
        break;
      case "broken clouds":
        return <img src={cloudysun} alt="Broken Clouds" />;
        console.log(weath);
        break;
      case "clear sky":
        return <img src={sun} alt="Clear Sky" />;
        console.log(weath);
        break;
      case "rain":
        return <img src={rain} alt="Rainy" />;
        console.log(weath);
        break;
      case "drizzle":
        return <img src={drizzle} alt="Drizzle" />;
        console.log(weath);
        break;
      case "light rain":
        return <img src={drizzle} alt="Light rain" />;
        console.log(weath);
        break;
      case "scattered clouds":
        return <img src={scattered} alt="Scattered Clouds" />;
        console.log(weath);
        break;
      case "windy":
        return <img src={wind} alt="Windy" />;
        console.log(weath);
        break;
      case "snow":
        return <img src={snow} alt="Snowy" />;
        console.log(weath);
        break;
      case "hail":
        return <img src={hail} alt="Hail" />;
        console.log(weath);
        break;
      case "storm":
        return <img src={storm} alt="Stormy" />;
        console.log(weath);
        break;
      case "heavy intensity rain":
        return <img src={storm} alt="Stormy" />;
        console.log(weath);
        break;
      case "mist":
        return <img src={mist} alt="Mist" />;
        console.log(weath);
        break;
    }
  };

  return (
    <div id="weathCont" className="outerCont">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div id="weathercondition">
          <div id="wimg">{weatherImg()}</div>
          <h2 id="wcity">{weatherData.name}</h2>
          <p id="wdescription">{weatherData.weather[0].description}</p>
          <p id="wtemp">Temperature: {Math.round(weatherData.main.temp)}°C</p>
          <p id="wfeel">
            Feels Like: {Math.round(weatherData.main.feels_like)}°C
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
