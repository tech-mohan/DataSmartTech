import React, { useEffect, useState } from "react";
import "./About.css";
import about from "../assets/about-logo.png";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  // const colors = ["yellowgreen", "skyblue", "#CC99FF", "lightpink"];
  // let index = 0;
  // setInterval(() => {
  //   document.body.style.backgroundColor = colors[index];
  //   index = (index + 1) % colors.length;
  // }, 3000);
  // fetch API
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const handleImageClick = (memberId) => {
    navigate("/Details", { state: { Id: memberId } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/Teams");
        const json = await response.json();
        console.log(json);
        setData(json.data);
        console.log(Array.isArray(Data));
        console.log(Data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
          </span>
        </div>
      </div>
      <h2 className="team-heading">Meet The Team</h2>
      <div className="row teams">
        {Loading ? (
          <h5>Loading...</h5>
        ) : Data ? (
          Data.map((item, index) => (
            <div
              className="col-lg-4 col-md-12 col-sm-12 team-section"
              key={index}
            >
              <h5>{item.title}</h5>
              <div className="row members">
                {item.members.map((childItem, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 team-details"
                    key={index}
                  >
                    <img
                      src={childItem.image}
                      alt="image not found"
                      onClick={() => handleImageClick(childItem.id)}
                    />
                    <h3>{childItem.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Data not found!</p>
        )}
      </div>
      <br />
    </div>
  );
}
