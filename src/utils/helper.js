import createCurrentWeatherCard from "../components/currentConditionCard";
import createDailyWeatherCard from "../components/dailyConditionCard";
import createHourlyWeatherCard from "../components/hourlyConditionCard";
import fetchWeatherApi from "./weatherAPI";



function toggle(container, activeContainer, className) {
    container.forEach(element => {
        element.classList.remove(className);
    });

    activeContainer.classList.toggle(className);
}

//check measurement unit and return appropriate data with correct unit
function unitCheker(data ,measurementUnit) {
    if (measurementUnit == 'us') {
        return `${data} \u00b0F`;
    } else {
        return `${data} \u00b0C`
    }
}

//create current, hourly, daily card and return those to use by
//destructuring the array
async function createCard(city, country, measurementUnit){

    const [getLocation, getCurrent, getHourly, getDaily] = await fetchWeatherApi(city, country, measurementUnit);
    const currentWeatherCard = createCurrentWeatherCard(getCurrent, measurementUnit);
    const hourlyWeatherCard = createHourlyWeatherCard(getHourly, measurementUnit);
    const dailyWeatherCard = createDailyWeatherCard(getDaily, measurementUnit);
    console.log(currentWeatherCard)
    return [getLocation ,currentWeatherCard, hourlyWeatherCard, dailyWeatherCard]
}


// toggling between active view options and return the active option
function activeViewOption() {
    const viewOptions = document.querySelectorAll('.view-option');
    viewOptions.forEach(option => {
        option.addEventListener('click', () => {
            toggle(viewOptions, option ,'active');
        })
    })

    let activeViewOption = document.querySelector('.view-option.active');
    return activeViewOption
}

function displayLocation(location) {
    const locationContainer = document.querySelector('#location-name');
    locationContainer.innerText = `${location.address}`;
}

// displaying the active card based on the return from activeViewOption()
function displayActiveCard(current, hourly, daily) {
    const parentContentCardWrapper = document.querySelector('#card-content-wrapper');
    parentContentCardWrapper.innerHTML = '';

    const activeOption = activeViewOption();

    if(activeOption.classList.contains('current')) {
        parentContentCardWrapper.appendChild(current);
    }
    else if (activeOption.classList.contains('hourly')){
        parentContentCardWrapper.appendChild(hourly)
    } 
    else {
        parentContentCardWrapper.appendChild(daily);
    }
}

export { createCard, activeViewOption, displayActiveCard, displayLocation, toggle, unitCheker }