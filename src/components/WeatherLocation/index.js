import React,  {Component} from 'react'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from "../../constants/weathers.js"
import { render } from '@testing-library/react'

const data ={
    temperature: 25,
    weatherState: CLOUD,
    humidity: "12",
    wind: "3 km/h",

}
const data2 ={
    temperature: 35,
    weatherState: SUN,
    humidity: "30",
    wind: "5 km/h",
    
}
class WeatherLocation extends Component{

    constructor(){
        super()
        this.state ={
            city: "Puente Real",
            data: data
        }
    }
    handleUpdateClick = () =>{
        console.log("actializado")
        this.setState({
            city: "Puente Nacional",
            data: data2
        })
    }
    render(){
        const {city, data} = this.state
        return (<div className = "weatherLocationCont">
                    <Location city= {city}></Location>
                    <WeatheData data={data}></WeatheData>
                    <button onClick= {this.handleUpdateClick}>Actualizar</button>
                </div>)
    }
    
}

export default WeatherLocation;