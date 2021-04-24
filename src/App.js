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
            </div>
      
            <Form defaultCity="Estonia"/>
            </div>
          </div>
          <Programmer />
        </div>
      </div>
  );
}
     
export default App;
