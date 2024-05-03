import React from "react";
import Header from "../components/Header/Header";
import FetchData from "../components/Fetchdata/FetchData";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <section>
          <h1>Hi!, I am Baran Bulduk</h1>
          <h1>Front End Developer</h1>
        </section>
        <h2>My Projects</h2>
        <FetchData />
      </div>
      <Footer />
    </>
  );
}

export default Home;
