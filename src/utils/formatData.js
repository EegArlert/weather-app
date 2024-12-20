import { Weather } from "../components/weather";
import { Location } from "../components/location";
import { getDay } from "date-fns";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const militaryToStandardHour = {
    "00": "12 AM",
    "01": "1 AM",
    "02": "2 AM",
    "03": "3 AM",
    "04": "4 AM",
    "05": "5 AM",
    "06": "6 AM",
    "07": "7 AM",
    "08": "8 AM",
    "09": "9 AM",
    "10": "10 AM",
    "11": "11 AM",
    "12": "12 PM",
    "13": "1 PM",
    "14": "2 PM",
    "15": "3 PM",
    "16": "4 PM",
    "17": "5 PM",
    "18": "6 PM",
    "19": "7 PM",
    "20": "8 PM",
    "21": "9 PM",
    "22": "10 PM",
    "23": "11 PM",
    "24": "3 PM",


}
//creating an array of year, month, day

//Formatting current weather condition
function getCurrentWeatherData(data) {
    // This arrangement can be altered based on how we want the date's format to appear.

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

    let date = data.days[0].datetime.split('-');
    // console.log(date)
    let day = getDay(new Date(date[0], date[1] - 1, date[2]))

    const hourlyData = [];

    let hourlyWeather = data.days[0].hours

    hourlyWeather.forEach(hourly => {
        let standardTime = hourly.datetime.substring(0, 2)
        hourlyData.push(
            Weather(
                days[day],
                data.days[0].datetime,
                militaryToStandardHour[standardTime],
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
function getDailyWeatherData(data) {

    
    const dailyData = [];
    let dailyWeather = data.days;
    // console.log(dailyWeather)
    dailyWeather.forEach( (daily, index) => {

        //extracting the date returned by JSON and format it to return
        //an array of [yyyy,MM,dd]
        let date = data.days[index].datetime.split('-');
        let day = getDay(new Date(date[0], date[1] - 1, date[2]))
        dailyData.push(
            Weather(
                days[day],
                daily.datetime,
                null,
                daily.temp,
                daily.tempmin,
                daily.tempmax,
                daily.feelslike,
                daily.humidity,
                daily.icon,
                daily.conditions,
                daily.description,
            ))
    })

    console.log(dailyData)
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
