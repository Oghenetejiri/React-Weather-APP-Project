import React from "react"
import EngineeredDate from "./EngineereDate";

export default function WeatherData(props){
    return <div>
        <div className="row">
               <div className="col-12">
                     <strong className="location"> {props.data.place}</strong>
                </div>
                <div className="col-12">
                  <EngineeredDate date={props.data.date}/>
                </div>
                <div className="col-12">
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
                <div className="col-7">
                    <div className="text-capitalize">Description: {props.data.datadescription}</div>
                </div>
                <div className="col-5">
                    <div>Windspeed: {props.wind} km/h</div> 
                </div>
                <div className="col-7">
                    <div>Feels Like: {props.data.feelsLike}°C</div>
                </div>
                <div className="col-5">
                    <div>Humidity: {props.data.humidity} km/h</div>
                </div>
                <div className="col-6">
                    <div> <img src={props.data.icon} alt="Weather Icon" /></div>
                </div>
                            
                </div>
      
        </div>
}