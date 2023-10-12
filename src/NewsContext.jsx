
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsContext() {
  const [newsData, setNewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the currently displayed article
  const apiKey = '1f03aff0ade84d56aff9e17c77b3f878'; // Replace with your News API key

  useEffect(() => {
    // Fetch news data when the component mounts
    axios
      .get(
        `https://newsapi.org/v2/everything?q=gardening&apiKey=${apiKey}&pageSize=5`
      )
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  const handleNextClick = () => {
    // Increment the currentIndex to show the next article
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <ul className="news-list">
        {newsData.length > 0 && currentIndex < newsData.length ? (
          <li className="news-item">
            <h3>
              <a href={newsData[currentIndex].url} target="_blank" rel="noopener noreferrer">
                {newsData[currentIndex].title}
              </a>
            </h3>
            {newsData[currentIndex].urlToImage && (
              <img src={newsData[currentIndex].urlToImage} alt={newsData[currentIndex].title} />
            )}
            <p>{newsData[currentIndex].description}</p>
          </li>
        ) : (
          <p>No more articles to display.</p>
        )}
      </ul>
      <button onClick={handleNextClick} className="next-button">
        Next
      </button>
    </div>
  );
}

export default NewsContext;





// newsapIkey: 1f03aff0ade84d56aff9e17c77b3f878



