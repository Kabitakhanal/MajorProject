/*import React from 'react';
import './newhome.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { typeColors } from '../typeColors';

/* const typeColor = {props.category} && typeColors[{props.category}];
           const backgroundColor = ${typeColor}; */
/*const Newhome = () => { 
  
function Card(props){
  
  return(
    
    <div className='cardhome'>
      <div className='card__body'>
        <img className='card__image' src={props.image}/>
        <h2 className='card__title'>{props.title}</h2>
        <div className='card__authandcat'>
          <div className='card__author'>{props.author}</div>

          <div className='card__category' >{props.category}</div>
        </div>
        <p className='card__content'>{props.content}</p>
      </div>
      <button className='card__btn'>Read More</button>
    </div>
  )
}

  const [Articles,setArticles]=useState([])
  useEffect(()=>{
    const fetchAllArticles = async ()=>{
        try{
            const res= await axios.get("http://localhost:3001/v1/news")
        setArticles(res.data);
    }catch(err){
            console.log(err)
        }
    }
    fetchAllArticles();
},[]);

  return (
    <div className='band'>
      {Articles.map(article=>(
                <div className='article' key={article.id}>
                  
                    <Card
                    image={article.photo}
                    title={article.news_title}
                    content={article.news_body}
                    author={article.source}
                    category={article.news_class}
                    />
      
                </div>
            ))}  

    </div>
  )
}

export default Newhome*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './newhome.scss'; // Import your existing SCSS file
import { typeColors } from '../typeColors'; // Assuming you have a typeColors file

const Newhome = () => {
  function Card(props) {
    const [category, setCategory] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const category = await getCategory(props.news_body);
          setCategory(category);
        } catch (error) {
          console.error('Error fetching category:', error);
        }
      };

      fetchData();
    }, [props.news_body]);

    const typeColor = typeColors[category];
    const cardStyle = {
      backgroundColor: typeColor || 'white', // Fallback to white if category color not found
    };

    return (
      <div className='cardhome' style={cardStyle}>
        <div className='header_post'>
          <img className='card__image' src={props.photo} alt={props.news_title}/>
        </div>
        <div className='body_post'>
          <div className='post_content'>
            <h1>{props.news_title}</h1>
            <p>{props.news_body}</p>
            <div className='container_infos'>
              <div className='postedBy'>
                <span>author</span>
                {props.source}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("Fetching articles...");
    const fetchAllArticles = async () => {
      try {
        const res = await axios.get("http://localhost:3001/v1/news");
        console.log("Fetched articles:", res.data);
        const limitedArticles = res.data.data.slice(0, 6); // Limit to the first six articles
        console.log("Limited articles:", limitedArticles);
        setArticles(limitedArticles);
      } catch (err) {
        console.error('Error fetching articles:', err);
      }
    };
    fetchAllArticles();
  }, []);

  console.log("Articles state:", articles); // Log articles state for debugging

  return (
    <div className='band'>
      {/* Render the limited articles */}
      {articles.map(article => (
        <div className={`item-${article.id}`} key={article.id}>
          <Card
            photo={article.photo}
            news_title={article.news_title}
            news_body={article.news_body}
            source={article.source}
          />
        </div>
      ))}
    </div>
  );
}

export default Newhome;

const getCategory = async (news_body) => {
  try {
    const formData = new FormData();
    formData.append("news", news_body);
    const { data } = await axios.post("http://127.0.0.1:5000/classifynews", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (data && data.predictions && data.predictions.length > 0) {
      return data.predictions[0];
    }
    return null;
  } catch (error) {
    console.error('Error fetching category:', error);
    return null;
  }
};

























/*const NewsCard = ({ cardNumber, tag, time, title, creator }) => (
  <div className={`card card-${cardNumber}`}>
    <div className="card-img"></div>
    <a href="" className="card-link">
      <div className="card-img-hovered"></div>
    </a>
    <div className="card-info">
      <div className="card-about">
        <a className={`card-tag ${tag}`}>{tag}</a>
        <div className="card-time">{time}</div>
      </div>
      <h1 className="card-title">{title}</h1>
      <div className="card-creator">by <a href="">{creator}</a></div>
    </div>
  </div>
);

const CardContainer = () => (
  <div className="card-container">
    <NewsCard
      cardNumber={1}
      tag="News"
      time="6/11/2018"
      title="There have been a big Tesla accident at New Jersey"
      creator="Sardorbek Usmonov"
    />
    <NewsCard
      cardNumber={2}
      tag="Tech"
      time="6/07/2018"
      title="Samsung laptops are exploding again"
      creator="Tyler Platt"
    />
    <NewsCard
      cardNumber={3}
      tag="Deals"
      time="5/27/2018"
      title="Apple is having a big sale for the first time"
      creator="Timur Mirzoyev"
    />
    <NewsCard
      cardNumber={4}
      tag="Politics"
      time="5/20/2018"
      title="Net Neutrality is coming to its end"
      creator="Gregoy Trem"
    />
  </div>
);

export default CardContainer;


/*
import React, { useState, useEffect } from 'react';
import './newhome.scss';

const NewsCard = ({ cardNumber, tag, time, title, creator }) => (
  <div className={`card card-${cardNumber}`}>
    <div className="card-img"></div>
    <a href="" className="card-link">
      <div className="card-img-hovered"></div>
    </a>
    <div className="card-info">
      <div className="card-about">
        <a className={`card-tag ${tag}`}>{tag}</a>
        <div className="card-time">{time}</div>
      </div>
      <h1 className="card-title">{title}</h1>
      <div className="card-creator">by <a href="">{creator}</a></div>
    </div>
  </div>
);

const CardContainer = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API endpoint
    const API_URL = 'https://your-api-endpoint.com/news';

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Assuming the API response is an array of news articles
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching data from the API', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="card-container">
      {newsData.map((article, index) => (
        <NewsCard
          key={index}
          cardNumber={index + 1}
          tag={article.tag}
          time={article.time}
          title={article.title}
          creator={article.creator}
        />
      ))}
    </div>
  );
};

export default CardContainer;

*/