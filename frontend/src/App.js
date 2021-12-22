import "./App.css";
import { ReactComponent as BgEle } from "./img/BG.svg";
import { ReactComponent as BgColored } from "./img/BGcol.svg";
import { ReactComponent as Recicon } from "./img/recruitIcon.svg";
import { ReactComponent as Writingicon } from "./img/writingIcon.svg";
import { ReactComponent as Bulbicon } from "./img/bulbIcon.svg";
import Services from "./components/services";
import OurPartners from "./components/Partners";
import CtaButtons from "./components/ctabutton";
import ContactUs from "./components/ContactUs";
import { HashLink as Link } from "react-router-hash-link";
function App() {
  return (
    <div className="App">
      <BgEle className="bg" />

      <div className="pageBox">
        <div className="c-info">
          <div className="cname">Audley Consultants</div>
          <div className="cname tline">Audley Consultants</div>
        </div>
      <CtaButtons/>
      </div>

      <div className="pageBox p2">
        <div className="content-block">
          <div id="about" className="heading">
            <p align="center">
              ABOUT US
              <Link to="/#about">
                <span className="downarrow">
                <span className="chevron"></span>
                <span className="chevron"></span>
              </span>
                </Link>
              </p> 
              
          </div>

          <div className="info-block">
            Audley Consultants (OPC) PVT LTD has been immensely successful in
            creating a global network of a highly adept intelligent workforce
            that can help a company achieve its mission-critical projects and
            goals . Keeping pace with projects and being on the lookout for
            extremely talented individuals has become ever more challenging.
            Here is where Your growth is our goal!{" "}
          </div>
        </div>
      </div>

      <div className="pageBox p3">
        <div id="services" className="content-block">
          <p className="heading" align="center">
            OUR SERVICES
          </p>
          <div className="info-block">
            Audley Consultants has been immensely successful in creating a
            global network by providing different kind of services like
            <div className="all-services">
              {/* 1st service */}
              <div className="services">
                <Recicon className="service-icon" />
                <div className="service-title">Recruitment Services</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* 2nd service */}
              <div className="services">
                <Writingicon className="service-icon" />
                <div className="service-title">Resume Writing</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* 3rd service */}
              <div className="services">
                <Bulbicon className="service-icon" />
                <div className="service-title">Career Counseling</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* 4th service */}
              <div className="services">
                <Recicon className="service-icon" />
                <div className="service-title">Recruitment Services</div>
                <div className="service-subtitle">Permanent/Contractual</div>
              </div>
              {/* <Services icon="yp" title="Job" subtitle="Less" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="pageBox p4">
        <OurPartners />
        </div>
        <div className="pageBox p5">

        <ContactUs/>
      </div>
    </div>
  );
}

export default App;
