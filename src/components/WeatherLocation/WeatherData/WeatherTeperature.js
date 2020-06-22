import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from "prop-types"
import './styles.css'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
} from "../../../constants/weathers.js"

const icons = {
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SNOW]: "windy",
    [CLOUDY]: "cloudy",
    [WINDY]: "windy"
};
const getWeatherIcon = (weatherState )=> {

    const icon = icons[weatherState]
    const sizeIcon = "4x"
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;
    else
        return <WeatherIcons className="wicon" name={icons.fog} size={sizeIcon}/>;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className= "temperature">{`${temperature}`}</span> 
        <span className= "temperatureType">{` c°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired, 
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;