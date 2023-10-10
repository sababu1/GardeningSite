import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsContext() {

const [newsData, setNewsData] = useState([]);
const apiKey = '1f03aff0ade84d56aff9e17c77b3f878'; // Replace with your News API key

useEffect(() => {
  // Fetch news data when the component mounts
  axios
    .get(
      // `https://newsapi.org/v2/everything?q=gardening&apiKey=${apiKey}&pageSize=1`
    )
    .then((response) => {
      setNewsData(response.data.articles);
    })
    .catch((error) => {
      console.error('Error fetching news data:', error);
    });
}, []);

return (
  <div className="news-container">
      <h2>Latest News</h2>
      <ul className="news-list">
        {newsData.map((article, index) => (
          <li className="news-item" key={index}>
            <h3>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h3>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <p>{article.description}</p>
        </li>
      ))}
    </ul>
  </div>
);
}
export default NewsContext;


// newsapIkey: 1f03aff0ade84d56aff9e17c77b3f878



