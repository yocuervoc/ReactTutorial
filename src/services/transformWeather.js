import {
    SUN,
} from "../constants/weathers.js"

const getWatherState = weatherData =>{
    
    return SUN
}
const getData = weatherData =>{
    const {humidity, temp} = weatherData.main
    const { speed } = weatherData.wind
    const weatherState = SUN

    const data ={
        humidity,
        temperature: temp,
        weatherState: getWatherState(weatherData),
        wind: `${speed} m/s`,
    }

    return data
}


export default getData;