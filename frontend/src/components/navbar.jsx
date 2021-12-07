import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link} from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {
  document.title = "Audley";
  return (
    <nav className="navbar">
      <div className="navbar_title navbar_item">LOGO</div>
      <div className="navbar_item">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar_item">
        <a href="#about">About</a>
      </div>
      <div className="navbar_item">
        <a href="#services">Services</a>
      </div>
      <div className="navbar_item">
        <Link  to="/blogs">Blog</Link>
      </div>
      <div className="navbar_item">Contact</div>

      {/*In PROGRESS FOLLOW BUTTON*/}

      <div className="navbar_item followbtn">
        Follow Us
        <div className="follow_handles">
          <div className="follow_item">
            <InstagramIcon id="follow-icons" /><a href="www.instagram.com"> Instagram
          </a></div>
          <div className="follow_item">
            <FacebookIcon id="follow-icons" /> Facebook
          </div>
          <div className="follow_item">
            <LinkedInIcon id="follow-icons" /> LinkedIn
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
