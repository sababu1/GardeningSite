import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Page1 = ({ weatherData }) => {
  const [plantId, setPlantId] = useState('');
  const [plantData, setPlantData] = useState(null);

  // Function to fetch plant details
  const fetchPlantDetails = async () => {
    try {
      if (!plantId) {
        throw new Error('Please enter a valid plant ID');
      }

      const apiKey = 'sk-Hwlt6524419d83aa22393';
      const response = await fetch(`https://perenual.com/api/species/details/${plantId}?key=${apiKey}`);

      if (!response.ok) {
        throw new Error('Error fetching plant details');
      }

      const data = await response.json();
      setPlantData(data);
    } catch (error) {
      alert(error.message); 
    }
  };

  const handleButtonClick = () => {
    fetchPlantDetails();
  };

  const handleResultsClick = () => {
    if (plantData && weatherData) {
      const sunlight = plantData.sunlight.toLowerCase();
      const weatherText = weatherData.text.toLowerCase();

      if (
        (sunlight === 'full sun' && weatherText === 'Sunny') ||
        ((sunlight === 'part shade' || sunlight === 'filtered shade') &&
          (weatherText === 'partly cloudy' || weatherText === 'cloudy'))
      ) {
        alert('Go Outside'); 
      } else if (
        weatherText === 'overcast' ||
        weatherText === 'heavy rain' ||
        weatherText === 'thunderstorms' ||
        weatherText === 'light rain' 
      ) {
        alert('Stay Inside'); 
      } else {
        alert('Stay Inside'); 
      }
    } else {
      alert('Stay inside.'); 
    }
  };

  return (
    
    <div className='Page1Card'>
      <h3> </h3>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Title>
            <h2 className='PlantDetails'>Plant Details</h2>
          </Card.Title>
          <Card.Text>
            {plantData && (
              <div>
                <h3>Plant Name: {plantData.common_name}</h3>
                <p>Watering Period: {plantData.watering}</p>
                <p>Sunlight: {plantData.sunlight}</p>
                <p>Description: {plantData.description}</p>
              </div>
            )}
          </Card.Text>
          <Button variant="success" onClick={handleResultsClick}>
            Should I plant now?
          </Button>
        </Card.Body>
      </Card>

      <div className='form1'>
        <input
          type="text"
          placeholder="Enter Plant ID"
          value={plantId}
          onChange={(e) => setPlantId(e.target.value)}
        />

        <Button onClick={handleButtonClick} variant='success'>
          Fetch Plant Data
        </Button>
      </div>
    </div>
  );
};

export default Page1;
