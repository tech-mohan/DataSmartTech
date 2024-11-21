import React, { useEffect, useState } from "react";
import "./Contact.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    Contact_number: "",
    email: "",
    address: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data", formData);
    setIsLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch("http://localhost:8000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({
          Fname: "",
          Lname: "",
          Contact_number: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        throw new Error("Faild to send mail.Try again!");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect(() => {
  //   if (isSubmited) {
  //     setFormData({
  //       Fname: "",
  //       Lname: "",
  //       Contact_number: "",
  //       email: "",
  //       address: "",
  //       message: "",
  //     });
  //     setIsSubmited(false);
  //     console.log("current data:", formData);
  //   }
  // }, [isSubmited]);
  return (
    <div className="container contact-page">
      <h1 className="mb-5">Contact Us</h1>
      <div className="row justify-content-center contact-card text-white">
        <div className="col-lg-4 col-md-8 contact-links">
          <h4>Gateways to connect with us</h4>
          <div className="mail">
            <i class="bi bi-envelope-at-fill"></i>
            <a target="_blank" href="mailto:@dst1994india@gmail.com">
              dst1994india@gmail.com
            </a>
          </div>
          <div className="insta">
            <i class="bi bi-instagram"></i>
            <a
              target="_blank"
              href="https://www.instagram.com/data_smart_technologies?igsh=eTJyMHltd3ppd214"
            >
              Data Smart Technologies
            </a>
          </div>
          <div className="twitter">
            <i class="bi bi-twitter-x"></i>
            <a
              target="_blank"
              href="https://x.com/Datasmart_Tech?t=Tq5bp5fbwROFAq951P4u_Q&s=09"
            >
              Data Smart Technologies
            </a>
          </div>

          <div className="youtube">
            <i class="bi bi-youtube"></i>
            <a
              target="_blank"
              href="https://m.youtube.com/@DataSmart_Technologies?fbclid=PAY2xjawGlIpFleHRuA2FlbQIxMAABpunv1wKAbBVgcvobzj8EQ0yrA72ggj7FUfllaB1kcURNtb46l-RQ_Zod4Q_aem_MIAgrjpbPjKyilQTLaFhFQ"
            >
              Data Smart Technologies
            </a>
          </div>
          <div className="facebook">
            <i class="bi bi-facebook"></i>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61560699545350&mibextid=ZbWKwL"
            >
              Data Smart Technologies
            </a>
          </div>
          <div className="location">
            <i class="bi bi-geo-alt-fill"></i>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/DataSmart+Technologies,+1371+%2F+9,+2nd+Floor+NEHRUJI+EXTN+1st+CROSS+STREET,+Periyakulam+Main+Rd,+near+Vaigai+Scan,+Theni,+Tamil+Nadu+625531/@10.0367994,77.4678209,15z/data=!4m6!3m5!1s0x3b076bbad545a669:0xbe0a205ccee5e89c!8m2!3d10.0367994!4d77.4858453!16s%2Fg%2F11y63tg_n5"
            >
              Data Smart Technologies,
              <br />
              Nehruji Extn,
              <br /> 1st Cross Street,
              <br /> Near Vaigai Scan,
              <br />
              Periyakulam Road,
              <br /> Theni,Tamil Nadu,India.
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 contact-form">
          <div className="card">
            <div className="card-body text-white">
              <form onSubmit={handleSubmit}>
                <div className="name-field">
                  <div className="mb-3 ">
                    <label htmlFor="Fname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="Fname"
                      className="form-control"
                      value={formData.Fname}
                      onChange={handleFormChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Lname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      className="form-control"
                      onChange={handleFormChange}
                      value={formData.Lname}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Contact-num" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name="Contact_number"
                    className="form-control"
                    onChange={handleFormChange}
                    value={formData.Contact_number}
                    placeholder="Enter your number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-Mail
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    onChange={handleFormChange}
                    value={formData.email}
                    placeholder="Enter your E-Mail"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    type="text"
                    name="address"
                    className="form-control"
                    onChange={handleFormChange}
                    value={formData.address}
                    placeholder="Enter your address"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    onChange={handleFormChange}
                    value={formData.message}
                    type="text"
                    namews="4"
                    name="message"
                    className="form-control"
                    placeholder="Write your message..."
                  />
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg"
                    disabled={isLoading}
                    type="submit"
                  >
                    {isLoading ? "Sending..." : "Send Mail"}
                  </button>
                  {success && (
                    <h4 style={{ color: "#00ff00", textAlign: "center" }}>
                      Mail sent successfully!
                    </h4>
                  )}
                  {error && (
                    <h4 style={{ color: "#Ff0000", textAlign: "center" }}>
                      {error}
                    </h4>
                  )}
                </div>
              </form>
            </div>
          </div>
          {/* <form onSubmit={handleSubmit}>
            <label></label>
            Name{" "}
            <input
              name="name"
              type="text"
              nameChange={handleFormChange}
              value={formData.name}
            />
            <label>
              E-Mail{" "}
              <input
                name="email"
                type="mail"
                nameChange={handleFormChange}
                value={formData.email}
              />
            </label>
            <label>
              Message{" "}
              <input
                name="msg"
                type="txtarea"
                nameChange={handleFormChange}
                value={formData.msg}
              />
            </label>
            <button className="btn btn-success">Submit</button>
          </form> */}
        </div>
        {/* <div className="col-lg-6 col-md-12"></div> */}
      </div>
    </div>
  );
}
