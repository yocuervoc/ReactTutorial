import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ForecastItem from './forecastItem'
import './styles.css'
class ForecastExtended extends Component{
    render(){
        const city = this.props.city //const {city} = this.props
    return (
        <div>
            <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
            <ForecastItem/>
        </div>)
        
        }
}

ForecastExtended.protpType ={
    city: PropTypes.string.isRequired,
}
export default ForecastExtended