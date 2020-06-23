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

var location = "Bogota,co"
const api_key = "6edc65645385be69e0675fe8b6852258"
const url_base = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base}?q=${location}&appid=${api_key}&units=metric`



const data ={
    temperature: 25,
    weatherState: CLOUD,
    humidity: "12",
    wind: "3 km/h",

}

class WeatherLocation extends Component{

    constructor(){
        super()
        this.state ={
            city: "Puente Real",
            data: data
        }
    }
    getWatherState = weatherData =>{
        return SUN
    }
    getData = weatherData =>{
        const {humidity, temp} = weatherData.main
        const { speed } = weatherData.wind
        const weatherState = SUN

        const data ={
            humidity,
            temperature: temp,
            weatherState: this.getWatherState(weatherData),
            wind: `${speed} m/s`,
        }

        return data
    }
    handleUpdateClick = () =>{

        fetch(api_weather).then(resolve => {
            console.log(api_weather)
            return resolve.json()
        }).then(data =>{
            console.log(data)
            const newWeather = this.getData(data)
            console.log(newWeather)
            this.setState({
                data: newWeather
            })
            
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