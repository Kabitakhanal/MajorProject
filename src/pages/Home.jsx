import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Classifyimg from "../img/classifynews.jpg";
import "./home.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import homeImage from "../img/news_home.png";
const Home = () => {
  const navigate = useNavigate();
  const gotowrite = () => {
    navigate("/write");
  };

  const [articles, setArticles] = useState([]);

  const fetchRandomArticles = async () => {
    try {
      // Fetch 6 random news articles from the backend
      const response = await axios.get("http://localhost:3001/v1/news", {
        // params: {
        //   limit: 6 // Limit the number of articles to fetch
        // }
      });
      const articlesData = response.data.data;
      console.log(articlesData); // Accessing the array of articles
      setArticles(articlesData);
      console.log("**************");
    } catch (error) {
      console.error("Error fetching random articles:", error);
    }
  };

  useEffect(() => {
    fetchRandomArticles();
  }, []);

  return (
    <div className="home">
      <div className="box1">
        <div className="writepost">
          <div className="news-tagline">Classify Your Own News Articles</div>
 </div>

 <img className="homeimage" src={homeImage} alt="" />
       
     

        
      </div>
      <button className="writebutton" onClick={gotowrite}>
        Classify
      </button>
      <div className="separation"></div>
      <div className="news-cards-container">
        {articles.map((article, index) => (
          <>
            {console.log(articles)}
            <div className="news-card" key={article.id}>
              <div className="news-image">
                <img className="imgcard" src={article.photo} alt={article.news_title} />
              </div>
              <div className="news-content">
                <h2 className="news-title">
                  {article.news_title}
                  <div className="meta-info">
                    <span className="author">{article.source}</span>
                    <span className="category">{article.news_class}</span>
                  </div>
                </h2>
                <p className="news-body">{article.news_body}</p>
                <Link to={`/post/${article.id}`} className="readmore">
                  Read More
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
