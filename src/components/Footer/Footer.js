import React from "react";
import Logo from "../../assets/Logo.png";
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
            <div className="find_us_link facebook">
             
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/humptysdumplings/?hl=en"
          >
            {" "}
            <div className="find_us_link instagram">
             
            </div>{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/humptysdumplins?lang=en"
          >
            <div className="find_us_link twitter">
           
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
