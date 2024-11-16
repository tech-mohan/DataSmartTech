import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import Quates from "../assets/quates.png";
import { motion } from "framer-motion";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import { useSwipeable } from "react-swipeable";

export default function Testimonials() {
  const transition = { type: "spring", duration: 1 };
  const [selected, setSelected] = useState(0);
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [length, setLength] = useState(0);
  // console.log(tLength);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/Testimonials");
        const json = await response.json();
        setData(json);
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
  const length = Data.length;
  console.log(length);

  const handlePrev = () => {
    setSelected((prevIndex) => (prevIndex + 1) % length);
  };
  const handleNext = () => {
    setSelected((prevIndex) => (prevIndex - 1 + length) % length);
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });
  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [Data]);
  return (
    <div className="container-fluid Testimonials-page">
      <h1>What Our Client Says!</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : Data ? (
        <div className=" row Testimonials">
          <div className="col-lg-3 col-md-12 col-sm-12 l-arrow">
            <img
              className="left-arrow"
              onClick={handlePrev}
              src={leftArrow}
              alt=">"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={transition}
            >
              <div className="Reviews">
                <div className="text">
                  <img className="quates" src={Quates} alt="" />
                  <p>{Data[selected].review}</p>
                </div>
                <img className="clint-pic" src={Data[selected].image} alt="" />
                <h6>{Data[selected].name}</h6>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 r-arrow">
            <img
              className="right-arrow"
              onClick={handleNext}
              src={rightArrow}
              alt="<"
            />
          </div>
        </div>
      ) : (
        <h3>No data Found</h3>
      )}
    </div>
  );
}
