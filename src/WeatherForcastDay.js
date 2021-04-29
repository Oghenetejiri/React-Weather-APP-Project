import React from "react"
import WeatherIcon from "./WeatherIcon"

export default function WeatherForcastDay(props){

    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max)
        return`${temperature}°`
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min)
        return`${temperature}°`
    }
    function day(){
        let date = new Date(props.data.dt*1000)
        let day = date.getDay()
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat" ]
        return days[day];
    }
return<div><div className="Forcast-day">
                    {day()}
                </div>
                <WeatherIcon code={props.data.weather[0].icon} className="Mini-icon" size={32}/>
                <div className="Forcast-temperatures">
                    <span className="Forcast-max-temperature">
                        {maxTemperature()}
                    </span>
                    <span className="Forcast-min-temperature">
                        {minTemperature()}
                    </span>
                </div>
</div>}