import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import about02 from "../../Components/Images/about02.jpg";
import about03 from "../../Components/Images/about03.jpg";
import about04 from "../../Components/Images/about04.jpg";
import about05 from "../../Components/Images/about05.jpg";
import about06 from "../../Components/Images/about06.jpg";


import "./SpecialCategory.css";

const images = [
  {
    src: about02,
    alt: "About picture",
  },
  {
    src: about03,
    alt: "About picture",
  },
  {
    src:  about04,
    alt: "About picture",
  },
  {
    src:  about05,
    alt: "About picture",
  },
  {
    src:  about06,
    alt: "About picture",
  }
];

const SpecialCategory = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        if (swiper.isEnd) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="special-category-container">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation={false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} className="special-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialCategory;
