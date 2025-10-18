
let btn = document.getElementById('fetch-weather-btn');

btn.addEventListener('click', fetchWeatherData);

async function fetchWeatherData() {
    let city = document.getElementById('city-input').value;
    if(city === '') {
        alert('Please enter a valid city name.');
        return
    }

    const url = `https://api.weatherstack.com/current?access_key={YOUR_API_KEY}&query=${city}`;
    const options = {
	method: 'GET'
    };

    let parentDiv = document.getElementById('city-details');
    parentDiv.innerHTML='';
    try {
	    const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP greška: ${response.status}`);
        }
	    const result = await response.json();
	    console.log(result);

        
        let cityName = document.createElement('h2');
        cityName.textContent=result.location.name;
        parentDiv.appendChild(cityName);

        let cityCountry = document.createElement('p');
        cityCountry.textContent=result.location.country;
        parentDiv.appendChild(cityCountry);

        let cityTemperature = document.createElement('p');
        cityTemperature.textContent=`Temperature: ${result.current.temperature} °C`;
        parentDiv.appendChild(cityTemperature);

        let citySunrise = document.createElement('p');
        citySunrise.textContent=`Sunrise: ${result.current.astro.sunrise}`;
        parentDiv.appendChild(citySunrise);

        let cityMoonrise = document.createElement('p');
        cityMoonrise.textContent=`Sunrise: ${result.current.astro.moonrise}`;
        parentDiv.appendChild(cityMoonrise);

        let cityHumidity = document.createElement('p');
        cityHumidity.textContent=`Humidity: ${result.current.humidity} %`;
        parentDiv.appendChild(cityHumidity);

        let cityWindSpeed = document.createElement('p');
        cityWindSpeed.textContent=`Wind Speed: ${result.current.wind_speed} km/h`;
        parentDiv.appendChild(cityWindSpeed);

        let cityWindDegree = document.createElement('p');
        cityWindDegree.textContent=`Wind Degree: ${result.current.wind_degree} °`;
        parentDiv.appendChild(cityWindDegree);

        let cityUvIndex = document.createElement('p');
        cityUvIndex.textContent=`UV Index: ${result.current.uv_index}`;
        parentDiv.appendChild(cityUvIndex);

    } catch (error) {
	    console.error(error);
        
        if(error.message.includes('400')) {
            alert('Bad Request: Please check the city name and try again.');
            
        }
    }


    

    

    

}