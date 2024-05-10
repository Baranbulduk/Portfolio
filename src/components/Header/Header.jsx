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
            <Link className="logo" to="/">
              <h1>BARAN BULDUK</h1>
            </Link>
            <nav className="navigation">
              <Link className="navigation_links" to="/">
                HOME
              </Link>
              <Link className="navigation_links" to="/about">
                ABOUT ME
              </Link>
              <Link className="navigation_links" to="/contact">
                CONTACT
              </Link>
              <ThemeToggler />
            </nav>
          </div>
        </div>
      </header>
    </Provider>
  );
}

export default Header;
