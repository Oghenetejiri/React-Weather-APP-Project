import React, {useState} from "react"

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celcius");
    
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }
    if (unit==="celcius"){
        return(<h3>
                <strong className="actuality">{props.celcius}</strong>
                <span className="value">
                  <a href="/" className="in-action">
                    °C
                  </a>
                </span>
                <span className="value2">
                  /<a href="/" onClick={showFahrenheit}>°F</a>
                </span>
              </h3>)
    } else{
        let fahrenheit = (Math.round(props.celcius*9/5)+32);
        return (<h3>
                <strong className="actuality">{fahrenheit}</strong>
                <span className="value">
                  <a href="/" className="in-action" onClick={showCelcius}>
                    °C
                  </a>
                </span>
                <span className="value2">
                  /<a href="/">°F</a>
                </span>
              </h3>)
    }
         
    
}