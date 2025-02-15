import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import GenericButton from "../GenericButton";

import "./Carousel.css";

register();

function Carousel({ image1, image2, image3 }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      style={{ maxHeight: "700px" }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {[image1, image2, image3].map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          {index === 0 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              <h2 style={{ fontSize: "1rem", textTransform: "uppercase" }}>
                PAMPA BAKERY
              </h2>
              <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                Freshly Baked, Always Delicious
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  maxWidth: "70%",
                  marginBottom: "1rem",
                }}
              >
                Crafted with love, baked to perfection. Savor the warmth of
                every bite.
              </p>
              <GenericButton text="Shop" to="/about" />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
