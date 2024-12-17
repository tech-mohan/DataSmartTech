import React, { useEffect, useState } from "react";
import "./About.css";
import about from "../assets/about-logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
        const response = await fetch("http://localhost:8000/departments");
        const data = await response.json();
        console.log(data);
        const grouped = data.reduce((acc, item) => {
          if (!acc[item.department]) {
            acc[item.department] = [];
          }
          acc[item.department].push({
            name: item.member_name,
            image: item.image,
            role: item.role,
            id: item.id,
          });

          return acc;
        }, {});
        setData(grouped);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container about-page">
      <div className="row about">
        <div className="col-lg-6 col-md-12 col-sm-12 left-about">
          <img src={about} alt="" className="about-logo" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 right-about">
          <p className="about-ctnt">
            <h1 className="about-heading">Who we are !</h1>
            having a strong social media presence is crucial for businesses of
            all sizes. Whether you're a startup looking to establish your brand
            or an established company wanting to engage with your audience more
            effectively, the right social media marketing strategy can make all
            the difference. That’s where DataSmart Technologies in Theni comes
            in. Whether you need to improve your SEO rankings, run paid ads, or
            develop a comprehensive digital marketing strategy, Data Smart
            Technologies is here to help. Contact us today, and let’s take your
            business to the next level!
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
          Object.keys(Data).map((department) => (
            <motion.div
              className="col-lg-4 col-md-12 col-sm-12 team-section"
              key={department}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h5>{department}</h5>
              <div className="row members">
                {Data[department].map((childItem, index) => (
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
            </motion.div>
          ))
        ) : (
          <p>Data not found!</p>
        )}
      </div>
      <br />
    </div>
  );
}
