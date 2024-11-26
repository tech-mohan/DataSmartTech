import React, { useState } from "react";
import "./Services.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Services() {
  const bgcolor = ["darkcyan", "#CC99FF", "mediumseagreen", "lightpink"];
  let index = 0;

  setInterval(() => {
    document.body.style.backgroundColor = bgcolor[index];
    index = (index + 1) % bgcolor.length;
  }, 3000);
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
    <div className="container services">
      <Link to="As400" spy={true} smooth={true}>
        <button className="btn-primary btn up-btn">
          <i class="bi bi-chevron-double-up"></i>
        </button>
      </Link>

      <h1 className="service-heading">Our Services</h1>
      {/* Populate the components using map method */}
      {Loading ? (
        <h6>loading....</h6>
      ) : Data ? (
        Data.map((item, index) => (
          <motion.div
            className="row service-page"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            key={index}
            id={item.id}
          >
            <div className="col-lg-10 col-md-12 col-sm-12 service-left">
              <h4 className="sub-heading">{item.title}</h4>
              <p className="overview">{item.overview}</p>

              <div className="row inside-content">
                <div className="col-lg-6 col-md-12">
                  <ul>
                    <h5>Key features</h5>
                    {item.Key_features.split(",").map((value, subIndex) => (
                      <li key={subIndex}>{value}</li>
                    ))}
                  </ul>
                  <ul>
                    <h5>Models</h5>
                    {item.Models.split("&").map((value, subIndex) => (
                      <li key={subIndex}>{value}</li>
                    ))}
                  </ul>
                  <ul>
                    <h5>Applications</h5>
                    {item.Applications.split(",").map((value, subIndex) => (
                      <li key={subIndex}>{value}</li>
                    ))}
                  </ul>
                  <ul>
                    <h5>Benefits</h5>
                    {item.Benefits.split(",").map((value, subIndex) => (
                      <li key={subIndex}>{value}</li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-6 col-md-12">
                  <ul>
                    <h5>Operating Systems</h5>
                    {item.Operating_Systems.split(",").map(
                      (value, subIndex) => (
                        <li key={subIndex}>{value}</li>
                      )
                    )}
                  </ul>
                  <ul>
                    <h5>Programming Languages</h5>
                    {item.Programming_Languages.split(",").map(
                      (value, subIndex) => (
                        <li key={subIndex}>{value}</li>
                      )
                    )}
                  </ul>
                  <ul>
                    <h5>Replacement</h5>
                    {item.Replacement.split(",").map((value, subIndex) => (
                      <li key={subIndex}>{value}</li>
                    ))}
                  </ul>

                  <ul>
                    <h5>Limitations</h5>
                    {item.Limitations.split(",").map((value, subIndex) => (
                      <li key={subIndex}>{value}</li>
                    ))}
                  </ul>
                  <ul>
                    <h5>Job_Roles</h5>
                    {item.Job_Roles.split(",").map((value, subIndex) => (
                      <li key={subIndex}>{value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-12 col-sm-12 service-right">
              <img
                src={item.image}
                alt="image not found!"
                className="service-img"
              />
            </div> */}
          </motion.div>
        ))
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
