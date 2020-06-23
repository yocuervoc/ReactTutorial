const location = "Bogota,co"
const api_key = "6edc65645385be69e0675fe8b6852258"
const url_base = "http://api.openweathermap.org/data/2.5/weather"

export const api_weather = `${url_base}?q=${location}&appid=${api_key}&units=metric`
