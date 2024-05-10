import "./Form.css";
import React, { useState, useEffect, useRef } from "react";

function Form() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []); // Gör att namn-input fokuserar när användaren kommer till Kontakt-sidan

  function handleFullName(event) {
    setFullName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  // Kontrollerar så att användaren skriver ett befintlig mailadress
  useEffect(() => {
    const timer = setTimeout(() => {
      if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        setEmailError("Unvalid email address");
      } else {
        setEmailError("");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [email]);

  function handleMessage(event) {
    setMessage(event.target.value);
  }
  // Detta sker när användaren klickar på "Send"
  const handleSubmit = (event) => {
    event.preventDefault();

    // Kontrollera om det finns ett felmeddelande för email
    if (emailError) {
      alert(emailError);
    } else {
      console.log(fullName, email, message);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <p>
        If you have any further questions,
        <br /> don't hesitate to send me a message!
      </p>
      <label>Fullname:</label>
      <input
        type="text"
        value={fullName}
        onChange={handleFullName}
        ref={nameInputRef}
      />
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmail} />
      <label>Question:</label>
      <textarea
        className="question_input"
        value={message}
        onChange={handleMessage}
      ></textarea>
      <button className="sendButton" type="submit">
        SEND
      </button>
    </form>
  );
}
export default Form;
