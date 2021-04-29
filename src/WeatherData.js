import React from "react"
import EngineeredDate from "./EngineereDate";
import WeatherIcon from "./WeatherIcon"
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherData(props){
    return <div>
        <div className="row">
               <div className="col-4">
                     <strong className="location"> <EngineeredDate date={props.data.date}/> </strong>
                    
                </div>
                <div className="col-4">
                  <div className="icon"><WeatherIcon code={props.data.icon} size={75}/></div>
                </div>
                <div className="col-4">
                  <WeatherTemperature celcius={props.data.temperature}/>
                  
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