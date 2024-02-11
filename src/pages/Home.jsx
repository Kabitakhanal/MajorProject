import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Classifyimg from '../img/classifynews.jpg'
import './home.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
  const navigate=useNavigate();
  const gotowrite = () =>{
    navigate('/write')
  }

  const [articles, setArticles] = useState([]);

  const fetchRandomArticles = async () => {
    try {
      // Fetch 6 random news articles from the backend
      const response = await axios.get('http://localhost:3001/v1/news', {
        params: {
          limit: 6 // Limit the number of articles to fetch
        }
      });
      const articlesData = response.data.data; // Accessing the array of articles
      setArticles(articlesData);
    } catch (error) {
      console.error('Error fetching random articles:', error);
    }
  };
  
  useEffect(() => {
    fetchRandomArticles();
  }, []);



  
  return (
    <div className='home'>
      <div className='box1'>
      <div className="writepost">
      <div className='news-tagline'>Classify Your Own News Articles</div>
      
         <div><p class="popout">
	<span>C</span>
	<span>L</span>
	<span>A</span>
	<span>S</span>
	<span>S</span>
	<span>I</span>
	<span>F</span>
	<span>Y</span>
	<br></br>
	<span>Y</span>
	<span>O</span>
	<span>U</span>
	<span>R</span>
	&nbsp;
	<span>O</span>
	<span>W</span>
	<span>N</span>
	
	<br></br>
	<span>N</span>
	<span>E</span>
	<span>W</span>
	<span>S</span>
	&nbsp;
	<span>A</span>
	<span>R</span>
	<span>T</span>
	<span>I</span>
	<span>C</span>
	<span>L</span>
	<span>E</span>
</p></div>

  

      </div>
      
  <button className='writebutton' onClick={gotowrite}>Upload and classify</button>

      </div>
      <div className='separation'></div>
     <div className='news-cards-container'>
  {articles.length > 0 ? (
    articles.map((article) => (
      <div className='news-card' key={article.id}>
        <div className='news-image'>
          <img src={article.photo} alt={article.news_title} />
        </div>
        <div className='news-content'>
          <h2 className='news-title'>
            {article.news_title}
            <div className='meta-info'>
              <span className='author'>{article.source}</span>
              <span className='category'>{article.news_class}</span>
            </div>
          </h2>
          <p className='news-body'>{article.news_body}</p>
          <Link to={`/post/${article.id}`} className='readmore'>Read More</Link>
        </div>
      </div>
    ))
  ) : (
    <p>Loading articles...</p>
  )}
</div>


    </div>
  );
};

export default Home;
