import React, { useContext } from "react";
import Card from "./Card";
import { NewsContext } from "../Context/NewsContext";

export default function Map() {
  const {news}=useContext(NewsContext)
    console.log("shekhar",news);
  return (
    <>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {news?.map((item, index) => (
        <Card
          key={index}
          data={item}
          img={item.img}
          description={item.description}
        />
      ))}
    </div>  
    </>
  );
}


