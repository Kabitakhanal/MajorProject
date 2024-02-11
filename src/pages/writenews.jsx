/*import React, { useState } from 'react';
import './NewsForm.css'; // Make sure to import your CSS file
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [author,setAuthor]=useState('');
  const [content, setContent] = useState('');
  const [created,setCreated]= useState('');
  const [category,setCategory]=useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAuthorChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCreatedChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setTitle(e.target.value);
  };

  
  const handleImageChange = (e) => {
    // Handle image upload logic here
    const file = e.target.files[0];
    setImage(file);
  };

  const handleClassifyClick = () => {
    // Implement your classify button logic here
    // You can send the title, content, and image to a server for classification

    // Create FormData object
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    formData.append('created', created);
    formData.append('category', category);
    formData.append('image', image);

    // Example: Send formData to your server using fetch
    fetch('/api/classify', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
  };
  const[value, setValue]=useState('')
  return (
    <div className='boxforwrite'>
    <div className="news-form">
        
      <label>Title</label>
      <input type="text"  className='title' value={title} onChange={handleTitleChange} />
      <label>Title</label>
      <input type="text"  className='title' value={title} onChange={handleTitleChange} />


      <label>Content</label>
      <div className="editorContainer">
          <ReactQuill className="editor" theme='snow' value={value} onChange={setValue} />
        </div>
       <br></br>

      
      <input type="file" onChange={handleImageChange} />
      <br></br>
      <br></br>

      <button className='classifybutton' onClick={handleClassifyClick}>Classify</button>
    </div>
    </div>
  );
};

export default NewsForm;
*/
/*
import React, { useState } from 'react';
import './NewsForm.css'; // Make sure to import your CSS file
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewsForm = () => {
  const [article, setArticle] = useState({
    source: "",
    news_class: "",
    news_body: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleContentChange = (value) => {
    setArticle((prev) => ({ ...prev, content: value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/v1/news",article);
      console.log("SUCCESS");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(article)
  return (
    
    <div className='form'>
      <div className='detailsnews'>
         <div className='classifyyourarticle'>
         <h1 >Classify your own article</h1>
         </div>
         <div className='inputtitle'>
        <input
        type='text'
        placeholder='Title'
        onChange={handleChange}
        name='source'
        />
       </div>

        <div className='inputauthor'>
        <input
        type='text'
        placeholder='Author'
        onChange={handleChange}
        name='news_class'
        />
        </div>

      </div>
      <div className='newsarticle'>
        <div className='article-area'>
        <textarea
        placeholder="Enter your news article"
        name='news_body'
        onChange={handleChange}
        required
      ></textarea>
      
        </div>
        
      
        <div><button className='classify-button' onClick={handleClick}>
        Classify
        </button>
        </div>
      </div>
      
      
    </div>
  );

};

export default NewsForm;
*/

/*
<div className="editorContainer">
          <ReactQuill style={{overflow: "hidden"}} className="editor" theme='snow' name="content" value={article.content} onChange={handleContentChange} />
        </div>
        */

        import React, { useState } from 'react';
        import './writenews.scss'; // Make sure to import your CSS file
        import ReactQuill from 'react-quill';
        import 'react-quill/dist/quill.snow.css';
        import { useNavigate } from 'react-router-dom';
        import axios from 'axios';
        
        const NewsForm = () => {
          const [article, setArticle] = useState({
            news_title: "",
            source: "",
            photo: null,
            news_body: ""
          });
        
          const navigate = useNavigate();
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setArticle((prev) => ({ ...prev, [name]: value }));
          };
        
          const handleContentChange = (value) => {
            setArticle((prev) => ({ ...prev, news_body: value }));
          };
        
          const handleImageChange = (e) => {
            setArticle((prev) => ({ ...prev, photo: e.target.files[0] }));
          };
          
          const handleClick = async (e) => {
            e.preventDefault();
            try {
              console.log(article)
              const formData = new FormData();
              formData.append('news_title', article.news_title);
              formData.append('source', article.source);
              formData.append('news_body', article.news_body);
              formData.append('photo', article.photo);
              console.log(formData)

              const response = await axios({
                method: "post",
                url: "http://localhost:3001/v1/news",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
          
              console.log("Response:", response.data);
              const categoryName = response.data.data.news_class;
          
              if (response.status === 200) {
                console.log("SUCCESS");
                navigate(`/category?name=${categoryName}`);
              } else {
                console.log("Unexpected status code:", response.status);
                // Handle unexpected status code here
              }
            } catch (err) {
              console.error("Error:", err);
              // Handle errors
            }
          };
          return (
            <div className='outer-form'>
            <div className='form'>
              <div className='detailsnews'>
                 <div className='classifyyourarticle'>
                 <h1 class="home-title">
    <span>UPLOAD AND CLASSIFY</span>
    <span>YOUR OWN NEWS ARTICLES</span>
  </h1>
                 </div>
                 <div className='inputtitle'>
                   <input
                     type='text'
                     placeholder='Title'
                     onChange={handleChange}
                     name='news_title'
                     value={article.news_title}
                   />
                 </div>
        
                 <div className='inputauthor'>
                   <input
                     type='text'
                     placeholder='Author'
                     onChange={handleChange}
                     name='source'
                     value={article.source}
                   />
                 </div>
        
                 <div className='inputimage'>
                   <input
                     type='file'
                     accept='image/*'
                     onChange={handleImageChange}
                     name='photo'
                   />
                 </div>
              </div>
        
              <div className='newsarticle'>
                <div className='article-wrapper'>

                  <textarea
        placeholder="Enter your news article"
        name='news_body'
        onChange={handleChange}
        required
      ></textarea>
                </div>
                
                <div>
                  <button className='button-27' onClick={handleClick}>
                    Classify
                  </button>
                </div>
              </div>
            </div>
            </div>
          );
        };
        
        export default NewsForm;
        