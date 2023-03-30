import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function Current() {

    const [weather, setWeather] = useState();
    useEffect(function loadCurrentWeather() {
        // need to set and .env file with REACT_APP_API_KEY=your api key
        axios.get('https://www.7timer.info/bin/api.pl?lon=-123.1&lat=49.2827&product=civillight&output=json')
            .then(result => {
                setWeather(result.data.dataseries[0]);
            }).catch(error => {
                console.log(error);
            });
    }, []);
    
  return<>
    <h2>Current Weather</h2>
    {weather ?
    <ul>
        <li>
            <h3>{weather.date}</h3>
            <div>
                temperture: {weather.temp2m.max}
            </div>
            <div>
                condition: {weather.weather}
            </div>
        </li>
    </ul>
    : <div>loading...</div>
    }
  </>
}

export default Current;