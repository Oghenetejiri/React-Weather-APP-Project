import React, { useState } from "react";
import axios from "axios"
import './App.css';

export default function Form() {
  const [parameters, setParameters] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      place: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function displayParameters(event) {
    event.preventDefault();
    let apiKey = "a6480ded183f36ecfeb2f5aac6fafa9e";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${apiEndpoint}?q=${parameters}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function updateParameters(event) {
    setParameters(event.target.value);
  }
  let form = (
    <form className="Form" onSubmit={displayParameters}>
      <input
        className="CityForm"
        type="search"
        placeholder="Type a city"
        autoComplete="off"
        onChange={updateParameters}
      />
      <button className="SubmitForm" type="submit">
        {" "}
        Search{" "}
      </button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>Place:</strong> {weather.place}
          </li>
          <li>
            <strong>Temperature:</strong> {weather.temperature}°C
          </li>
          <li>
            <strong>Description:</strong> {weather.description}
          </li>
          <li>
            <strong>Wind:</strong> {weather.wind} km/H
          </li>
          <li>
            <strong>Feels Like:</strong> {weather.feelsLike}°C
          </li>
          <li>
            <strong>Humidity:</strong> {weather.humidity} Km/H
          </li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}