import React, { useEffect, useState } from "react";
import "../Components/Events.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Events() {
  const [events, setEvents] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const data = await fetch("http://localhost:8000/Events");

        const json = await data.json();
        console.log(json);
        setEvents(json);
        // setLoading(false);
        console.log(events);
      } catch (err) {
        console.error("error is:", err);
        // setLoading(false);
      }
    };
    fetchEventData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row events-list">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>

      <Carousel showThumbs={false} showIndicators={false} className="carosel">
        <img
          className="img1"
          src="./src/assets/events/christmas-1.jpg"
          alt="not found"
        />
        <img
          className="img1"
          src="./src/assets/events/christmas-2.jpg"
          alt="not found"
        />
      </Carousel>
    </div>
  );
}
const EventCard = ({ event }) => {
  const [currentImage, setCurrentImage] = useState(event.images[0]);
  useEffect(() => {
    if (event.images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = event.images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % event.images.length;
        return event.images[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [event.images]);
  return (
    <div>
      <div className="col-lg-3 col-md-6 col-sm-12 event-details">
        <div className="gallery">
          <img className="images" src={currentImage} alt="" />
          <button className="btn btn-danger">Photos</button>
        </div>
        <h3>{event.name}</h3>
        <h5 className="date">{event.date}</h5>
      </div>
    </div>
  );
};
