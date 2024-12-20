import { VISUAL_CROSSING_API_KEY } from "../../config";
import { getCurrentWeatherData, getDailyWeatherData, getHourlyWeatherData, getLocationData } from "./formatData";


//fetching visual crossing API. API can accept three parameter, date1, date2. 
//measurement unit are us and metric
async function fetchWeatherApi(city, country, measurementUnit) {
    //get and read JSON
    try {
        let result = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?unitGroup=${measurementUnit}&key=${VISUAL_CROSSING_API_KEY}`);
        let resultJSON = await Promise.resolve(result.json())
        // console.log('fetchapi functin called')
        // console.log(resultJSON)

        const resolvedData = [
            getLocationData(resultJSON),
            getCurrentWeatherData(resultJSON),
            getHourlyWeatherData(resultJSON),
            getDailyWeatherData(resultJSON)
        ]

        return resolvedData
    }
    catch (err) {
        alert(err)
    }
}

export default fetchWeatherApi