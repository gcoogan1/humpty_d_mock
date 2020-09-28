import React from "react";
import Icon from "../../assets/Icon.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_wrapper" name="contact">
      <div className="contact_header">
        <img className="chef" src={Icon} alt="icon" />
        <div className="contact_title_wrapper">
          <h1 className="contact_border ">Contact</h1>
        </div>
      </div>
      <div className="form_wrapper">
        <form name="contact" method="POST" netlify>
          <p>Name</p>
          <input type="text" name="name"  />
          <p>Email</p>
          <input type="text" name="email" />
          <p>Subject</p>
          <select className="classic" name="select">
            <option value="0">General Info</option>
            <option value="1">Catering</option>
            <option value="2">Food Truck</option>
          </select>
          <p>Message</p>
          <textarea name="message" />
          <button type="submit" className="send">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
