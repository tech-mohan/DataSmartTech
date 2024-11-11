import React from "react";
import "./About.css";
import about from "../assets/about-logo.png";

export default function AboutUs() {
  const colors = ["yellowgreen", "skyblue", "#CC99FF", "lightpink"];
  let index = 0;
  setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 3000);
  return (
    <div className="container-fluid about-page">
      <h1 className="about-heading">About Us</h1>

      <div className="row about">
        <div className="col-lg-6 col-md-12 col-sm-12 left-about">
          <img src={about} alt="" className="about-logo" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 right-about">
          <p className="about-ctnt">
            We are building relationship with both of our Clients and
            Consultants Since Year 2000. In order to bring them together in
            highly efficient way.Our Research and Development departments
            consist of the Software experts from various fields working smart
            with more Innovative ideas and business logic to bring the best
            software solution to the IT field. "XecuteSmart" is acting as a
            perfect catalyst in a fast-moving IT industry. "XecuteSmart" has a
            mark in the Global IT Market. We are taking up Assignment from
            various Domestic and Global concern, getting it finished as per the
            customer's expectation and their Excellent International Quality
            Standards in time.
          </p>
          <h6 className="social">
            To know more about us please visit our social media accounts
          </h6>
          <span className="icons">
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
            </a>
          </span>
        </div>
      </div>
      <div className=" row team-members">
        <div className="col-lg-6 col-md-12 col-sm-12 team-left"></div>
        <div className="col-lg-6 col-md-12 col-sm-12 team-right"></div>
      </div>
    </div>
  );
}
