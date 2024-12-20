//json data needed: resolved address, timezone, 
//current datetime time (hours), temp, tempmin, 
//tempmax, feelslike, humidity, icon, 

export function Weather(
    day,
    date,
    time,
    temp,
    tempmin,
    tempmax,
    feelslike,
    humidity,
    icon,
    condition,
    description,
 ){

        return {
            day: day,
            date: date,
            time: time,
            temp: temp,
            tempMin: tempmin,
            tempMax: tempmax,
            feelslike: feelslike,
            humidity: humidity,
            icon: icon,
            condition: condition,
            description: description,
        }
}
