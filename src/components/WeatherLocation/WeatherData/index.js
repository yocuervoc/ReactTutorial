import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTeperature'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from "../../../constants/weathers.js"

const WeatherData = () =>(
    <div>
        <WeatherExtraInfo humidity={70} wind={"10 km/h"}/>
        <WeatherTemperature 
            temperature={20} 
            weatherState={RAIN}
        />
    </div>
);



export default WeatherData;