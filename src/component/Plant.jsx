// import { useState, useEffect } from "react";

// // Define the identifyPlant function as a separate function
// const identifyPlant = async (
//   image,
//   convertImageToBase64,
//   Api_Key,
//   setIdentificationResult
// ) => {
//   if (!image) {
//     alert('Please select an image first.');
//     return;
//   }

//   try {
//     const base64Image = await convertImageToBase64(image);

//     const response = await fetch('https://plant.id/api/v3/identification', {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${Api_Key}`,
//         'Content-Type': 'application/json', // Set content type to JSON
//       },
//       body: JSON.stringify({ image: base64Image }), // Send base64 image as JSON
//     });

//     if (response.ok) {
//       const result = await response.json();
//       setIdentificationResult(result);
//     } else {
//       alert('Error identifying plant. Please try again.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// function Plant() {
//   const [image, setImage] = useState(null);
//   const [identificationResult, setIdentificationResult] = useState(null);
//   const Api_Key = 'cwiBkulnl6UDuoSSRJ1L9RuhAyjHqs623jMyhaBDJVD1UQt89y';

//   // Function to handle image file input change
//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   // Function to convert an image to base64
//   const convertImageToBase64 = (imageFile) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         resolve(event.target.result.split(',')[1]); // Get the base64 data (remove data:image/png;base64,)
//       };
//       reader.onerror = (error) => reject(error);
//       reader.readAsDataURL(imageFile);
//     });
//   };

//   // Function to call identifyPlant
//   const handleIdentifyPlant = () => {
//     identifyPlant(image, convertImageToBase64, Api_Key, setIdentificationResult);
//   };

//   return (
//     <div>
//       <h2>Plant Identification</h2>
//       <input type="file" accept="image/*" onChange={handleImageChange} />
//       <button onClick={handleIdentifyPlant}>Identify Plant</button>

//       {identificationResult && (
//         <div>
//           <h3>Identification Result:</h3>
//           <pre>{JSON.stringify(identificationResult, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Plant;
