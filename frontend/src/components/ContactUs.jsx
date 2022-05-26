import React, { Component } from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./ContactUs.css"

export default class ContactUs extends Component {
  render() {
    return (
      <div className="content-block">
      <p id="contact" className="heading">Get in Touch</p>
      <div className="ContactInfo">
        <div className="CardContact">
          <LocationOnIcon className="icon" fontSize="large" />
          <div className="ContactCard">
            <h3>Location</h3>
            <span>New Delhi, India</span>
          </div>
        </div>
        <div className="CardContact">
          <EmailIcon className="icon" fontSize="large" />
          <div className="ContactCard">
            <h3>Email</h3>
            <span>audleypvt@gmail.com</span>
          </div>
        </div>
        <div className="CardContact">
          <PhoneIcon className="icon" fontSize="large" />
          <div className="ContactCard">
            <h3>Phone No.</h3>
            <span>+91-8010XXXXXX</span>
          </div>
        </div>
        <div className="CardContact">
          <AccessTimeIcon className="icon" fontSize="large" />
          <div className="ContactCard">
            <h3>Timings</h3>
            <span>9:00AM to 5:00PM</span>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
