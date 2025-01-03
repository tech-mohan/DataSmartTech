import React from "react";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import AboutUs from "./Components/About";
import Services from "./Components/services/Services";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/Contact";
import Details from "./Components/Details";
import Events from "./Components/Events";
import serviceDetails from "./Components/service-details";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" Component={Navbar} />
          <Route exact path="/" Component={Home} />
          <Route path="About_Us" Component={AboutUs} />
          <Route path="Services" Component={Services} />
          <Route path="Testimonials" Component={Testimonials} />
          <Route path="Contact_Us" Component={ContactUs} />
          <Route path="/Details" Component={Details} />
          <Route path="Events" Component={Events} />
          <Route path="/service-details" Component={serviceDetails} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
