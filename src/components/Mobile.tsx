import { useState } from "react";
import "./styles/Mobile.css";

import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

const screenshots = [img1, img2, img3, img4, img5];

const Mobile = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % screenshots.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  return (
    <section className="mobile-section">
      <div className="phone">
        <div className="phone-notch"></div>

        <div className="phone-screen">
          <img
            src={screenshots[current]}
            alt={`Screenshot ${current + 1}`}
            className="phone-image"
          />

          {/* Previous Button */}
          <button className="slider-btn left" onClick={prev}>
            ❮
          </button>

          {/* Next Button */}
          <button className="slider-btn right" onClick={next}>
            ❯
          </button>

          {/* Dots */}
          <div className="dots">
            {screenshots.map((_, index) => (
              <span
                key={index}
                className={`dot ${current === index ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;