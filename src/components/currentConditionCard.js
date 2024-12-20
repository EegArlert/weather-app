import getIcon from "../utils/icon";
import { unitCheker } from "../utils/helper";

function createCurrentWeatherCard(data, measurementUnit) {
    // Create the card container
    const currentConditionCard = document.createElement('div');
    currentConditionCard.className = 'card-content current';

    // Top Section: Day and Time
    const currentConditionCardTop = document.createElement('section');
    currentConditionCardTop.className = 'card-top current';

    const currentConditionDayElement = document.createElement('p');
    currentConditionDayElement.className = 'day current';
    currentConditionDayElement.textContent = data.day;

    const currentConditionTimeElement = document.createElement('p');
    currentConditionTimeElement.className = 'time current';
    currentConditionTimeElement.textContent = 'Now';

    currentConditionCardTop.appendChild(currentConditionDayElement);
    currentConditionCardTop.appendChild(currentConditionTimeElement);

    // Middle Section: Icon, Temp, Condition, Description
    const currentConditionCardMiddle = document.createElement('section');
    currentConditionCardMiddle.className = 'card-middle current';

    const currentConditionIconElement = document.createElement('div');
    currentConditionIconElement.className = 'icon current';
    currentConditionIconElement.innerHTML = `<img src=${getIcon(data.icon)}/>`;

    const currentConditionTempElement = document.createElement('p');
    currentConditionTempElement.className = 'temp current';
    currentConditionTempElement.textContent = unitCheker(data.temp, measurementUnit)

    const currentConditionElement = document.createElement('p');
    currentConditionElement.className = 'condition current';
    currentConditionElement.textContent = data.condition;

    const currentConditionDescriptionElement = document.createElement('p');
    currentConditionDescriptionElement.className = 'description current';
    currentConditionDescriptionElement.textContent = data.description;

    currentConditionCardMiddle.appendChild(currentConditionIconElement);
    currentConditionCardMiddle.appendChild(currentConditionTempElement);
    currentConditionCardMiddle.appendChild(currentConditionElement);
    currentConditionCardMiddle.appendChild(currentConditionDescriptionElement);

    // Bottom Section: Feels Like and Humidity
    const currentConditionCardBottom = document.createElement('section');
    currentConditionCardBottom.className = 'card-bottom current';

    const currentConditionFeelsLikeElement = document.createElement('p');
    currentConditionFeelsLikeElement.className = 'feelslike current';
    currentConditionFeelsLikeElement.innerHTML = `Feels Like: <span class="feelslike-value current">${unitCheker(data.feelslike, measurementUnit)}</span>`;

    const currentConditionHumidityElement = document.createElement('p');
    currentConditionHumidityElement.className = 'humidity current';
    currentConditionHumidityElement.innerHTML = `Humidity: <span class="humidity-value current">${data.humidity}%</span>`;

    currentConditionCardBottom.appendChild(currentConditionFeelsLikeElement);
    currentConditionCardBottom.appendChild(currentConditionHumidityElement);

    // Append all sections to the main card container
    currentConditionCard.appendChild(currentConditionCardTop);
    currentConditionCard.appendChild(currentConditionCardMiddle);
    currentConditionCard.appendChild(currentConditionCardBottom);

    console.log(currentConditionCard)
    return currentConditionCard;
}

export default createCurrentWeatherCard