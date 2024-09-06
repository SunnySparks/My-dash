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
import cold from "../../assets/Weather/cold.png";
import hot from "../../assets/Weather/hot.png";
import "./styles.scss";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setError(null);
    setWeatherData(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
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
        break;
      case "overcast clouds":
        return <img src={cloud} alt="Overcast Clouds" />;
        break;
      case "few clouds":
        return <img src={cloudysun} alt="Few Clouds" />;
        break;
      case "broken clouds":
        return <img src={cloudysun} alt="Broken Clouds" />;
        break;
      case "clear sky":
        return <img src={sun} alt="Clear Sky" />;
        break;
      case "rain":
        return <img src={rain} alt="Rainy" />;
        break;
      case "drizzle":
        return <img src={drizzle} alt="Drizzle" />;
        break;
      case "moderate rain":
        return <img src={drizzle} alt="Drizzle" />;
        break;
      case "light rain":
        return <img src={drizzle} alt="Light rain" />;
        break;
      case "light intensity shower rain":
        return <img src={drizzle} alt="Light rain" />;
        break;
      case "scattered clouds":
        return <img src={scattered} alt="Scattered Clouds" />;
        break;
      case "windy":
        return <img src={wind} alt="Windy" />;
        break;
      case "snow":
        return <img src={snow} alt="Snowy" />;
        break;
      case "hail":
        return <img src={hail} alt="Hail" />;
        break;
      case "storm":
        return <img src={storm} alt="Stormy" />;
        break;
      case "heavy intensity rain":
        return <img src={storm} alt="Stormy" />;
        break;
      case "mist":
        return <img src={mist} alt="Mist" />;
        break;
      case "thunderstorm with rain":
        return <img src={storm} alt="Stormy" />;
        break;
    }
  };

  const tempSensor = () => {
    const tempFeel = weatherData.main.temp;
    if (tempFeel >= 32) {
      return <img src={hot} alt="Hot" />;
    } else if (tempFeel <= 10) {
      return <img src={cold} alt="Cold" />;
    }
  };

  const tempSensor2 = () => {
    const tempFeel = weatherData.main.feels_like;
    if (tempFeel >= 32) {
      return <img src={hot} alt="Hot" />;
    } else if (tempFeel <= 10) {
      return <img src={cold} alt="Cold" />;
    }
  };

  const errorWeather = () => {
    const error = AxiosError.error;
    return error;
  };

  return (
    <div id="weathCont" className="outerCont">
      <h2 id="wtitle">Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      {weatherData && (
        <div id="weathercondition">
          <div id="wimg">{weatherImg()}</div>
          <h2 id="wcity">{weatherData.name}</h2>
          <p id="wdescription">{weatherData.weather[0].description}</p>
          <p id="wtemp" className="temperatureCont">
            <span className="tempIndicator">
              {Math.round(weatherData.main.temp)}°C {tempSensor()}
            </span>
          </p>
          <p id="wfeel" className="temperatureCont">
            Feels Like:
            <span className="tempIndicator">
              {Math.round(weatherData.main.feels_like)}°C
              {tempSensor2()}
            </span>
          </p>
        </div>
      )}
      {error && (
        <div id="errorDisplay">
          <p>⚠Error: {error} </p>
        </div>
      )}
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
      <i class="rain"></i>
    </div>
  );
};

export default Weather;
