import React from "react";
import { useDispatch } from "react-redux"; //importera dispatch-funktionen från Redux store
import { toggleTheme } from "../../store";
import '../Header/Header.css'

function ThemeToggler() {
  const dispatch = useDispatch(); //hooken används för att hämta/använda dispatch-funktionen 

  return (
    <div>
      <button className="button_theme" onClick={() => dispatch(toggleTheme())}>Change Theme</button>
	  {/* renderar en knapp. när användaren klickar på knappen skickas action toggleTheme() till store genom dispatch-funktionen.  */}
    </div>
  );
}

export default ThemeToggler;