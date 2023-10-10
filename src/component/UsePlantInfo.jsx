// UsePlantInfo.js
import { useState, useEffect, useContext } from 'react';

const UsePlantInfo = (apiKey, plantName) => {
  const [plantInfo, setPlantInfo] = useState(null);

  useEffect(() => {
    const fetchPlantInfo = async () => {
      try {
        const response = await fetch(
          `https://trefle.io/api/v1/plants/search?q=${plantName}&token=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setPlantInfo(data);
        } else {
          console.error('Error fetching plant data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (plantName) {
      fetchPlantInfo();
    }
  }, [apiKey, plantName]);

  return plantInfo;
};

export default UsePlantInfo;
