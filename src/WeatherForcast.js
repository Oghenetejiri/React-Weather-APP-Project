import React, {useState, useEffect} from "react"
import "./WeatherForcast.css"
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";


export default function WeatherForcast(props){
    const [ready, setReady] = useState(false);
    const[forcast, setForcast] = useState(null)

    useEffect(()=>{
        setReady(false);
    },[props.coordinates]);

    function handleResponse(response){
        setForcast(response.data.daily)
        setReady(true)
    }

    function call(){
         let apiKey = "a6480ded183f36ecfeb2f5aac6fafa9e";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/onecall";
  let apiUrl = `${apiEndpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
    }

    
if(ready){
 return (<div className="Forcast">
        <div className="row">
            {forcast.map(function(dailyForcast, index){
                if (index < 5){
                return(
                    <div className="col" key={index}>
                <WeatherForcastDay data={dailyForcast}/>
            </div>
                );
            } else{
                return null
            }
        })}
            
        </div>
    </div>);
    } else {
       call()
  return null;
 }
}
