import React, {useState} from "react";
import { useDispatch } from "react-redux"; //importera dispatch-funktionen från Redux store
import { toggleTheme } from "../../store";
import '../Header/Header.css'


function ThemeToggler() {
  const dispatch = useDispatch(); //hooken används för att hämta/använda dispatch-funktionen 

  const [buttonText, setButtonText] = useState("Dark Theme");
  /*Byter text när man klickar på kanppen för att byta tema samtidigt som när användaren klickar på knappen skickas action toggleTheme() till store genom dispatch-funktionen.*/
  const handleToggle = () => {
    if (buttonText === "Dark Theme") {
      setButtonText("Light Theme");
    } else {
      setButtonText("Dark Theme");
    }
    dispatch(toggleTheme());
  };

  return (
    <div>
      <button className="button_theme" onClick={handleToggle}>{buttonText}</button>
    </div>
  );
}

export default ThemeToggler;