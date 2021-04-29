import React, { useState } from "react";
import axios from "axios"
import Loader from "react-loader-spinner";
import './App.css';
import Illustration from "./Illustration";
import WeatherData from "./WeatherData";
import WeatherForcast from "./WeatherForcast";


export default function Form(props) {
  const [weather, setWeather] = useState({loaded:false});
  const [place, setPlace] = useState(props.defaultCity);
  const[message, setMessage] = useState("")

  function displayWeather(response) {
    
    setWeather({
      loaded:true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      place: response.data.name,
      icon: response.data.weather[0].icon
    });
  }

  function search (){
    const apiKey = "a6480ded183f36ecfeb2f5aac6fafa9e";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${apiEndpoint}?q=${place}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
  }

  function handleTypedInput(event) {
   event.preventDefault();
    search()
    setMessage(` ${place} `)
  }
  function updateTypedInput(event) {
    setPlace(event.target.value);
  }

  

  let form = (
    <form className="Form" onSubmit={handleTypedInput}>
      <input
        className="CityForm"
        type="search"
        placeholder="Type a city"
        autoComplete="off"
        onChange={updateTypedInput}
      />
      <button className="SubmitForm" type="submit">
        {" "}
        Search{" "}
      </button>
    </form>
  );
  if (weather.loaded) {
    return (
      <div>
        <h1 className="text-capitalize">{message}</h1>
        {form}
        <WeatherData data={weather}/>
        <WeatherForcast/>
      </div>
    )} else {
  search();
    return (<div>
      {form}
   <Loader
        type="Circles"
        color="blue"
        height={100}
        width={100}
        timeout={600000}
      />
  <Illustration/>
    </div>
    );
}
}