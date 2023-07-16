import axios from 'axios'
import React, { useState } from 'react'

function FetchNews() {

  const [news,setNews] = useState([]);
  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=8c7f9161f3aa4244b2a374cbb1a843f8")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      })
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">

          <div className="col-4">
            <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          {
            news.map((value) =>{
              return(
                
          <div className="col-4" key={value.id}>
            
          <div className="card" style={{ width: '18rem' }}>
            <img src={value.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.title}</h5>
              <p className="card-text">{value.description}</p>
              <a href={value.url} className="btn btn-primary">Main</a>
            </div>
          </div>
        </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default FetchNews
