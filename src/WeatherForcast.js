import React from "react"
import WeatherIcon from "./WeatherIcon"
import "./WeatherForcast.css"
import axios from "axios";


export default function WeatherForcast(props){

    function handleResponse(response){

    }
  let apiKey = "a6480ded183f36ecfeb2f5aac6fafa9e";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";
  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
    return <div className="Forcast">
        <div className="row">
            <div className="col">
                <div className="Forcast-day">
                    Thu
                </div>
                <WeatherIcon code="04d" className="Mini-icon" size={32}/>
                <div className="Forcast-temperatures">
                    <span className="Forcast-max-temperature">
                        5°
                    </span>
                    <span className="Forcast-min-temperature">
                        2°
                    </span>
                </div>
            </div>
        </div>
    </div>
}