import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    const posts=[
        {
          id:1,
          title: "October favorite recepies",
          desc:"I have compiled a list of my favorite fall desert recepies that you can try and enjoy with your friends and family!",
          img: "https://hips.hearstapps.com/goodhousekeeping/assets/18/03/1516373451-skillet-cookie-sundaes-ghk-0218.jpg"
        },
        {
          id:2,
          title: "Draco Malfoy a werewolf!?",
          desc:"The latest Harry Potter conspiracy theory is here!",
          img: "https://i2-prod.mirror.co.uk/incoming/article6363218.ece/ALTERNATES/s1200b/Draco-Malfoy-Wolf.jpg"
        },
        {
          id:3,
          title: "1989(Taylor's Version) OUT SOON!!!",
          desc:"It will arrive just three months after ‘Speak Now (Taylor’s Version)’ delivered the biggest opening sales week of the year.",
          img: "https://www.udiscovermusic.com/wp-content/uploads/2023/08/1989-Taylors-Version-1024x1024.jpg"
        },
        {
          id:4,
          title: "Tilicho Trek",
          desc:"Watch Koshish Shrestha's new video about his trek to Tilicho Lake on youtube now.",
          img: "https://i.ytimg.com/vi/YAyoDNkpPBc/maxresdefault.jpg"
        },
        
      ];
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt=""/>
                <h2>
                {post.title}
                </h2>
                <Link className='link' to={'/post/${post.id'}>
              <button >
                Read More</button>
                </Link>
            </div>
        ))}
    </div>
  );
};

export default Menu