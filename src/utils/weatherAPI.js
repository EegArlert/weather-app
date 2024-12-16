import { VISUAL_CROSSING_API_KEY } from "../../config";

//fetching visual crossing API. API can accept three parameter, date1, date2. 
async function fetchWeatherApi(location) {
    //get and read JSON
    let result = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${VISUAL_CROSSING_API_KEY}`);
    let resultJSON = await result.json();
    console.log(resultJSON.currentConditions.temp)
    console.log(resultJSON)
    return resultJSON
}


//To fetch 



export default fetchWeatherApi