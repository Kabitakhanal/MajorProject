import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Menu = () => {
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    const fetchRandomPosts = async () => {
      try {
        // Replace 'http://example.com/api/news' with the actual API endpoint
        const response = await axios.get('http://localhost:3001/v1/news');
        const shuffledPosts = response.data.data.sort(() => 0.5 - Math.random());
        const selectedPosts = shuffledPosts.slice(0, 3);
        setRandomPosts(selectedPosts);
      } catch (error) {
        console.error('Error fetching random posts:', error);
      }
    };

    fetchRandomPosts();
  }, []);

  return (
    <div className='menu'>
      <h1>Other news you may like</h1>
      {randomPosts.map(post => (
        <div className="post" key={post.id}>
          <img src={post.photo} alt={post.news_title} />
          <h2>{post.news_title}</h2>
          <Link className='link' to={`/post/${post.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
