import React from 'react';
import './imageGallery.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <img src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1739543972/close-up-view-delicious-chocolate-cake_23-2148801129.jpg_i4i4zw.jpg" alt="image 1" className="gallery-item" />
      <img src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1739544104/delicious-products-arrangement-bakery_23-2150273131.jpg_vn0zd1.jpg" alt="image 2" className="gallery-item" />
      <img src= "https://res.cloudinary.com/dav7tzdzv/image/upload/v1739546894/croissants-tray_23-2147985149_dzjity.jpg" alt="image 3" className="gallery-item" />
      <img src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1739547000/cake-with-banana-whipping-cream_23-2148761712.jpg_s8rret.jpg" alt="image 4" className="gallery-item" />
      <img src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1739547106/full-shot-people-spending-time-together_23-2149356873.jpg_jvwnqo.jpg" alt="image 5" className="gallery-item" />
    </div>
  );
};

export default ImageGallery;
