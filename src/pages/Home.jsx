import React from "react";
import Header from "../components/Header/Header";
import heroImage from '../assests/heroImage.jpg';
import FetchData from "../components/Fetchdata/FetchData";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
        <section className="hero_image_container">
          <img className="hero_image" src={heroImage}alt="wallpaper" />
          <h1 className="hero_image_name">BARAN BULDUK</h1>
          <h1 className="
          hero_image_role" >FRONTEND DEVELOPER</h1>
        </section>
        <div className="wrapper">
        <h2>MY PROJECTS</h2>
        <FetchData />
      </div>
      <Footer />
    </>
  );
}

export default Home;
