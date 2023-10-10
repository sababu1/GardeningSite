import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NewsArticles = () => {
  const [newsData, setNewsData] = useState([]);
  const apiKey = 'a2b73b6e477b524427301b33c6cd0761';

  const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}`;

  const fetchNewsData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setNewsData(response.data.data);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  useEffect(() => {
    fetchNewsData(); // Fetch news data when the component mounts
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h1>MediaStack News</h1>
      <ul>
        {newsData.map((newsItem) => (
          <li key={newsItem.published_at}>
            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
              {newsItem.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};







//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
    
//     const apiUrl = 'endpoint';

//     axios
//       .get(apiUrl)
//       .then((response) => {
      
//         setArticles(response.data.articles);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>News Articles</h1>
//       <ul>
//         {articles.map((article) => (
//           <li key={article.id}>
//             <img src={article.image} alt={article.title} />
//             <a href={article.url} target="_blank" rel="noopener noreferrer">
//               {article.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//The news API key: D2SpBGZ0ufmEUetV0e0uaqgXzIE2PEUQVtiKQTOn

// const NewsArticles = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const apiKey = 'pub_306822e986e8ba8c6841472f8bd26b0eba9b3';
//     const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         // Set the articles data in the state
//         setArticles(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
    
//         <div>
//           <h1>News Articles</h1>
//           <ul>
//             {articles.length > 0 ? (
//               articles.forEach((article) => (
//                 <li key={article.id}>
//                   <img src={article.image_url} alt={article.title} />
//                   <a href={article.url} target="_blank" rel="noopener noreferrer">
//                     {article.title}
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <p>No articles available.</p>
//             )}
//           </ul>
//         </div>
//       );
//     }
    
    export default NewsArticles;
