import React from "react";
import "./Services.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Link } from "react-scroll";
import As400 from "./Design N Dev/As400";
import Coldfusion from "./Design N Dev/Coldfusion";
import Datascience from "./Design N Dev/Datascience";
import Marketing from "./Design N Dev/Marketing";
import Oracle from "./Design N Dev/Oracle";
import SAP from "./Design N Dev/SAP";
import Fullstack from "./Design N Dev/Fullstack";
import Golang from "./Design N Dev/Golang";
import Mainframe from "./Design N Dev/Mainframe";
import MERN from "./Design N Dev/Mern";
import RoboticsTwoD from "./Design N Dev/2D";
import RPA from "./Design N Dev/RPA";
import Sales from "./Design N Dev/Sales";
import Studio from "./Design N Dev/Studio";
import Web from "./Design N Dev/Web";

export default function Services() {
  const bgcolor = ["darkcyan", "#CC99FF", "mediumseagreen", "lightpink"];
  let index = 0;

  setInterval(() => {
    document.body.style.backgroundColor = bgcolor[index];
    index = (index + 1) % bgcolor.length;
  }, 3000);
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);
  return (
    <div className="container services">
      {/* <div className="page-top"> */}
      <Link to="As400" spy={true} smooth={true}>
        <button className="btn-primary btn up-btn">
          <i class="bi bi-chevron-double-up"></i>
        </button>
      </Link>

      <h1 className="service-heading">Our Services</h1>
      {/* </div> */}
      <As400 />
      <Coldfusion />
      <Datascience />
      <Marketing />
      <Oracle />
      <SAP />
      <Fullstack />
      <Golang />
      <Mainframe />
      <MERN />
      <RoboticsTwoD />
      <RPA />
      <Sales />
      <Studio />
      <Web />
      <Link to="Web" spy={true} smooth={true}>
        <button className="btn-success btn down-btn">
          <i class="bi bi-chevron-double-down"></i>
        </button>
      </Link>
      {/* <div className="icons service-icons">
        <a href="#">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i class="bi bi-youtube"></i>
        </a>
        <a href="#">
          <i class="bi bi-geo-alt"></i>
        </a> */}
      {/* </div> */}
    </div>
  );
}
