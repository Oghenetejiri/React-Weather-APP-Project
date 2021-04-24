import React, { useState } from "react";
import axios from "axios"
import Loader from "react-loader-spinner";
import './App.css';
import EngineeredDate from "./EngineereDate";


export default function Form(props) {
 // const [parameters, setParameters] = useState(null);
  const [weather, setWeather] = useState({loaded:false});
  

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
  if (weather.loaded) {
    return (
      <div>
        {form} 
      <div className="row">
               <div className="col-12">
                     <strong className="location"> {weather.place}</strong>
                </div>
                <div className="col-12">
                  <EngineeredDate date={weather.date}/>
                </div>
                <div className="col-12">
                    <h3>
                <strong className="actuality">{weather.temperature}</strong>
                <span className="value">
                  <a href="/" className="in-action">
                    °C
                  </a>
                </span>
                <span className="value2">
                  /<a href="/">°F</a>
                </span>
              </h3>
                </div>
                <div className="col-7">
                    <div className="text-capitalize">Description: {weather.description}</div>
                </div>
                <div className="col-5">
                    <div>Windspeed: {weather.wind} km/h</div> 
                </div>
                <div className="col-7">
                    <div>Feels Like: {weather.feelsLike}°C</div>
                </div>
                <div className="col-5">
                    <div>Humidity: {weather.humidity} km/h</div>
                </div>
                <div className="col-6">
                    <div> <img src={weather.icon} alt="Weather Icon" /></div>
                </div>
                            
                </div>
      
        </div>
);
  } else {
  const apiKey = "a6480ded183f36ecfeb2f5aac6fafa9e";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let url = `${apiEndpoint}?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
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