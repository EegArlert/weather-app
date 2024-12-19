import clearDay from "../assets/clear-day.svg";
import clearNight from "../assets/clear-night.svg";
import cloudy from "../assets/cloudy.svg";
import fog from "../assets/fog.svg";
import hail from "../assets/hail.svg";
import partlyCloudyDay from "../assets/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/partly-cloudy-night.svg";
import rainSnowShowersDay from "../assets/rain-snow-showers-day.svg";
import rainSnowShowersNight from "../assets/rain-snow-showers-night.svg";
import rainSnow from "../assets/rain-snow.svg";
import rain from "../assets/rain.svg";
import showersDay from "../assets/showers-day.svg";
import showersNight from "../assets/showers-night.svg";
import sleet from "../assets/sleet.svg";
import snowShowersDay from "../assets/snow-showers-day.svg";
import snowShowersNight from "../assets/snow-showers-night.svg";
import snow from "../assets/snow.svg";
import thunderRain from "../assets/thunder-rain.svg";
import thunderShowersDay from "../assets/thunder-showers-day.svg";
import thunderShowersNight from "../assets/thunder-showers-night.svg";
import thunder from "../assets/thunder.svg";
import wind from "../assets/wind.svg";


function getIcon(iconDescription) {
    switch (iconDescription) {
        case "clear-day":
            return clearDay;
        case "clear-night":
            return clearNight;
        case "cloudy":
            return cloudy;
        case "fog":
            return fog;
        case "hail":
            return hail;
        case "partly-cloudy-day":
            return partlyCloudyDay;
        case "partly-cloudy-night":
            return partlyCloudyNight;
        case "rain-snow-showers-day":
            return rainSnowShowersDay;
        case "rain-snow-showers-night":
            return rainSnowShowersNight;
        case "rain-snow":
            return rainSnow;
        case "rain":
            return rain;
        case "showers-day":
            return showersDay;
        case "showers-night":
            return showersNight;
        case "sleet":
            return sleet;
        case "snow-showers-day":
            return snowShowersDay;
        case "snow-showers-night":
            return snowShowersNight;
        case "snow":
            return snow;
        case "thunder-rain":
            return thunderRain;
        case "thunder-showers-day":
            return thunderShowersDay;
        case "thunder-showers-night":
            return thunderShowersNight;
        case "thunder":
            return thunder;
        case "wind":
            return wind;
        default:
            console.warn("Unknown icon description:", iconDescription);
            return null; // Default to null or a placeholder icon if not matched
    }
}


export default getIcon