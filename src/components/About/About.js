import React from "react";
import Icon from "../../assets/Icon.png";
import RollingStone from "../../assets/RollingStone.png";
import Zagat from "../../assets/Zagat.png";
import Philly from "../../assets/Philly.png";
import Fb from "../../assets/facebook.svg";
import Yelp from "../../assets/yelp.svg";
import Google from "../../assets/google-icon.svg";
import Groupon from "../../assets/groupon.svg";
import FourSquare from "../../assets/foursquare.svg";
import "./About.css";

function About() {
  return (
    <div className="about_wrapper" name="about">
      <div className="about_header">
        <img className="chef" src={Icon} alt="icon" />
        <div className="about_title_wrapper">
          <h1 className="about_border ">Our Story</h1>
        </div>
      </div>
      <div className="about_center">
        <div className="about_block imgOne">
          <div className="stone">
            <h4 className="lighten">Awarded by</h4>
            <img src={RollingStone} alt="Rollingstone" />
            <h4>“Best thing we ate at Bonnaroo 2016”</h4>
          </div>
          <div className="zagat">
            <h4 className="lighten">Rated by</h4>
            <img src={Zagat} alt="Zagat" />
          </div>
        </div>
        <div className="about_block text">
          <p>
            We like good food, ingenuity, and instant gratification. That’s how
            a late-night search for munchies in 2014 lead us down a rabbit hole
            of wonton wrappers and leftovers to birth our first dumpling.
          </p>
          <p>
            {" "}
            We pride ourselves on being creative and we believe the dumpling is
            the perfect vehicle to channel that energy. We’ve come a long way
            since that first kitchen raid. We’ve moved on to fresher, higher
            quality food and developed our own signature dough recipe. But, we
            always try to embody that original hunger-filled alchemy that set us
            on this amazing path.
          </p>
          <p>
            {" "}
            Whether you’re ordering from our food trucks or joining us for a
            sit-down at a store, we strive to deliver friendly service that puts
            food in your belly as fast as possible while maintaining our
            standards of quality.
          </p>
        </div>
        <div className="about_block text two">
          <p>
            We are always looking for the hardest working and most committed
            people possible. If you have a great attitude and desire to improve,
            we will grow together.
          </p>
          <p>
            {" "}
            To work at Humpty’s, our people need to have a quality-focused
            mentality: you must be able to quickly assemble and cook
            ingredients, ensure accuracy & “make it purdy”. We want to share in
            our desire to bring an excellent experience to our customers.
          </p>
          <p>
            {" "}
            We’ve had the good fortune to serve our dumplings all over the
            country but we’re proud to say we’re Philly local. Harnessing the
            grit and dedication (and iconic flavors) that flow through this city
            is a large part of what has made us successful. We strive to show
            that appreciation through innovative, delicious food and a flexible
            menu.
          </p>
        </div>
        <div className="about_block imgTwo">
          <div className="philly">
            <h4 className="lighten">Rated by</h4>
            <img src={Philly} alt="Philly" />
            <h4>“Best Dumplings to Go”</h4>
          </div>
        </div>
      </div>
      <div className="social_media_wrapper">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/HumptysDumplings/"
        >
          {" "}
          <div className="social_media_rating">
            <div className="social_icon fb">
              <img src={Fb} alt="facebook" />
            </div>
            <p className="social_rating">4.9 / 5</p>
            <p className="social_name">Facebook</p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.yelp.com/biz/humptys-dumplings-glenside-5"
        >
          {" "}
          <div className="social_media_rating">
            <div className="social_icon yelp">
              <img src={Yelp} alt="yelp" />
            </div>
            <p className="social_rating">4 / 5</p>
            <p className="social_name">Yelp</p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/search?sxsrf=ALeKk03EejxeWBUipNPhBGbwxdAMTU3bQA%3A1600137353924&ei=iShgX6D9N7WJytMP5uu3-A8&q=humpty+dumplings+reviews&oq=humpty+dumplings+reviews&gs_lcp=CgZwc3ktYWIQAzIFCAAQzQIyBQgAEM0CMgUIABDNAjoECCMQJ1D_Jlj_JmCTKWgAcAB4AIABSYgB1wGSAQEzmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjg5cmUkOrrAhW1hHIEHeb1Df8Q4dUDCA0&uact=5"
        >
          <div className="social_media_rating">
            <div className="social_icon google">
              <img src={Google} alt="google" />
            </div>
            <p className="social_rating">4.9 / 5</p>
            <p className="social_name">Google</p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.grubhub.com/restaurant/humptys-dumplings-277-n-keswick-ave-glenside/1739615?classicAffiliateId=%2Fr%2Fw%2F1739615%2F&utm_source=grubcentral.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=1739615"
        >
          {" "}
          <div className="social_media_rating">
            <div className="social_icon groupon">
              <img src={Groupon} alt="groupon" />
            </div>
            <p className="social_rating">4.5 / 5</p>
            <p className="social_name">GrubHub</p>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://foursquare.com/v/humptys-dumplings/55946d0b498eb09835c86c0f"
        >
          <div className="social_media_rating">
            <div className="social_icon foursq">
              <img src={FourSquare} alt="foursquare" />
            </div>
            <p className="social_rating">4.9 / 5</p>
            <p className="social_name">Foursquare</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
