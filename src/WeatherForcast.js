import React from "react"
import WeatherIcon from "./WeatherIcon"
import "./WeatherForcast.css"


export default function WeatherForcast(){
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