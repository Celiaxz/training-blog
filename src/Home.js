import React from "react";
import HomeItem from "./homeitem/HomeItem";
import Foot from "./Foot";
import { Header } from "./header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-content">
      <Header />
      <HomeItem />
      <Foot />
    </div>
  );
};

export default Home;
