import {
    CLOUD ,
    SUN ,
    RAIN ,
    SNOW ,
    THUNDER, 
    DRIZZLE,
} from "../constants/weathers.js"

const getWatherState = weather =>{
    const { id } = weather
    if(id <300){
        return THUNDER
    }else if(id <400){
        return DRIZZLE
    }else if(id < 600){
        return RAIN
    }else if(id < 700){
        return SNOW
    }else if(id < 800){
        return SUN
    }
    return CLOUD
}
const getData = weatherData =>{
    const {humidity, temp} = weatherData.main
    const { speed } = weatherData.wind


    const data ={
        humidity,
        temperature: temp,
        weatherState: getWatherState(weatherData.weather[0]),
        wind: `${speed} m/s`,
    }

    return data
}


export default getData;