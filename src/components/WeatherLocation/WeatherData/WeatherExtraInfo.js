import React from 'react'
import PropTypes from "prop-types"

const WeatherExtraInfo = ({humidity, wind}) => (
<div>
    <span>{`${humidity} % -`}</span>
    <span>{`${wind} viento`}</span>
    
</div>
);
WeatherExtraInfo.prototype ={
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;