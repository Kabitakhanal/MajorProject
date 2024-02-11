
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';
import axios from 'axios';
import '../style.scss'


const Single = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/v1/news/get-one/${id}`);
        setArticle(response.data.data);
        console.log(response.data); // Ensure data is fetched successfully
      } catch (error) {
        console.error('Error fetching article:', error);
        setError(error.message);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div className='single'>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {article ? (
            <>
            <div className="content">
              <img src={article.photo} alt=""/> 
              <div className="user">
                <div className="info">
                  <br />
                  <span>{article.source}</span>
                </div>
                <div className="edit">
                  <Link to={`/write?edit=${article.id}`}>
                    <img src={Edit} alt="Edit"/>
                  </Link>
                  <img src={Delete} alt="Delete"/>
                </div>
              </div>
              <h1>{article.news_title}</h1>
              <p>{article.news_body}</p>
            </div>
          </>) : (
            <p>Loading article...</p>
          )}
        </>
      )}
      <Menu/>
    </div>
  );
};

export default Single;


