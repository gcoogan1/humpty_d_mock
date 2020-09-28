import React from "react";
import Icon from "../../assets/Icon.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_wrapper" name="info">
      <div className="contact_header">
        <img className="chef" src={Icon} alt="icon" />
        <div className="contact_title_wrapper">
          <h1 className="contact_border ">Contact</h1>
        </div>
      </div>
      <div className="form_wrapper">
        <form name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
          <p>Name</p>
          <input required type="text" name="name"  />
          <p>Email</p>
          <input required type="text" name="email" />
          <p>Message</p>
          <textarea required name="message" />
          <button type="submit" className="send">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
