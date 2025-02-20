import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your images
import brand1 from '../imageSlider/brand-1.png';
import brand2 from '../imageSlider/brand-2.png';
import brand3 from '../imageSlider/brand-3.png';
import brand4 from '../imageSlider/brand-4.png';
import brand5 from '../imageSlider/brand-5.png';

const ImageSlider = () => {
  const images = [brand1, brand2, brand3, brand4, brand5];

  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col">
            <img src={image} alt={`Slide ${index}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;