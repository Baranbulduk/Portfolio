import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

function Contact() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <h2>CONTACT</h2>
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
