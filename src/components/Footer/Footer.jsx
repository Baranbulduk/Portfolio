import "./Footer.css";
import Email from "../../assests/emailIcon.png";
import TelNr from "../../assests/phoneIcon.png";
import Location from "../../assests/locationIcon.png";
import Github from "../../assests/githubLogo.png";
import Linkedin from "../../assests/linkedinLogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
          <section className="info_container">
            <div className="location_container">
              <img className="location_image" src={Location} alt="Location" />
              <span>Gothenburg</span>
            </div>
            <div className="email_container">
              <img className="email_image" src={Email} alt="Email" />
              <span>Baranbulduk99@gmail.com</span>
            </div>
            <div className="telNr_container">
              <img className="telNr_image" src={TelNr} alt="Telephone Number" />
              <span>+46 725533234</span>
            </div>
          </section>
          <div className="apps_container">
            <img className="github_image" src={Github} alt="Github" />
            <img className="linkedIn_image" src={Linkedin} alt="Linkedin" />
          </div>
          <p className="copyright">@COPYRIGHT {new Date().getFullYear()}</p>
        </div>
    </footer>
  );
}

export default Footer;
