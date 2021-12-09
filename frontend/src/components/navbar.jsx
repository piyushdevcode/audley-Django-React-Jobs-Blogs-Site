import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {HashLink as Link} from 'react-router-hash-link';
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
        <Link smooth to="/#about"> About</Link>
      </div>
      <div className="navbar_item">
        <Link smooth to="/#services">Services</Link>
      </div>
      <div className="navbar_item">
        <Link smooth to="/blogs">Blog</Link>
      </div>
      <div className="navbar_item">Contact</div>

      {/*In PROGRESS FOLLOW BUTTON*/}

      <div className="navbar_item followbtn">
        Follow Us
        <div className="follow_handles">
          <div className="follow_item">
            <InstagramIcon className="follow-icons" /><a target="blank" href="https://www.instagram.com"> Instagram
          </a></div>
          <div className="follow_item">
            <FacebookIcon className="follow-icons" /> <a target="blank" href="https://www.facebook.com"> Facebook
          </a>
          </div>
          <div className="follow_item">
            <LinkedInIcon className="follow-icons" /> <a target="blank" href="https://www.linkedin.com"> LinkedIn
          </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
