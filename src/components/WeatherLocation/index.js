import React,  {Component} from 'react'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css'
import getData from './../../services/transformWeather'

import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import getUrlWeatherBycity from '../../services/getUrlWeatherByCity'



class WeatherLocation extends Component{

    constructor(props){
        super(props)
        const { city } = props
        this.state ={
            city,
            data: null
        }
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.handleUpdateClick()
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }


    handleUpdateClick = () =>{
        const api_weather = getUrlWeatherBycity(this.state.city)
        fetch(api_weather).then(resolve => {
            console.log(api_weather)
            return resolve.json()
        }).then(data =>{
            console.log(data)
            const newWeather = getData(data)
            console.log(newWeather)
            this.setState({
                data: newWeather
            })
            
        })


    }
    render(){
        
        const { onWeatherLocationClick } = this.props
        const {city, data} = this.state
        console.log("render")
        return (<div className = "weatherLocationCont" onClick={onWeatherLocationClick}>
                    <Location city= {city}></Location>
                    {data ? <WeatheData data={data}></WeatheData> : <CircularProgress size={50}/>}
                    
                </div>)
    }
    
}
WeatherLocation.propTypes ={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;