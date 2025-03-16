import React from "react";
import { createContext, useState,useEffect } from "react";
import PropTypes from "prop-types";

export const NewsContext=createContext()

 export  default function ContextProvider(props){
  const [news, setNews] = useState([])
  const [category,setcategory]=useState('general')
  const [loading, setloading] = useState(false);



  const getData = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`


    );
    data = await data.json();

    let articles = await data.articles;
    return setNews(articles);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
      getData();
    }, 3000);
  }, [category]);


  return(
<NewsContext.Provider value={{category,setcategory,news,loading}}
>
  {
    props.children
  }
</NewsContext.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};