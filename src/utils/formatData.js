import { Weather } from "../components/weather";
import { Location } from "../components/location";
import { getDay } from "date-fns";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//Formatting current weather condition
function getCurrentWeatherData(data) {
    // This arrangement can be altered based on how we want the date's format to appear.

    //creating an array of year, month, day
    let date = data.days[0].datetime.split('-');
    // console.log(date)
    let day = getDay(new Date(date[0], date[1] - 1, date[2]))
    // console.log(day)

    const weatherData = Weather(
        days[day],
        data.days[0].datetime,
        data.currentConditions.datetime, 
        data.currentConditions.temp,
        null,
        null,
        data.currentConditions.feelslike,
        data.currentConditions.humidity,
        data.currentConditions.icon,
        data.currentConditions.conditions,
        data.days[0].description,
    )
    return weatherData
}


//formatting hourly weather condition
function getHourlyWeatherData(data) {

    const hourlyData = [];
   
    let hourlyWeather = data.days[0].hours

    hourlyWeather.forEach(hourly => {
        hourlyData.push(
            Weather(
                data.days[0].datetime,
                hourly.datetime,
                hourly.temp,
                null,
                null,
                hourly.feelslike,
                hourly.humidity,
                hourly.icon,
                hourly.conditions,
                null
        ))
    });
    // console.log(hourlyData)

    return hourlyData
}


//formatting daily weather condition from current + 14 days from current
function getDailyWeatherData(data){

    const dailyData = [];
    let dailyWeather = data.days;
    // console.log(dailyWeather)
    dailyWeather.forEach(date => {
        dailyData.push(
            Weather(
                date.datetime,
                null,
                date.temp,
                date.tempmin,
                date.tempmax,
                null,
                date.humidity,
                date.icon,
                date.conditions,
                date.description,
            ))
    })

    // console.log(dailyData)
    return dailyData
}


//formatting current location being queried
function getLocationData(data) {
    const locationData = Location(
        data.resolvedAddress,
        data.description,
        data.timezone
    )

    return locationData
}


export { getCurrentWeatherData, getHourlyWeatherData, getLocationData, getDailyWeatherData }
