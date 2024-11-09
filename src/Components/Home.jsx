import React from "react";
import "./Home.css";
import logo from "../assets/home-logo.png";

export default function Home() {
  const colors = ["yellowgreen", "skyblue", "#CC99FF", "lightpink"];
  let index = 0;
  setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 3000);

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
          </div>
        </div>
        <div className="col-lg-6 col-md-12 right-home">
          <img className="home-logo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
