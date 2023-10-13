import React, { createContext, useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './component/Home';
import Navbar1 from './component/Navbar';

import Page1 from './component/Page1.jsx';

import NewsContext from './NewsContext';

import Flowers from './component/Flowers';
import Vegetables from './component/Vegetables';
import Fruits from './component/Fruits';


export const WeatherContext = createContext();


function App() {
  const apiKey = '3f93593a210c4dc788d222647230810';
  const [city, setCity] = useState('');  //store city inputs
  const [displayWeather, setDisplayWeather] = useState(false);
  const [weatherData, setWeatherData] = useState({ temperature: '', icon: '' , text: ''}); //store weather data
//text: cloudy, partly cloudy, sunny, overcast
//sunlight: full sun, part shade, filtered shade, empty string, full shade 
  const fetchWeatherData = async () => {
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );

      if (response.ok) { //check if response occurs (error code : 200)
        let data = await response.json(); //parse json data 
        setWeatherData({
          temperature: data.current.temp_f,
          icon: data.current.condition.icon,
          text: data.current.condition.text
        });
        setDisplayWeather(true); //show the div
      } else {
        console.error('Error fetching weather data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleButtonClick = () => { //get weather button click
    if (city) {
      fetchWeatherData();
      
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value); //update city state
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
        {displayWeather && (  //conditional rendering based on if data is avaliable
          <div className="weather-details">
            <h3 className="weather-city">Weather for {city}</h3>
            <p className="weather-temp">Temperature: {weatherData.temperature}°F</p>
            <p className="WeText">Condition: {weatherData.text}</p>
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
      <WeatherContext.Provider value={{ temperature: weatherData.temperature, icon: weatherData.icon, text: weatherData.text }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          
          <Route path="/Page1" element={<Page1 />} />
         
          <Route path="/NewsContext" element={<NewsContext />} />
          
         
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/Fruits" element={<Fruits />} />
          <Route path="/Vegetables" element={<Vegetables />} />
         
          
         
        </Routes>
      </WeatherContext.Provider>
    
    </>
  );
}

export default App;

