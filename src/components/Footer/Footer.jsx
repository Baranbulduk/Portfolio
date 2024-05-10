import "./Footer.css";
import EmailDark from "../../assets/icons/emailIconDark.png";
import TelNrDark from "../../assets/icons/phoneIconDark.png";
import LocationDark from "../../assets/icons/locationIconDark.png";
import GithubDark from "../../assets/logotypes/githubDark.png";
import LinkedinDark from "../../assets/logotypes/linkedinDark.png";

import EmailLight from "../../assets/icons/emailIconLight.png";
import TelNrLight from "../../assets/icons/phoneIconLight.png";
import LocationLight from "../../assets/icons/locationIconLight.png";
import GithubLight from "../../assets/logotypes/githubLight.png";
import LinkedinLight from "../../assets/logotypes/linkedinLight.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <section className="info_container">
          <div className="location_container">
            <img className="location_image" src={LocationDark} alt="Location" />
            <img
              className="location_image_light"
              src={LocationLight}
              alt="Location"
            />
            <span>Gothenburg</span>
          </div>
          <div className="email_container">
            <img className="email_image" src={EmailDark} alt="Email" />
            <img className="email_image_light" src={EmailLight} alt="Email" />
            <span>Baranbulduk99@gmail.com</span>
          </div>
          <div className="telNr_container">
            <img
              className="telNr_image"
              src={TelNrDark}
              alt="Telephone Number"
            />
            <img
              className="telNr_image_light"
              src={TelNrLight}
              alt="Telephone Number"
            />
            <span>+46 725533234</span>
          </div>
        </section>
        <div className="apps_container">
          <Link to="#">
            <img className="github_image" src={GithubDark} alt="Github" />
          </Link>
          <Link to="#">
            <img
              className="github_image_light"
              src={GithubLight}
              alt="Github"
            />
          </Link>
          <Link to="#">
            <img className="linkedIn_image" src={LinkedinDark} alt="Linkedin" />
          </Link>
          <Link to="#">
            <img
              className="linkedIn_image_light"
              src={LinkedinLight}
              alt="Linkedin"
            />
          </Link>
        </div>
        <p className="copyright">@COPYRIGHT {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
