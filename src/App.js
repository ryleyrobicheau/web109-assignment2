import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Current from './Current';
import FiveDay from './FiveDay';

function App() {
  const [type, setType] = useState();

  const handleChange = weatherType => {
    setType(weatherType);
  }

  let forecast
  if (type === "current") {
    forecast = <Current />
  } else if (type === "5-day") {
    forecast = <FiveDay />
  }
    


  return (
    <div className="App">
      <form> 
        <fieldset>
        <legend>Choose weather forecast type</legend>
        <label>
          current real time weather
          <input type="radio" name="type" onChange={()=>handleChange("current")} />
        </label>
        <label>
          5 day forecast
          <input type="radio" name="type" onChange={()=>handleChange("5-day")}/>
        </label>
        </fieldset>
      </form> 

      {forecast}
      
    </div>
  );
}

export default App;
