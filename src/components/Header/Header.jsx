import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <img src="" alt="" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button>Tema</button>
      </div>
    </header>
  );
}

export default Header;
