import { unitCheker } from "../utils/helper";
import getIcon from "../utils/icon";

function createHourlyWeatherCard(data, measurementUnit) {
    // Main card container
    const hourlyConditionCard = document.createElement('div');
    hourlyConditionCard.className = 'card-content hourly';

    // Card top section
    const hourlyConditionCardTop = document.createElement('div');
    hourlyConditionCardTop.className = 'card-top hourly';

    const hourlyConditionHourElement = document.createElement('p');
    hourlyConditionHourElement.className = 'hour';
    hourlyConditionHourElement.textContent = data.time;

    const hourlyConditionDateElement = document.createElement('p');
    hourlyConditionDateElement.className = 'date hourly';
    hourlyConditionDateElement.textContent = data.date;

    hourlyConditionCardTop.appendChild(hourlyConditionHourElement);
    hourlyConditionCardTop.appendChild(hourlyConditionDateElement);

    // Card icon section
    const hourlyConditionCardIcon = document.createElement('div');
    hourlyConditionCardIcon.className = 'card-icon hourly';
    hourlyConditionCardIcon.innerHTML = `<img src=${getIcon(data.icon)}/>`;;

    // Card mid section
    const hourlyConditionCardMid = document.createElement('div');
    hourlyConditionCardMid.className = 'card-middle hourly';

    const hourlyConditionTemperatureContainer = document.createElement('div');
    hourlyConditionTemperatureContainer.className = 'temperature hourly';

    const hourlyConditionTempValue = document.createElement('p');
    hourlyConditionTempValue.className = 'temp-value hourly';
    hourlyConditionTempValue.textContent = `${unitCheker(data.temp, measurementUnit)}`;

    const hourlyConditionWeatherCondition = document.createElement('p');
    hourlyConditionWeatherCondition.className = 'weather-condition hourly';
    hourlyConditionWeatherCondition.textContent = data.condition;

    hourlyConditionCardMid.appendChild(hourlyConditionWeatherCondition);
    hourlyConditionCardMid.appendChild(hourlyConditionTempValue);

    // Card bottom section
    const hourlyConditionCardBottom = document.createElement('div');
    hourlyConditionCardBottom.className = 'card-bottom hourly';

    const hourlyConditionHumidityElement = document.createElement('p');
    hourlyConditionHumidityElement.className = 'humidity hourly';
    hourlyConditionHumidityElement.innerHTML = `Humidity: <span class="humidity-value">${data.humidity}%</span>`;

    hourlyConditionCardBottom.appendChild(hourlyConditionHumidityElement);

    // Assemble the card
    hourlyConditionCardMid.appendChild(hourlyConditionTemperatureContainer);
    
    hourlyConditionCard.appendChild(hourlyConditionCardTop);
    hourlyConditionCard.appendChild(hourlyConditionCardIcon);
    hourlyConditionCard.appendChild(hourlyConditionCardMid);
    hourlyConditionCard.appendChild(hourlyConditionCardBottom);

    return hourlyConditionCard; // Return the constructed card element
}

function createHourlyWeatherCardArray(hourlyData, measurementUnit) {

    let hourlyCardCollection = []

    hourlyData.forEach(hour => {
        let createCard = createHourlyWeatherCard(hour, measurementUnit);
        hourlyCardCollection.push(createCard);
    })

    return hourlyCardCollection
}

export default createHourlyWeatherCardArray