import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Hero from "../../assets/Hero.png";
import Arrow from "../../assets/Icon_Scroll.svg";
import MobileNav from '../MobileNavBar/MobileNav/MobileNav';
import SmallLogo from '../../assets/Small_logo.png';
import Hamburger from "../MobileNavBar/Hamburger/Hamburger";
import "./Landing.css";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";
import Location from "../Location/Location";
import About from "../About/About";
import Footer from "../Footer/Footer";

const MobileMenu = styled.div`
  visibility: ${props => (props.opened ? "visibile" : "hidden")};
  width: 100%;
  background-color: white;
  height: 70px;
  -webkit-box-shadow: 0px 3px 3px #a0a0a0;
  -moz-box-shadow: 0px 3px 3px #a0a0a0;
  box-shadow: 0px 3px 3px #a0a0a0;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

function Landing() {
  const [isOpened, setIsOpened] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [position, setPosition] = useState();

  //Calc Scroll
  let listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    setPosition(scrolled);
  };

  //Grab Current Scroll Position
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    //  console.log(position)
    if (position > 0.06218425645264995) {
      setIsOpened(true);
      window.removeEventListener("scroll", listenToScroll);
    } else {
      setIsOpened(false);
      setMobileMenu(false);
    }
  }, [listenToScroll]);

  //Show Mobile Navbar On Scroll Position
  let content;

  if (isOpened) {
    content = (
      <MobileMenu opened id="show" className="mobile_nav">
        <img src={SmallLogo} alt="humpty" />
        <Hamburger open={mobileMenu} clicked={() => setMobileMenu(!mobileMenu)}/>
        <MobileNav open={mobileMenu}> 
        <ul className="mobile_list_wrapper">
            <Link
                activeClass="active"
                to="menu"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setMobileMenu(false)}
              >
                <li>Menu</li>
              </Link>
            <Link
                activeClass="active"
                to="location"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setMobileMenu(false)}
              >
                <li>Locations</li>
              </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setMobileMenu(false)}
              >
                <li>Our Story</li>
              </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setMobileMenu(false)}
              >
                <li>Contact Us</li>
              </Link>
                
            </ul>
        </MobileNav>
      </MobileMenu>
    );
  } else {
    content = null;
  }

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
      {content}

      <Menu />
      <Location />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
