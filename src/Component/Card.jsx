import React from 'react'
import news from '../Images/news.png'
import '../App.css'


export default function Card({data,img,description}) {
  
  return (
         <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={img?img:news} style={{height:"200px"}}  className="card-img-top" alt={data.title} />
      <div className="card-body">
        <h5 className="card-title" >{data.title.slice(0,40)}</h5>
        <p className="card-text">{description?description.slice(0,90):"Update"}</p>
        
        <button type="button" className="btn btn-link">
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            Read Full Article
          </a>
        </button>
      </div>
    </div>
    
  )
}
