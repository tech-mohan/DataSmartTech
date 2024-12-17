import React, { useState } from "react";
import "./Services.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import service_cover from "../../assets/services/service-bg (3).jpg";

export default function Services() {
  const location = useLocation();
  if (location.state && location.state.scrollTo) {
    scroller.scrollTo(location.state.scrollTo, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  // fetch the data
  const [Data, setData] = useState(null);
  const [Keyfeatures, setKeyfeatures] = useState(null);
  const [isDataloaded, setIsDataloaded] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch method
    // fetch("http://localhost:8000/Services")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .then((data) => setData(data))
    //   .catch((error) => console.error("error:", error));
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/Services");
        const json = await response.json();
        setData(json);
        setIsDataloaded(true);
        setLoading(false);
        console.log(Array.isArray(Data));
        console.log(Data);
      } catch (error) {
        console.log("error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [location.state]);
  return (
    <div className="container-fluid services">
      <div className="row top">
        <div className="col-lg-7 col-md-12 col-sm-12 top-left ">
          <h1 className="service-heading">What we do !</h1>
          <p className="foreword  ">
            At Data Smart Technologies, we specialize in providing cutting-edge
            Digital Marketing and Web Development and other IT Solutions
            tailored to elevate your business. Whether you're looking to grow
            your online presence with targeted marketing strategies or enhance
            your operations with custom IT solutions, we've got you covered. Let
            us help you navigate the digital world and achieve your business
            goals with precision and innovation.
          </p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 top-right">
          <img
            className="image-fluid service-cover"
            src={service_cover}
            alt="image not found"
          />
        </div>
      </div>

      <Link to="As400" spy={true} smooth={true}>
        <button className="btn-primary btn up-btn">
          <i class="bi bi-chevron-double-up"></i>
        </button>
      </Link>
      <h1 className="menu-card">Here's your menu card !</h1>
      {/* Populate the components using map method */}
      {Loading ? (
        <h>loading....</h>
      ) : Data ? (
        <div className="row service-page">
          {Data.map((item, index) => (
            <motion.div
              className="col-lg-3 col-md-6 col-sm-12 service-ctnt"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              id={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h4 className="sub-heading">{item.title}</h4>
              <p className="overview">{item.overview}</p>
              <button className="btn btn-light service-btn">
                <a href="/service-details">know more</a>
              </button>
            </motion.div>
            /* <div className="col-lg-4 col-md-12 col-sm-12 service-right">
              <img
                src={item.image}
                alt="image not found!"
                className="service-img"
              />
            </div> */
          ))}
        </div>
      ) : (
        "Data Not Found!"
      )}

      {/* </div> */}
      {/* <As400 />
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
      <Web /> */}
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
