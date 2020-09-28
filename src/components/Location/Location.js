import React from "react";
import Icon from "../../assets/Icon.png";
import Dash from "../../assets/DoorDash_Logo.svg";
import "./Location.css";

//TODO: ADD UBER EATS BTN TO FISHTOWN --when active
//<button className="order"> Order online with <br></br>
//<img src={} alt="UberEats" />
//</button>

function Locations() {
  return (
    <div className="location_wrapper" name="location">
      <div className="location_header">
        <img className="chef" src={Icon} alt="icon" />
        <div className="location_title_wrapper">
          <h1 className="location_border ">Locations</h1>
        </div>
      </div>
      <div className="location_cards">
        <div className="location_card">
          <div className="location_card_center">
            <h2>Keswick Village</h2>
            <div className="location_card_info">
              <div className="location_card_info_display">
                <div className="left">
                  <p>Address</p>
                </div>
                <div className="right">
                  {" "}
                  <p>277 North Keswick Avenue, Glenside PA 19038</p>
                </div>
              </div>
              <div className="location_card_info_display">
                <div className="left">
                  <p>Phone</p>
                </div>
                <div className="right">
                  {" "}
                  <p>(215) 935-6180</p>
                </div>
              </div>
              <div className="location_card_info_display">
                <div className="left">
                  <p>Hours</p>
                </div>
                <div className="right">
                  {" "}
                  <p>
                    Mon to Thur: <span className="bold">11am - 9pm </span> Fri&
                    Sat: <span className="bold">11am - 11pm</span> Sunday:{" "}
                    <span className="bold">12pm - 9pm</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="location_card_btn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.grubhub.com/restaurant/humptys-dumplings-277-n-keswick-ave-glenside/1739615?classicAffiliateId=%2Fr%2Fw%2F1739615%2F&utm_source=grubcentral.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=1739615"
              >
                <button className="order">
                  Order online with <br></br> GRUBHUB
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.doordash.com/store/humpty-s-dumplings-glenside-158774/en-US/?utm_medium=website&utm_source=partner-link"
              >
                {" "}
                <button className="order">
                  Order online with <br></br> <img src={Dash} alt="DOORDASH" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="location_card">
          <div className="location_card_center">
            <h2>Fishtown</h2>
            <div className="location_card_info">
              <div className="location_card_info_display">
                <div className="left">
                  <p>Address</p>
                </div>
                <div className="right">
                  {" "}
                  <p>
                    {" "}
                    <span className="bold">Attached to Saint Lazarus Bar </span>
                    <br></br> 102 West Girard Avenue, Philadelphia PA 19123
                  </p>
                </div>
              </div>
              <div className="location_card_info_display">
                <div className="left">
                  <p>Phone</p>
                </div>
                <div className="right">
                  {" "}
                  <p>(215) 515-3250</p>
                </div>
              </div>
              <div className="location_card_info_display">
                <div className="left">
                  <p>Hours</p>
                </div>
                <div className="right">
                  {" "}
                  <p>
                    Every day: <span className="bold">7pm - 2am</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="location_card_btn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.grubhub.com/restaurant/humptys-dumplings-102-w-girard-ave-philadelphia/1486576?classicAffiliateId=%2Fr%2Fw%2F1486576%2F&utm_source=grubcentral.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=1486576"
              >
                <button className="order">
                  Order online with <br></br> GRUBHUB
                </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
      <div className="farmer_card_wrapper">
        <div className="farmer_card">
          <div className="center">
            <div className="center_text_box">
              <div className="center_text">
                <p>
                  <span className="bold">West Chester Grower’s Market</span>
                </p>
                <p>
                  North Church and West Chestnut Streets Downtown West Chester,
                  PA
                </p>
                <p>
                  Every Saturday:<span className="bold"> 9am - 1pm</span>
                </p>
              </div>
              <div className="center_divide">
                <hr></hr>
              </div>
              <div className="center_text bottom">
                <p>
                  <span className="bold">Lansdale Farmer's Market*</span>
                </p>
                <p>
                645 W 9th St, Lansdale, PA 19446
                </p>
                <p>
                  Every Saturday:<span className="bold"> 9am - 1pm</span>
                </p>
                <p className="limited">
                  *Saturday Jun 6, 2020 - Saturday Nov 21, 2020
                </p>
              </div>
            </div>
          </div>
          <div className="farmer_card_center">
            <div className="farmer_title">
              <h3>Farmers Market</h3>
            </div>
            <div className="pre_order_wrapper">
              <button className="pre_order_btn">Pre-Order</button>
            </div>
          </div>
        </div>
      </div>
      <div className="togo_cards">
        <div className="togo_card">
          <h2>Food Truck</h2>
          <p>Get Information and Quotes</p>
          <div className="togo_btn_wrapper">
            <button className="togo_btn">Send Message</button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/humptysmobile/?hl=en"
            >
              {" "}
              <button className="insta">Follow</button>{" "}
            </a>
          </div>
        </div>
        <div className="togo_card">
          <h2>Catering</h2>
          <p>Build Your Own Packages for 6 to 200 People</p>
          <div className="togo_btn_wrapper">
            <button className="togo_btn">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
