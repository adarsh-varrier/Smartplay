import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherData() {  
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');  
    if (!token) {
      console.error("No token found, user is not logged in.");
      return;
    }

    const fetchWeather = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/weather/', {
          headers: { 'Authorization': `Token ${token}` },
        });
        setWeather(response.data);
      } catch (err) {
        setError('Error fetching weather data.');
        console.error('Error:', err.response || err.message || err);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className='dashboard-container'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather ? (
                  <div>
                      <h2>{weather.name}, {weather.sys.country}</h2>
                      <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
                      <p><strong>Feels Like:</strong> {weather.main.feels_like}°C</p>
                      <p><strong>Min Temp:</strong> {weather.main.temp_min}°C</p>
                      <p><strong>Max Temp:</strong> {weather.main.temp_max}°C</p>
                      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                      <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
                      <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                      <p><strong>Wind Direction:</strong> {weather.wind.deg}°</p>
                      <p><strong>Cloud Coverage:</strong> {weather.clouds.all}%</p>
                      <p><strong>Visibility:</strong> {weather.visibility / 1000} km</p>
                      <p><strong>Weather:</strong> {weather.weather[0].description}</p>
                      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather-icon" />
                  </div>
                    ) : (
                      <p>Loading weather data...</p>
                    )}
    </div>
  );
}

export default WeatherData;
