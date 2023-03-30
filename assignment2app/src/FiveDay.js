import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function FiveDay() {

  const [forecast, setForecast] = useState();

  useEffect(function loadFiveDayForecast() {
    // need to set and .env file with REACT_APP_API_KEY=your api key
    axios.get('https://www.7timer.info/bin/civillight.php?lon=-123.1&lat=49.2827&unit=metric&output=json')
      .then(result => {
        setForecast(result.data.dataseries);
      }).catch(error => {
        console.log(error);
      });
  }, []);

  return<>
    <h2>Five Day</h2>
    {forecast ? 
    <ul>
        {forecast.map(day=><li key={day.date}>
          <h3>{day.date}</h3>
          <div>
            temperture: high {day.temp2m.max}, low {day.temp2m.min}
          </div>
          <div>
            condition: {day.weather}
          </div>
        
        
        </li> )}  
    </ul> 
    : <div>loading...</div> 
  }
  </>
}

export default FiveDay;