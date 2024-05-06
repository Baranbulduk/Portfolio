import "./Header.css";
import { Link } from "react-router-dom";
import { store } from "../../store.js";
import ThemeToggler from "../Theme/ThemeToggler.jsx";
import { Provider } from "react-redux";
import logoLight from '../../assests/logoLight.png';
import logoDark from '../../assests/logoDark.png';


function Header() {
  return (
    <Provider store={store}>
      <header>
        <div className="wrapper">
          <div className="header">
          <img className="lightLogo" src={logoLight} alt="" /> <img className="darkLogo" src={logoDark} alt="" />
         <nav className="navigation">
            <Link className="navigation_links" to="/">Home</Link>
            <Link className="navigation_links" to="/about">About Me</Link>
            <Link className="navigation_links" to="/contact">Contact</Link>
            <ThemeToggler />
          </nav>
          
          </div>
        </div>
      </header>
    </Provider>
  );
}

export default Header;
