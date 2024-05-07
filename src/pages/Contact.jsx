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
        <p>
          If you have any further questions,
          <br /> don't hesitate to send me a message!
        </p>
        <Form />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
