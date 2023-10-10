// import { useState } from 'react';

// const fetchPlantData = async (speciesName) => {
//   try {
//     const apiKey = 'sk-Hwlt6524419d83aa22393';
//     const response = await fetch(
//       `https://perenual.com/api/species-care-guide-list?key=${apiKey}&page=1&q=${speciesName}`
//     );

//     if (!response.ok) {
//       console.error('Error fetching plant data');
//       return null;
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     return null;
//   }
// };

// const PlantInfo = () => {
//   const [speciesName, setSpeciesName] = useState(''); // State to store the species name
//   const [plantData, setPlantData] = useState(null); // State to store plant data

//   const handleInputChange = (e) => {
//     setSpeciesName(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = await fetchPlantData(speciesName);
//     if (data) {
//       setPlantData(data);
//     }
//   };

//   return (
//     <div>
//       <h2>Plant Information</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter species name"
//           value={speciesName}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {plantData && (
//         <div>
//           <h3>Species Name: {plantData.species_name}</h3>
//           <p>Watering: {plantData.watering}</p>
//           <p>Sunlight: {plantData.sunlight}</p>
//           {/* Add more plant information as needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlantInfo;


import { useState, useEffect } from 'react';

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
      // const response = await fetch(`https://perenual.com/api/species/details/${plantId}?key=${apiKey}`);

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

  useEffect(() => {
    // You can use useEffect to fetch plant details when the component mounts or when plantId changes
    fetchPlantDetails();
  }, [plantId]);

  return (
    <div>
      <h2>Plant Details</h2>
      <input
        type="text"
        placeholder="Enter Plant ID"
        value={plantId}
        onChange={handleInputChange}
      />
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
