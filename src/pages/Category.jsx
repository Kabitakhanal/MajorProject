/*import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.scss';

const Category = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryName = searchParams.get('name');

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        // Use axios to make a GET request to fetch all articles for the given category name
        axios.get(`http://localhost:3001/v1/news?category=${categoryName}`, {
            params: {
                category: categoryName,
            },
        })
        .then(response => {
          console.log(response.data.data); // Log the response data
          setArticles(response.data);
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, [categoryName]);

    return (
         <div className='news-cards-container'>
  {articles.length > 0 ? (
    articles.map((article) => (
      
     
      <div className='news-card' key={article.id}>
        {console.log("Working")}
        <div className='test'> HELOOOOOOOOOOO IS THIS WOEEKSBSHSHSH</div>
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
    );
};

export default Category;
*/
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './category.scss';
import { Link } from 'react-router-dom';

const Category = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryName = searchParams.get('name');
  const currentPage = parseInt(searchParams.get('page')) || 1; // Parse page number from URL, default to 1 if not present
  const articlesPerPage = 9;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/v1/news?category=${categoryName}`)
      .then(response => {
        setArticles(response.data.data);
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, [categoryName]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = pageNumber => {
    // Update URL with new page number
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', pageNumber);
    window.history.replaceState(null, null, `?${queryParams.toString()}`);
  };

  return (
    <div className='category-container'>
      <div className='category-info'>
        <h1 className='category-title'>Category: {categoryName}</h1>
      </div>
      <div className='row'>
        {currentArticles.map(article => (
          <div className='col-md-4' key={article.id}>
            <Card
              id={article.id}
              image={article.photo}
              title={article.news_title}
              content={article.news_body}
              author={article.source}
              category={article.news_class}
            />
          </div>
        ))}
      </div>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumbers = Math.ceil(totalArticles / articlesPerPage);

  return (
    <nav>
      <ul className='pagination'>
        {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(number => (
          <li key={number} className='page-item'>
            <Link to={`?page=${number}`} className='page-link' onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Card = (props) => (
  <div className='category-card'>
    <div className='category-card__body'>
      <img className='category-card__image' src={props.image} alt={props.title} />
      <h2 className='category-card__title'>{props.title}</h2>
      <div className='category-card__authandcat'>
        <div className='category-card__author'>{props.author}</div>
        <div className='category-card__category'>{props.category}</div>
      </div>
      <p className='category-card__content'>{props.content}</p>
    </div>
    <Link to={`/post/${props.id}`} className='category-card__btn'>Read More</Link>
  </div>
);

export default Category;







