import React from 'react'
import PropTypes from "prop-types"
import './styles.css'
const WeatherExtraInfo = ({humidity, wind}) => (
<div className="weatherExtraInfoCont">
    <span className = "extraInfoText">{`Humedad ${humidity} % -`}</span>
    <span className = "extraInfoText">{`Viento ${wind}`}</span>
    
</div>
);
WeatherExtraInfo.prototype ={
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;