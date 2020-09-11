import React from "react";
import { Link } from "react-scroll";
import Hero from "../../assets/Hero.png";
import Arrow from "../../assets/down-arrow.png";
import "./Landing.css";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import Location from "../Location/Location";
import About from "../About/About";
import Footer from '../Footer/Footer';

function Landing() {
  return (
    <>
      <div className="header_wrapper">
        <div className="header">
          <div className="top">
            <img src={Hero} alt="Logo" />
            <ul className="navbar">
              <Link
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <li>Menu</li>
              </Link>

              <span>|</span>
              <Link
                activeClass="active"
                to="location"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {" "}
                <li>Locations</li>{" "}
              </Link>
              <span>|</span>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {" "}
                <li>Our Story</li>
              </Link>
              <span>|</span>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {" "}
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
        
        </div>
        <Link
            activeClass="active"
            to="menu"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <button className="arrow">
              <img src={Arrow} alt="v" />
            </button>
          </Link>
      </div>
      <Menu />
      <Location />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
