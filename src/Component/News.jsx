import React, { useContext} from "react";
import Map from "./Map";
import "../App.css";
import Loader from "./Loader";
import { NewsContext } from "../Context/NewsContext";

export default function News() {
const { news, loading } = useContext(NewsContext);

  return (
    <>
      <h1 className="heading"> Latest News</h1>
      {loading ? <Map news={news} /> : <Loader />}
    </>
  );
}
