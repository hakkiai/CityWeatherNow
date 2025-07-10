
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather();
    }
});

async function getCoordinates(city) {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`
        );
        const data = await response.json();
        
        if (data.length === 0) {
            throw new Error('City not found');
        }
        
        return {
            lat: data[0].lat,
            lon: data[0].lon
        };
    } catch (error) {
        throw new Error('Could not find coordinates for this city');
    }
}

async function getWeather() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        
        const coords = await getCoordinates(city);
        
        
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'apikey': API_KEY
            }
        };

        
        const response = await fetch(
            `https://api.tomorrow.io/v4/weather/realtime?location=${coords.lat},${coords.lon}&units=metric`,
            options
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch weather data');
        }

        const data = await response.json();
        displayWeather(data, city);
        errorMessage.style.display = 'none';
    } catch (error) {
        showError(error.message || 'Unable to fetch weather data. Please try again');
        weatherInfo.classList.remove('active');
    }
}

function displayWeather(data, city) {
    const weather = data.data.values;
    
    
    const weatherConditions = {
        1000: "Clear",
        1100: "Mostly Clear",
        1101: "Partly Cloudy",
        1102: "Mostly Cloudy",
        1001: "Cloudy",
        2000: "Fog",
        4000: "Drizzle",
        4001: "Rain",
        4200: "Light Rain",
        4201: "Heavy Rain",
        5000: "Snow",
        5001: "Flurries",
        5100: "Light Snow",
        5101: "Heavy Snow",
        6000: "Freezing Drizzle",
        6001: "Freezing Rain",
        7000: "Ice Pellets",
        8000: "Thunderstorm"
    };

    weatherInfo.innerHTML = `
        <h2>${city}</h2>
        <div class="temperature">${Math.round(weather.temperature)}°C</div>
        <div class="description">${weatherConditions[weather.weatherCode] || 'Weather Conditions'}</div>
        <div class="details">
            <div class="detail-item">
                <div>Feels Like</div>
                <div>${Math.round(weather.temperatureApparent)}°C</div>
            </div>
            <div class="detail-item">
                <div>Humidity</div>
                <div>${Math.round(weather.humidity)}%</div>
            </div>
            <div class="detail-item">
                <div>Wind Speed</div>
                <div>${Math.round(weather.windSpeed)} km/h</div>
            </div>
            <div class="detail-item">
                <div>Cloud Cover</div>
                <div>${Math.round(weather.cloudCover)}%</div>
            </div>
        </div>
    `;
    weatherInfo.classList.add('active');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
