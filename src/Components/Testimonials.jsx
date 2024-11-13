import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import Quates from "../assets/quates.png";
import Clint1 from "../assets/Testimonials-1.jpg";
import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";

export default function Testimonials() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const [Data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);
  // console.log(tLength);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/Testimonials");
        const json = await response.json();
        setData(json);
        console.log(Array.isArray(Data));
        console.log(Data);
        const tLength = Data.length;
        setLength(tLength);
        console.log(length);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid Testimonials-page">
      <h1>What Our Client Says!</h1>
      {/* 
      <motion.div
        key={selected}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={transition}
      > */}
      <div className="Testimonials">
        {loading ? (
          <h1>Loading...</h1>
        ) : Data ? (
          <div className="Reviews">
            <img src={Quates} alt="" />
            <p>{Data[selected].review}</p>
            <img src={Data[selected].image} alt="" />
            <h6>{Data[selected].name}</h6>
          </div>
        ) : (
          <h3>No data Found</h3>
        )}
      </div>

      {/* </motion.div> */}
    </div>
  );
}
