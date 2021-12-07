import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Navbar = () => {
  document.title = "Audley";
  return (
    <header className="navbar">
      <div className="navbar_title navbar_item">LOGO</div>
      <div className="navbar_item">Home</div>
      <div className="navbar_item"><a href="#about">About</a></div>
      <div className="navbar_item"><a href="#services">Services</a></div>
      <div className="navbar_item">Blog</div>
      <div className="navbar_item">Contact</div>

      {/*In PROGRESS FOLLOW BUTTON*/}

      <div className="navbar_item followbtn">
        Follow Us
        <div className="follow_handles">
          <div className="follow_item">
            <InstagramIcon className="ico" /> Instagram
          </div>
          <div className="follow_item">
            <FacebookIcon className="ico" /> Facebook
          </div>
          <div className="follow_item">
            <LinkedInIcon className="ico" /> LinkedIn
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
