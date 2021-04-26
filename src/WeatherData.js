import React from "react"
import EngineeredDate from "./EngineereDate";
import WeatherIcon from "./WeatherIcon"


export default function WeatherData(props){
    return <div>
        <div className="row">
               <div className="col-4">
                     <strong className="location"> <EngineeredDate date={props.data.date}/> </strong>
                    
                </div>
                <div className="col-4">
                  <div className="icon"><WeatherIcon code={props.data.icon}/></div>
                </div>
                <div className="col-4">
                    <h3>
                <strong className="actuality">{props.data.temperature}</strong>
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
                <div className="row"><div className="col-7">
                    <div className="text-capitalize">Description: {props.data.description}</div>
                </div>
                <div className="col-5">
                    <div>Windspeed: {props.data.wind} km/h</div> 
                </div>
                <div className="col-7">
                    <div>Feels Like: {props.data.feelsLike}°C</div>
                </div>
                <div className="col-5">
                    <div>Humidity: {props.data.humidity} km/h</div>
                    </div>
                </div>      
                </div>
      
        </div>
}