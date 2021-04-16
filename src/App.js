import Form from "./Form";
import Programmer from "./Programmer";
import Illustration from "./Illustration";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';


 function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="simple-weather-app">
            <div className="the-temperature">
              <Illustration />
              <h3>
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
