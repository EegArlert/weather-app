import createCurrentWeatherCard from "../components/currentConditionCard";
import createDailyWeatherCard from "../components/dailyConditionCard";
import createHourlyWeatherCardArray from "../components/hourlyConditionCard";
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
    const hourlyWeatherCard = createHourlyWeatherCardArray(getHourly, measurementUnit);
    const dailyWeatherCard = createDailyWeatherCard(getDaily, measurementUnit);
    return [getLocation ,currentWeatherCard, hourlyWeatherCard, dailyWeatherCard]
}

function displayLocation(location) {
    const locationContainer = document.querySelector('#location-name');
    locationContainer.innerText = `${location.address}`;
}

// toggling between active view options and return the active option
function activeViewOption(current, hourly, daily) {
    const viewOptions = document.querySelectorAll('.view-option');
    let activeViewOption = document.querySelector('.view-option.active');
    displayActiveCard(current, hourly, daily, activeViewOption);

    viewOptions.forEach(option => {
        option.addEventListener('click', () => {
            toggle(viewOptions, option ,'active');
            activeViewOption = document.querySelector('.view-option.active');
            displayActiveCard(current, hourly, daily, activeViewOption)
        })
    })
}
// displaying the active card based on the return from activeViewOption()
function displayActiveCard(current, hourly, daily, activeOption) {
    
    const parentContentCardWrapper = document.querySelector('#card-content-wrapper');
    parentContentCardWrapper.innerHTML = ''; 

    if(activeOption.classList.contains('current')) {
        parentContentCardWrapper.appendChild(current);
    }
    else if (activeOption.classList.contains('hourly')){
        hourly.forEach(card => {
            parentContentCardWrapper.appendChild(card)
        })
    } 
    else if (activeOption.classList.contains('daily')){
        daily.forEach(card => {
            parentContentCardWrapper.appendChild(card );
        })
    }
}

async function displayContent() {
    //getting input parameter value for VisualCrossing API
    const city = document.querySelector('input#city').value;
    const country = document.querySelector('input#country').value;
    const measurement = document.querySelector('input[name="unit"]:checked').value;

    if(city === "" || country == ""){
        alert("please provide name of the city and country");
        return
    }

    try {
        const [
            getLocation,
            currentWeatherCard,
            hourlyWeatherCard,
            dailyWeatherCard
        ] = await createCard(city, country, measurement);
        
        displayLocation(getLocation)
        activeViewOption(currentWeatherCard, hourlyWeatherCard, dailyWeatherCard)

    } catch (e) {
        console.log(e)
    }
}

export { createCard, activeViewOption, displayActiveCard, displayLocation, toggle, unitCheker, displayContent }