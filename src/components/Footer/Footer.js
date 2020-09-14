import React from "react";
import Logo from "../../assets/Logo.png";
import Fb from "../../assets/facebook.svg";
import InstaTwo from "../../assets/insta2.png";
import Twitter from "../../assets/twitter.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="big_logo">
        <img src={Logo} alt="humpty_dumplings" />
      </div>
      <div className="find_us">
        <p>Find us on Social</p>
        <div className="find_us_links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/HumptysDumplings/"
          >
            <div className="find_us_link">
              <img src={Fb} alt="fb" />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/humptysdumplings/?hl=en"
          >
            {" "}
            <div className="find_us_link">
              <img
                src={InstaTwo}
                alt="in"
                style={{ height: "16px", width: "16px" }}
              />
            </div>{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/humptysdumplins?lang=en"
          >
            <div className="find_us_link">
              <img src={Twitter} alt="tw" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
