import fetchWeatherApi from "./utils/weatherAPI";
import './styles/template.css'


const body = document.querySelector('body');
const div = document.createElement('div');
div.innerText = 'SERVER IS GUCHI';

body.appendChild(div)


console.log(fetchWeatherApi('london, UK', '12-16-2024', '12-20-2024'));