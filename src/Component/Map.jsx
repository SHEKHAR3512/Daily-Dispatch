import React, { useContext } from "react";
import Card from "./Card";
import { NewsContext } from "../Context/NewsContext";

export default function Map() {

  const {news}=useContext(NewsContext)
  return (
    <>
      {news.map((el, indx) => {
        return (
          <Card
            key={indx}
            data={el}
            img={el.urlToImage}
            description={el.description}
          />
        );
      })}
    </>
  );
}
