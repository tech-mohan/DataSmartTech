import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Events.css";

const CarouselModal = ({ images, onClose }) => {
  const [loadedImages, setLoadedImages] = useState(false);
  const [imgError, setImgError] = useState(false);
  useEffect(() => {
    setImgError(false);
    let loadedCount = 0;
    const checkImages = images.map((imgUrl) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoadedImages(true);
            resolve();
          }
        };
        img.onerror = (e) => {
          setImgError(true);
          reject(e);
        };
      });
    });

    Promise.all(checkImages)
      .then(() => console.log("All images loaded successfully"))
      .catch(() => console.log("Error on loading images"));

    // if (images && images.length > 0) {
    //   images.forEach((imgUrl) => {
    //     const img = new Image();
    //     img.src = imgUrl;
    //     img.onload = () => {
    //       loadedCount++;
    //       if (loadedCount === images.length) {
    //         setLoadedImages(true);
    //       }
    //     };
    //     img.onerror = () => setLoadedImages(true);
    //   });
    // }
  }, [images]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (imgError) {
    return <p>There was an error on image loading.</p>;
  }
  if (!loadedImages) return <p>Images Loading...</p>;
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          X
        </button>
        <Slider {...settings}>
          {images.map((imgUrl, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={imgUrl}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
                // onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default CarouselModal;
