import React from "react";
import "./Home.css";
import logo from "../assets/home-logo.png";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 left-home">
          <h2>Welcome to Data Smart Tech</h2>
          <br />
          <p>
            We are building relationship with both of our Clients and
            Consultants Since Year 2000. In order to bring them together in
            highly efficient way. Our Research and Development Departments
            consist of the Software experts from various fields working smart
            with More Innovative ideas and business logic to bring the best
            software solution to the IT field.
          </p>
          <br />
          <h4>Our social media platforms</h4>
          <br />
          <div className="icons">
            <a
              target="_blank"
              href="https://www.instagram.com/data_smart_technologies?igsh=eTJyMHltd3ppd214"
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61560699545350&mibextid=ZbWKwL"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://m.youtube.com/@DataSmart_Technologies?fbclid=PAY2xjawGlIpFleHRuA2FlbQIxMAABpunv1wKAbBVgcvobzj8EQ0yrA72ggj7FUfllaB1kcURNtb46l-RQ_Zod4Q_aem_MIAgrjpbPjKyilQTLaFhFQ"
            >
              <i class="bi bi-youtube"></i>
            </a>
            <a
              target="_blank"
              href="https://x.com/Datasmart_Tech?t=Tq5bp5fbwROFAq951P4u_Q&s=09"
            >
              <i class="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 right-home">
          <img className="home-logo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
