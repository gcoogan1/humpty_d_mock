import React from "react";
import Icon from "../../assets/Icon.png";
import RollingStone from "../../assets/RollingStone.png";
import Zagat from "../../assets/Zagat.png";
import Philly from '../../assets/Philly.png';
import Fb from '../../assets/facebook.svg';
import Yelp from '../../assets/yelp.svg';
import Google from '../../assets/brands-and-logotypes.svg';
import Groupon from '../../assets/groupon.svg';
import FourSquare from '../../assets/foursquare.svg';
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
            After a night out at the bar, our owners put together a late-night
            snack of rotisserie chicken fried in won’t ton wrappers — and it was
            a hit!
          </p>
          <p>
            {" "}
            That was a while ago, and after a lot more experimenting and some
            hard work, we’re proud to say we’ve been in business serving our
            unique dumpling dishes for about four years now.
          </p>
          <p>
            {" "}
            From Buffalo chicken to cheese steak, our dumplings come in flavors
            that are anything but run-of-the-mill, and we’ve become pretty
            popular here in Glenside. We’re looking forward to expanding in the
            future and sharing our food with even more people.
          </p>
        </div>
        <div className="about_block text two">
          <p>
            After a night out at the bar, our owners put together a late-night
            snack of rotisserie chicken fried in won’t ton wrappers — and it was
            a hit!
          </p>
          <p>
            {" "}
            That was a while ago, and after a lot more experimenting and some
            hard work, we’re proud to say we’ve been in business serving our
            unique dumpling dishes for about four years now.
          </p>
          <p>
            {" "}
            From Buffalo chicken to cheese steak, our dumplings come in flavors
            that are anything but run-of-the-mill, and we’ve become pretty
            popular here in Glenside. We’re looking forward to expanding in the
            future and sharing our food with even more people.
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
            <div className="social_media_rating">
               <div className="social_icon fb"><img src={Fb} alt="facebook" /></div> 
                <p className="social_rating">4.9 / 5</p>
                <p className="social_name">Facebook</p>
            </div>
            <div className="social_media_rating">
               <div className="social_icon yelp"><img src={Yelp} alt="yelp" /></div> 
                <p className="social_rating">4 / 5</p>
                <p className="social_name">Yelp</p>
            </div>
            <div className="social_media_rating">
               <div className="social_icon google"><img src={Google} alt="google" /></div> 
                <p className="social_rating">4.9 / 5</p>
                <p className="social_name">Facebook</p>
            </div>
            <div className="social_media_rating">
               <div className="social_icon groupon"><img src={Groupon} alt="groupon" /></div> 
                <p className="social_rating">4.6 / 5</p>
                <p className="social_name">Facebook</p>
            </div>
            <div className="social_media_rating">
               <div className="social_icon foursq"><img src={FourSquare} alt="foursquare" /></div> 
                <p className="social_rating">4.9 / 5</p>
                <p className="social_name">Facebook</p>
            </div>
        </div>
    </div>
  );
}

export default About;
