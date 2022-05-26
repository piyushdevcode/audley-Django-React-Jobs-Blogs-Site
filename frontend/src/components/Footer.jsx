import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { HashLink as Link } from "react-router-hash-link";
const Footer=()=>{
  
        return(
          <>
        <footer className="footer">
          <hr />
        <ul className="social-icon">
          <li className="social-icon__item"><a className="social-icon__link" target="blank" href="https://www.facebook.com">
              <FacebookIcon/>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" target="blank" href="https://www.instagram.com">
             <InstagramIcon/>
            </a></li>
          <li className="social-icon__item"><a className="social-icon__link" target="blank" href="https://www.linkedin.com">
              <LinkedInIcon/>
            </a></li>
        </ul>
        <ul className="menu">
          <li className="menu__item"><Link className="menu__link" smooth to="/#top">Home</Link></li>
          <li className="menu__item"><Link className="menu__link" smooth to="/#about">About</Link></li>
          <li className="menu__item"><Link className="menu__link"smooth to="/#services">Services</Link></li>
          <li className="menu__item"><Link className="menu__link"smooth to="/blogs">Blogs</Link></li>
          <li className="menu__item"><Link className="menu__link"smooth to="/#contact">Contact</Link></li>
    
        </ul>
        <div className="copyright">
        <p>&copy; 2021 Audley Consultants <span className="sep"> | </span>All Rights Reserved</p>
        </div>
      </footer>
          </>

        )
    }

export default Footer;