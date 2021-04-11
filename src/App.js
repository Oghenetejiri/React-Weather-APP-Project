import Form from "./Form";
import Programmer from "./Programmer";
import Illustration from "./Illustration";
import './App.css';


 function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="simple-weather-app">
            <h1>Location</h1>
            <span>
              <span>
                <h5>Monday 13:00</h5>
              </span>
            </span>

            <div className="the-temperature">
              <h3>
                {" "}
                <Illustration />
                <strong className="actuality">-2</strong>
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
            <Form />
            </div>
          </div>
          <Programmer />
        </div>
      </div>
  );
}
     
export default App;
