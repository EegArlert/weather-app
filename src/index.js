import { createCard, activeViewOption, displayLocation, displayContent } from "./utils/helper";
import './styles/template.css'
import './styles/currentCard.css'
import './styles/hourlyCard.css'
import './styles/dailyCard.css'

// console.log(fetchWeatherApi('london, UK', '12-16-2024', '12-20-2024'));

// getCurrent("london, UK")

document.addEventListener('DOMContentLoaded', () => {

    const submitBtn = document.querySelector('#submit-btn');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        displayContent();
    })

    const temperatureRadio = document.querySelectorAll('input[name="unit"]');
    let tempUnitBefore = document.querySelector('input[name="unit"]:checked').value
    let currentTemp = tempUnitBefore

    temperatureRadio.forEach(temp => {

        temp.addEventListener('click',  (e) => {

            if (document.querySelector('input#city').value == '' || document.querySelector('input#country').value == ''){
                console.log('skipping radio button')
                return
            }

            let tempUnitAfter = document.querySelector('input[name="unit"]:checked').value
    
            console.log(tempUnitAfter)
            console.log(tempUnitBefore)

            if(tempUnitAfter !== tempUnitBefore) {
                displayContent();
            }
            tempUnitBefore = tempUnitAfter
        })

    })



})
