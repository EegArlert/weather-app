import { createCard, activeViewOption, displayActiveCard, displayLocation } from "./utils/helper";
import './styles/template.css'
import './styles/currentCard.css'
import './styles/hourlyCard.css'


const body = document.querySelector('body');
const div = document.createElement('div');
div.innerText = 'SERVER IS GUCHI';

body.appendChild(div)


// console.log(fetchWeatherApi('london, UK', '12-16-2024', '12-20-2024'));

// getCurrent("london, UK")

document.addEventListener('DOMContentLoaded', () => {
    
    const submitBtn = document.querySelector('#submit-btn');
    
    submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const city = document.querySelector('input#city').value;
        const country = document.querySelector('input#country').value;
        const measurement = document.querySelector('input[name="unit"]:checked').value;
    
        try {
            const [
                getLocation,
                currentWeatherCard,
                hourlyWeatherCard,
                dailyWeatherCard
            ] = await createCard(city, country, measurement);

            displayLocation(getLocation)
            displayActiveCard(currentWeatherCard, hourlyWeatherCard, dailyWeatherCard);

        } catch (e) {
            console.log(e)
        }
    
    })

    
})

// const icon = document.querySelector('.icon')
// // icon.style.backgroundImage = `url('./assets/clear-day.svg')`

// const image = document.createElement("img");
// image.src = clearDay;
// icon.appendChild(image)

// console.log(getDay( new Date(2012, 1, 29)))

// icon.innerHTML = `<img src=${require("./assets/clear-day.svg").default}/?`;

// async function getData(city, country) {
//     let data = await fetchWeatherApi(`${city}, ${country}`)
//     getCurrentWeatherData(data)
//     return data
// }