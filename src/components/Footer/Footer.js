import React from 'react';
import Logo from '../../assets/Logo.png';
import Fb from '../../assets/facebook.svg';
import InstaTwo from '../../assets/insta2.png';
import Twitter from '../../assets/twitter.png';
import './Footer.css'

function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="big_logo">
                <img src={Logo} alt="humpty_dumplings"/>
            </div>
            <div className="find_us">
                <p>Find us on Social</p>
                <div className="find_us_links">
                    <div className="find_us_link">
                        <img src={Fb} alt="fb"/>
                    </div>
                    <div className="find_us_link">
                        <img src={InstaTwo} alt="in" style={{height: "16px", width:"16px"}}/>
                    </div>
                    <div className="find_us_link">
                        <img src={Twitter} alt="tw"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
