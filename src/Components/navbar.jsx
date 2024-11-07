import "./navbar.css";
import React from "react";
import mainLogo from "../assets/main-logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={mainLogo} className="main-logo" alt="Data smart tech" />
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a href="/" className="nav-link ">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="About_Us" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item " id="services">
              <a href="Services" className="nav-link">
                Services
              </a>
              {/* Sub menu */}
              <ul id="submenu" className="sub-nav">
                <li className="sub-item" id="sub-services">
                  <a href="#" className="sub-link">
                    Design N Development
                  </a>
                  <ul className="add-sub-menu" id="add-sub-menu">
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        AS/400 Apps
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Cold Fusion, CFML
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Data Science, AI ML DL NLP PYTHON
                      </a>
                    </li>
                    <li className="add-sub-item" id="add-sub-erp">
                      <a href="" className="add-sub-link">
                        Enterprise Resource Planning (ERP)
                        <li className="sub-erp">
                          {" "}
                          <a href="#"> Oracle Apps All Modules</a>
                          <br />
                          <a href="">SAP All Modules</a>
                        </li>
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Full Stack Java, JS, Hibernate
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        GO Lang
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Mainframe Apps Enhancement
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        MEAN, MERN, MEEN, MEVN Stacks
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Mobile Apps
                      </a>
                    </li>

                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Robotics 2D
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Robotics Process Automation RPA
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Sales Force, CRM
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Statistical Apps, R Studio
                      </a>
                    </li>
                    <li className="add-sub-item">
                      <a href="" className="add-sub-link">
                        Web Apps All Kind
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sub-item" id="sub-services">
                  <a href="#" className="sub-link">
                    Marketing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <a href="Testimonials" className="nav-link">
                Testimonials
              </a>
            </li>
            <li className="nav-item ">
              <a href="Contact_Us" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
