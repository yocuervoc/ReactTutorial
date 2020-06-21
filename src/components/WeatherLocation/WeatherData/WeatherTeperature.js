import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from "prop-types"
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
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name={icons.fog} size="2x"/>;
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} c°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired, 
    waetherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;