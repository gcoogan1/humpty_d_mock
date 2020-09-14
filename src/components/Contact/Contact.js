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
      <form>
      <p>Name:</p>
        <input
          type="text"
        />
      <p>Email</p>
        <input
          type="text"
        />
      <p>Subject</p>
        <select
          className="classic"
        />
      <p>Message</p>
        <textarea />
        <button className="send">Send</button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
