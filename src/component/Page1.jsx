import React, { useState, useEffect } from 'react';

const PlantDetails = () => {
  const [plantId, setPlantId] = useState(''); // State to store the plant ID
  const [plantData, setPlantData] = useState(null); // State to store plant data

  // Function to fetch plant details
  const fetchPlantDetails = async () => {
    if (!plantId) {
      // Check if the plant ID is empty
      console.error('Please enter a plant ID');
      return;
    }

    try {
      const apiKey = 'sk-Hwlt6524419d83aa22393';
      const response = await fetch(`https://perenual.com/api/species/details/${plantId}?key=${apiKey}`);

      if (!response.ok) {
        console.error('Error fetching plant details');
        return;
      }

      const data = await response.json();
      setPlantData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle input change
  const handleInputChange = (e) => {
    setPlantId(e.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    fetchPlantDetails();
  };

  return (
    <div>
      <h2>Plant Details</h2>
      <input
        type="text"
        placeholder="Enter Plant ID"
        value={plantId}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Fetch Plant Data</button>
      {plantData && (
        <div>
          <h3>Plant Name: {plantData.common_name}</h3>
          <p>Watering Period: {plantData.watering}</p>
          <p>Sunlight: {plantData.sunlight}</p>
          {/* Add more plant information as needed */}
        </div>
      )}
    </div>
  );
};

export default PlantDetails;

