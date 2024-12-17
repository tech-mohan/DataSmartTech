import React, { useEffect, useState } from "react";
import "./Home.css";
import logo from "../assets/home-logo.png";

export default function Home() {
  const [dummy, setDummy] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-12 left-home">
          <h2>Welcome to Data Smart Tech</h2>
          <br />
          <p>
            Data Smart Technologies is the go-to digital marketing agency that
            delivers results. From local SEO and social media strategies to
            high-converting PPC campaigns, we help you connect with your target
            audience, boost your online presence, and ultimately drive more
            sales. Based in the vibrant town of Theni, we leverage the power of
            technology and innovation to deliver impactful branding strategies
            tailored to your unique business needs.
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
