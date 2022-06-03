import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { HashLink as Link } from 'react-router-hash-link';
import "./navbar.css"

const Navbar = () => {
  document.title = "Audley";
  const showProfile = localStorage.getItem('user_id') != null ? true : false;
  return (
    <nav className="navbar">
      <div className="navbar_title navbar_item">LOGO</div>
      <div className="navbar_item">
        <Link smooth to="/">Home</Link>
      </div>
      <div className="navbar_item">
        <Link smooth to="/#about"> About</Link>
      </div>
      <div className="navbar_item">
        <Link smooth to="/#services">Services</Link>
      </div>
      <div className="navbar_item">
        <Link smooth to="/jobs">Jobs</Link>
      </div>
      <div className="navbar_item">
        <Link smooth to="/blogs">Blog</Link>
      </div>
      <div className="navbar_item"><Link smooth to="/#contact">Contact</Link></div>

      {/*In PROGRESS FOLLOW BUTTON*/}

      <div className="navbar_item followbtn">
        Follow Us
        <div className="follow_handles">
          <div className="follow_item">
            <a target="blank" href="https://www.instagram.com" className="follow-links"><InstagramIcon /> Instagram
            </a></div>
          <div className="follow_item">
            <a target="blank" href="https://www.facebook.com" className="follow-links"> <FacebookIcon /> Facebook
            </a>
          </div>
          <div className="follow_item">
            <a target="blank" href="https://www.linkedin.com" className="follow-links"><LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      {showProfile && (<div className="navbar_item">
        <Link smooth to="/profile">Profile</Link>
      </div>)}
    </nav>
  );
};
export default Navbar;
