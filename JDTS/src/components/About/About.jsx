import React from "react";
import BongoPng from "../../assets/bongo.png";

const About = () => {
  return (
    <div id="about-section" className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={BongoPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
               Where Excellence Meets Affordability – Our Sole Mission is Providing Top-notch Service at a Price that Pleases!
              </p>
              <p data-aos="fade-up" className="text-3xl sm:text-2xl font-bold font-serif"> Transport Service for:</p>
              <ul data-aos="fade-up" className="list-disc ml-6">
                <li> Debris</li>
                <li> Garbage</li>
                <li> Lipat Bahay/Condo Transfer</li>
                <li> Office/Warehouse Transfer</li>
                <li> Hauling</li>
                <li> Trucking Service</li>
                <li> Catering Food Transport</li>
                <li> Products/Materials Transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
