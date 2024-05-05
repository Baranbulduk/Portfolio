import "./Header.css";
import { Link } from "react-router-dom";
import { store } from "../../store.js";
import ThemeToggler from "../Theme/ThemeToggler.jsx";
import { Provider } from "react-redux";

function Header() {
  return (
    <Provider store={store}>
      <header>
        <div className="wrapper">
          <div className="header">
          <h1>Logo</h1>
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
