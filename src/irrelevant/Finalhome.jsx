import React from 'react'
import './finalhome.scss'

const Finalhome = () => {
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
  return (

<div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
       
        
        <h1 className='explore'>EXPLORE DIFFERENT CATEGORIES</h1>
        <div className="containerhome">
        
        <img src="https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp" alt="Image 1" className='Image-1' />
        
      
      
        <img src="https://png.pngtree.com/background/20220716/original/pngtree-colorful-sports-theme-background-material-picture-image_1636814.jpg" alt="Image 2" className='Image-2' />
        
     
      
        <img src="https://d6fiz9tmzg8gn.cloudfront.net/wp-content/uploads/2019/02/15tech-Banner.jpg" alt="Image 3" className='Image-3' />
        
      
      
        <img src="https://tse1.mm.bing.net/th?id=OIP.KXUBrtswvUlq15cZJn9pNgHaDt&pid=Api&P=0&h=220" alt="Image 4" className='Image-4'/>
        
      
    </div>
    
        
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


        </div>
   
  )
}

export default Finalhome