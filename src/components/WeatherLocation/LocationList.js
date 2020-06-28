import React from 'react'
import WeatherLocation from './index'
import PropTypes from 'prop-types'
import './styles.css';

const LocationList = ({ cities, onSelectedLocation}) =>{
    const handleWeatherLocationClick = city =>{
        console.log(`handleWeatherLocationClick ${city}`)
        onSelectedLocation(city);
    }
    const strToComponents = cities =>{
        return cities.map(city => 
            <WeatherLocation 
                key= {city} 
                city= {city}
                onWeatherLocationClick = {()=> handleWeatherLocationClick(city)}
            />
        )
    }
   console.log(cities)
   return(
   <div className="locationList">
       { strToComponents(cities)}
    </div>
   )
}


LocationList.prototype = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;