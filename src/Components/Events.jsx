import React, { useEffect, useState } from "react";
import "../Components/Events.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselModal from "./Carousel";

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

  // useEffect(() => {
  //   if (isModalOpen) {
  //     console.log("selected images in modal:", selectedImages);
  //   }
  // }, [isModalOpen, selectedImages]);

  return (
    <div className="container-fluid">
      <div className="row events-list">
        {events.length === 0 ? (
          <progress value="50" max="100"></progress>
        ) : (
          events.map((event, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
              <EventCard key={index} event={event} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
const EventCard = ({ event }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = (images) => {
    console.log(images);
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };
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
    <div className="event-details">
      <div className="gallery">
        <img className="images" src={currentImage} />
        <button
          className="btn btn-danger"
          onClick={() => handleModalOpen(event.images)}
        >
          Photos
        </button>
      </div>
      <h3>{event.name}</h3>
      <h5 className="date">{event.date}</h5>
      {isModalOpen && (
        <CarouselModal images={selectedImages} onClose={handleModalClose} />
      )}
    </div>
  );
};
