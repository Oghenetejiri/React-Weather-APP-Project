import React, { useState } from "react";
import axios from "axios"
import Loader from "react-loader-spinner";
import './App.css';


export default function Form() {
 // const [parameters, setParameters] = useState(null);
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

 //function displayParameters(event) {
   // event.preventDefault();
    
  //}
  //function updateParameters(event) {
 //   setParameters(event.target.value);
//  }

  

  let form = (
    <form className="Form">
      <input
        className="CityForm"
        type="search"
        placeholder="Type a city"
        autoComplete="off"
      //  onChange={updateParameters}
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
      <div className="row">
               <div className="col-12">
                    <strong>PLACE: {weather.place}</strong> 
                </div>
                <div className="col-12">
                    <strong>TEMPERATURE: {weather.temperature}°C</strong> 
                </div>
                <div className="col-12">
                    <strong>DESCRIPTION: {weather.description}</strong>
                </div>
                <div className="col-12">
                    <strong>WINDSPEED: {weather.wind}km/h</strong> 
                </div>
                <div className="col-12">
                    <strong>FEELS LIKE: {weather.feelsLike}°C</strong>
                </div>
                <div className="col-12">
                    <strong>HUMIDITY: {weather.humidity}km/h</strong>
                </div>
                <div className="col-12">
                    <strong> <img src={weather.icon} alt="Weather Icon" /></strong>
                </div>
                            
                </div>
      
        
    </div>);
  } else {
  let apiKey = "a6480ded183f36ecfeb2f5aac6fafa9e";
    let city ="Nigeria"
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayWeather);
    return (<div>
      
      {form}
    
   <Loader
        type="Circles"
        color="blue"
        height={100}
        width={100}
        timeout={600000}
      />
  
    </div>
    );
}
}