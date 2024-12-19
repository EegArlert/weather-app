import getIcon from "../utils/icon";
import { unitCheker } from "../utils/helper";

function createCurrentWeatherCard(data, measurementUnit) {
    // Create the card container
    const card = document.createElement('div');
    card.className = 'card-content current';

    // Top Section: Day and Time
    const cardTop = document.createElement('section');
    cardTop.className = 'card-top';

    const dayElement = document.createElement('p');
    dayElement.className = 'day';
    dayElement.textContent = data.day;

    const timeElement = document.createElement('p');
    timeElement.className = 'time';
    timeElement.textContent = 'Now';

    cardTop.appendChild(dayElement);
    cardTop.appendChild(timeElement);

    // Middle Section: Icon, Temp, Condition, Description
    const cardMiddle = document.createElement('section');
    cardMiddle.className = 'card-middle';

    const iconElement = document.createElement('div');
    iconElement.className = 'icon';
    iconElement.innerHTML = `<img src=${getIcon(data.icon)}/>`;

    const tempElement = document.createElement('p');
    tempElement.className = 'temp';
    tempElement.textContent = unitCheker(data.temp, measurementUnit)

    const conditionElement = document.createElement('p');
    conditionElement.className = 'condition';
    conditionElement.textContent = data.condition;

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'description';
    descriptionElement.textContent = data.description;

    cardMiddle.appendChild(iconElement);
    cardMiddle.appendChild(tempElement);
    cardMiddle.appendChild(conditionElement);
    cardMiddle.appendChild(descriptionElement);

    // Bottom Section: Feels Like and Humidity
    const cardBottom = document.createElement('section');
    cardBottom.className = 'card-bottom';

    const feelsLikeElement = document.createElement('p');
    feelsLikeElement.className = 'feelslike';
    feelsLikeElement.innerHTML = `Feels Like: <span class="feelslike-value">${unitCheker(data.feelslike, measurementUnit)}</span>`;

    const humidityElement = document.createElement('p');
    humidityElement.className = 'humidity';
    humidityElement.innerHTML = `Humidity: <span class="humidity-value">${data.humidity}%</span>`;

    cardBottom.appendChild(feelsLikeElement);
    cardBottom.appendChild(humidityElement);

    // Append all sections to the main card container
    card.appendChild(cardTop);
    card.appendChild(cardMiddle);
    card.appendChild(cardBottom);

    return card;
}

export default createCurrentWeatherCard