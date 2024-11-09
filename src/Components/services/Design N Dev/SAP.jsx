import React from "react";
import slogo from "D:/DST/data_smart_tech/src/assets/sap.png";
import "../Services.css";
import { Link } from "react-scroll";

export default function SAP() {
  return (
    <div className="row service-page" id="SAP">
      <h3 className="sub-heading">SAP All Modules</h3>
      <div className="col-lg-6 col-md-12 col-sm-12 service-left">
        <p className="service-content">
          Xecutesmart provides state of the art web solutions including
          corporate websites, requirement specific web-based applications,
          ecommerce Store Management and Flash Based Web Solutions in a timely
          manner and at very competitive prices. We integrate most efficient
          technology components to make your website paramount in its class. Our
          experience has given us an edge, and we will effectively bring your
          idea to life on the web world. Moreover, our constant and improved
          interaction with our client, coupled with extensive testing and
          performance measurement criteria leads to faster development and
          delivery. Xecutesmart believes in Fix Price Shop and provides most
          affordable rates in comparison to any of its competitors.
        </p>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <img src={slogo} alt="" className="service-logo" />
      </div>
      {/* <Link to="Web" spy={true} smooth={true}>
        <button className="bottom">^</button>
      </Link>
      <Link to="As400" spy={true} smooth={true}>
        <button className="top">^</button>
      </Link> */}
    </div>
  );
}
