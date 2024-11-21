import "./navbar.css";
import React, { useEffect, useState } from "react";
import mainLogo from "../assets/Black_DST.png";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // Navigate to the services page
  const navigate = useNavigate();
  const handleComponentClick = (componentID) => {
    navigate("/Services", { state: { scrollTo: componentID } });
    setDropdownVisible(false);
  };
  const handleDropdown = () => {
    setDropdownVisible(true);
  };
  return (
    <nav className="navbar navbar-expand-lg nav">
      <div className="container">
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
          <ul className="navbar-nav">
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
              <a
                href="Services"
                className="nav-link"
                onMouseEnter={handleDropdown}
              >
                Services{" "}
                <a id="service-list" href="#">
                  <i className="bi bi-chevron-right"></i>
                </a>
              </a>
              {/* Sub menu */}
              {dropdownVisible && (
                <ul id="submenu" className="sub-nav">
                  <li className="sub-item" id="sub-services">
                    <a href="#" className="sub-link">
                      Design N Development
                      <a id="service-list" href="#">
                        <i className="bi bi-chevron-right"></i>
                      </a>
                    </a>
                    <ul className="add-sub-menu" id="add-sub-menu">
                      <li className="add-sub-item">
                        <Link to="As400" spy={true} smooth={true} delay={0}>
                          <a
                            href=""
                            className="add-sub-link"
                            onClick={() => handleComponentClick("As400")}
                          >
                            AS/400 Apps
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link
                          to="Coldfusion"
                          spy={true}
                          smooth={true}
                          delay={0}
                        >
                          <a
                            href=""
                            className="add-sub-link"
                            onClick={() => handleComponentClick("Coldfusion")}
                          >
                            Cold Fusion, CFML
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="Datascience" spy={true} smooth={true}>
                          <a
                            href="Services"
                            className="add-sub-link"
                            onClick={() => handleComponentClick("Datascience")}
                          >
                            Data Science, AI ML DL NLP PYTHON
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="Marketing" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Marketing")}
                            className="add-sub-link"
                          >
                            Digital N Social Media Marketing
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item" id="add-sub-erp">
                        <Link to="Oracle" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Oracle")}
                            className="add-sub-link"
                          >
                            Enterprise Resource Planning (ERP)
                          </a>
                        </Link>
                        <li className="sub-erp">
                          <Link to="Oracle" spy={true} smooth={true}>
                            <a
                              href="Services"
                              onClick={() => handleComponentClick("Oracle")}
                              className="add-sub-link"
                            >
                              Oracle Apps All Modules
                            </a>
                          </Link>
                          <br />
                          <Link to="SAP" spy={true} smooth={true}>
                            <a
                              href="Services"
                              onClick={() => handleComponentClick("SAP")}
                              className="add-sub-link"
                            >
                              SAP All Modules
                            </a>
                          </Link>
                        </li>
                      </li>
                      <li className="add-sub-item">
                        <Link to="Fullstack" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Fullstack")}
                            className="add-sub-link"
                          >
                            Full Stack Java, JS, Hibernate, JSP
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="Golang" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Golang")}
                            className="add-sub-link"
                          >
                            GO Lang
                          </a>
                        </Link>
                      </li>

                      <li className="add-sub-item">
                        <Link to="Mainframe" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Mainframe")}
                            className="add-sub-link"
                          >
                            Mainframe Apps Enhancement
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="MERN" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("MERN")}
                            className="add-sub-link"
                          >
                            MEAN, MERN, MEEN, MEVN Stacks
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="2D" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("2D")}
                            className="add-sub-link"
                          >
                            Robotics 2D
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="RPA" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("RPA")}
                            className="add-sub-link"
                          >
                            Robotics Process Automation RPA
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="Sales" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Sales")}
                            className="add-sub-link"
                          >
                            Sales Force, CRM
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="Studio" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Studio")}
                            className="add-sub-link"
                          >
                            Statistical Apps, R Studio
                          </a>
                        </Link>
                      </li>
                      <li className="add-sub-item">
                        <Link to="Web" spy={true} smooth={true}>
                          <a
                            href="Services"
                            onClick={() => handleComponentClick("Web")}
                            className="add-sub-link"
                          >
                            Web Apps All Kind
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="sub-item" id="sub-services">
                    <a href="#" className="sub-link">
                      Testing
                    </a>
                  </li>
                </ul>
              )}
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
