import React, { useState, useContext, useEffect } from 'react';
import { WeatherContext } from './App';
import './App.css';

const Weather = () => {
  const apiKey = '3f93593a210c4dc788d222647230810';
  const [city, setCity] = useState('');
  const [displayWeather, setDisplayWeather] = useState(false);
  const { temperature, icon, setWeatherData } = useContext(WeatherContext);

  const fetchWeatherData = async () => {
    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );

      if (response.ok) {
        let data = await response.json();
        setWeatherData({
          temperature: data.current.temp_f,
          icon: data.current.condition.icon,
        });
        setDisplayWeather(true);
      } else {
        console.error('Error fetching weather data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleButtonClick = () => {
    if (city) {
      fetchWeatherData();
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-container">
      <h2 className="weather-title">Weather Information</h2>
      <div className="input-container">
        <label htmlFor="city" className="city-label">
          Enter Current City:
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={handleCityChange}
          className="city-input"
        />
        <button onClick={handleButtonClick} className="get-weather-button">
          Get Weather
        </button>
      </div>
      {displayWeather && (
        <div className="weather-details">
          <h3 className="weather-city">Weather for {city}</h3>
          <p className="weather-temp">Temperature: {temperature}°F</p>
          <p className="weather-condition">Condition: {icon}</p>
          <img
            src={icon}
            alt="Weather-Icon"
            className="weather-icon"
          />
        </div>
      )}
    </div>
  );
};

export default Weather;


//3f93593a210c4dc788d222647230810