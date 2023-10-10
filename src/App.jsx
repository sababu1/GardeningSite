import React, { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar1 from './component/Navbar';
import AboutMe from './component/AboutMe';
import Page1 from './component/Page1.jsx';
import Page2 from './Page2';
import NewsContext from './NewsContext';
import NewsArticles from './NewsArticles';
import Plant from './component/Plant';
import Flowers from './component/Flowers';
export const WeatherContext = createContext();

function App() {
  const apiKey = '3f93593a210c4dc788d222647230810';
  const [city, setCity] = useState('');
  const [displayWeather, setDisplayWeather] = useState(false);
  const [weatherData, setWeatherData] = useState({ temperature: '', icon: '' });

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
    <>
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
            <p className="weather-temp">Temperature: {weatherData.temperature}°F</p>
            <img
              src={weatherData.icon}
              alt="Weather Icon"
              className="weather-icon"
            />
          </div>
        )}
      </div>
      <div></div>
      <Navbar1 />
      <WeatherContext.Provider value={{ temperature: weatherData.temperature, icon: weatherData.icon }}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/NewsContext" element={<NewsContext />} />
          <Route path="/Plant" element={<Plant />} />
          <Route path="/Flowers" element={<Flowers />} />
        </Routes>
      </WeatherContext.Provider>
    </>
  );
}

export default App;

