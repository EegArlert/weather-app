import { unitCheker } from "../utils/helper";
import getIcon from "../utils/icon";

function createDailyWeatherCard(data, measurementUnit) {
    // Main card container
    const dailyConditionCard = document.createElement('div');
    dailyConditionCard.className = 'card-content daily';

    // Card top section
    const dailyConditionCardTop = document.createElement('div');
    dailyConditionCardTop.className = 'card-top daily';

    const dailyConditionDayElement = document.createElement('p');
    dailyConditionDayElement.className = 'day daily';
    dailyConditionDayElement.textContent = data.day;

    const dailyConditionDateElement = document.createElement('p');
    dailyConditionDateElement.className = 'date daily';
    dailyConditionDateElement.textContent = data.date;

    dailyConditionCardTop.appendChild(dailyConditionDayElement);
    dailyConditionCardTop.appendChild(dailyConditionDateElement);

    // Card icon section
    const dailyConditionCardIcon = document.createElement('div');
    dailyConditionCardIcon.className = 'card-icon daily';

    dailyConditionCardIcon.innerHTML = `
    <img src="${getIcon(data.icon)}" alt="${data.icon}"/>
    <p class="weather-condition daily">${data.condition}</p>`;

    // Card middle section
    const dailyConditionCardMiddle = document.createElement('div');
    dailyConditionCardMiddle.className = 'card-middle daily';

    const dailyConditionTempMin = document.createElement('p');
    dailyConditionTempMin.className = 'temp-min-label daily';
    dailyConditionTempMin.innerHTML = `Temp min: <span class="temp-min-value daily">${unitCheker(data.tempMin, measurementUnit)}</span>`;

    const dailyConditionTempMax = document.createElement('p');
    dailyConditionTempMax.className = 'temp-max-label daily';
    dailyConditionTempMax.innerHTML = `Temp max: <span class="temp-max-value daily">${unitCheker(data.tempMax, measurementUnit)}</span>`;

    dailyConditionCardMiddle.appendChild(dailyConditionTempMin);
    dailyConditionCardMiddle.appendChild(dailyConditionTempMax);

    // Card bottom section
    const dailyConditionCardBottom = document.createElement('div');
    dailyConditionCardBottom.className = 'card-bottom daily';

    const dailyConditionHumidityElement = document.createElement('p');
    dailyConditionHumidityElement.className = 'humidity daily';
    dailyConditionHumidityElement.innerHTML = `Humidity: <span class="humidity-value">${data.humidity}%</span>`;

    dailyConditionCardBottom.appendChild(dailyConditionHumidityElement);

    // Assemble the card
    dailyConditionCard.appendChild(dailyConditionCardTop);
    dailyConditionCard.appendChild(dailyConditionCardIcon);
    dailyConditionCard.appendChild(dailyConditionCardMiddle);
    dailyConditionCard.appendChild(dailyConditionCardBottom);

    return dailyConditionCard; // Return the constructed card element
}

function createDailyWeatherCardArray(dailyData, measurementUnit) {
    let dailyCardCollection = [];

    dailyData.forEach(day => {
        let createCard = createDailyWeatherCard(day, measurementUnit);
        dailyCardCollection.push(createCard);
    });


    return dailyCardCollection;
}

export default createDailyWeatherCardArray;
