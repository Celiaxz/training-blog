import React from "react";
import HomeItem from "./homeitem/HomeItem";
import Foot from "./footer/foot";
import { Header } from "./header/header";
const Home = () => {
  return (
    <>
      <Header />
      <HomeItem />
      <Foot />
    </>
  );
};

export default Home;
