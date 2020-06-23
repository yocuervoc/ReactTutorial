import React,  {Component} from 'react'
import Location from './Location'
import WeatheData from './WeatherData'
import './styles.css'
import getData from './../../services/transformWeather'
import { render } from '@testing-library/react'
import { api_weather } from '../../constants/api_url'




class WeatherLocation extends Component{

    constructor(){
        super()
        this.state ={
            city: "Puente Real",
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
        const {city, data} = this.state
        console.log("render")
        return (<div className = "weatherLocationCont">
                    <Location city= {city}></Location>
                    {data ? <WeatheData data={data}></WeatheData> : "Cargando..."}
                    <button onClick= {this.handleUpdateClick}>Actualizar</button>
                </div>)
    }
    
}

export default WeatherLocation;