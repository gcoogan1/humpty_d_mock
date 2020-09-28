import React from "react";
import Icon from "../../assets/Icon.png";
import RollingStone from "../../assets/RollingStone.png";
import Zagat from "../../assets/Zagat.png";
import Philly from '../../assets/Philly.png';
import Fb from '../../assets/facebook.svg';
import Yelp from '../../assets/yelp.svg';
import Google from '../../assets/google-icon.svg';
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
           <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/HumptysDumplings/"> <div className="social_media_rating">
               <div className="social_icon fb"><img src={Fb} alt="facebook" /></div> 
                <p className="social_rating">4.9 / 5</p>
                <p className="social_name">Facebook</p>
            </div></a>
           <a target="_blank" rel="noopener noreferrer" href="https://www.yelp.com/biz/humptys-dumplings-glenside-5"> <div className="social_media_rating">
               <div className="social_icon yelp"><img src={Yelp} alt="yelp" /></div> 
                <p className="social_rating">4 / 5</p>
                <p className="social_name">Yelp</p>
            </div></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?sxsrf=ALeKk03EejxeWBUipNPhBGbwxdAMTU3bQA%3A1600137353924&ei=iShgX6D9N7WJytMP5uu3-A8&q=humpty+dumplings+reviews&oq=humpty+dumplings+reviews&gs_lcp=CgZwc3ktYWIQAzIFCAAQzQIyBQgAEM0CMgUIABDNAjoECCMQJ1D_Jlj_JmCTKWgAcAB4AIABSYgB1wGSAQEzmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjg5cmUkOrrAhW1hHIEHeb1Df8Q4dUDCA0&uact=5"><div className="social_media_rating">
               <div className="social_icon google"><img src={Google} alt="google" /></div> 
                <p className="social_rating">4.9 / 5</p>
                <p className="social_name">Google</p>
            </div></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.grubhub.com/restaurant/humptys-dumplings-277-n-keswick-ave-glenside/1739615?classicAffiliateId=%2Fr%2Fw%2F1739615%2F&utm_source=grubcentral.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=1739615">  <div className="social_media_rating">
               <div className="social_icon groupon"><img src={Groupon} alt="groupon" /></div> 
                <p className="social_rating">4.5 / 5</p>
                <p className="social_name">GrubHub</p>
            </div></a>
            <a target="_blank" rel="noopener noreferrer" href="https://foursquare.com/v/humptys-dumplings/55946d0b498eb09835c86c0f"><div className="social_media_rating">
               <div className="social_icon foursq"><img src={FourSquare} alt="foursquare" /></div> 
                <p className="social_rating">4.9 / 5</p>
                <p className="social_name">Foursquare</p>
            </div></a> 
        </div>
    </div>
  );
}

export default About;
