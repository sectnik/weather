async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'c2fed6a42a8ba0e510f6937cd00618ab'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-result').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather-result').innerHTML = '<p>City not found. Please try again.</p>';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-result').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
}
