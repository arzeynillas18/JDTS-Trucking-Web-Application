import React, { useEffect, useState } from "react";
import truckpng from "../../assets/truck.png";
import truck from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <>
      <div id="home" className="dark:bg-black dark:text-white duration-300">
        <div className="container min-h-[620px] flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="order-1 sm:order-2"
            >
              <img
                src={theme === "dark" ? truckpng : truck}
                alt=""
                className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              />
            </div>

            <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
              <p
                data-aos="fade-up"
                className="text-red-700 text-2xl font-serif"
              >
                Driving Success, Delivering Excellence. Your Cargo, Our
                Commitment. Experience the Difference with Jetch & Dwight
                Trucking Services.
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="600"
                className="text-3xl lg:text-3xl font-semibold font-serif text-center"
              >
                Jetch and Dwigth Trucking Services
              </h1>

              <div className="flex justify-center">
  <a
    href="#about-section"
    className="px-8 py-2 border border-black bg-red-700 text-white relative group transition duration-200"
    data-aos="fade-up"  
  >
    <div className="absolute -bottom-2 -right-2 bg-red-700 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
    <span className="relative font-bold group-hover:text-yellow-500">
      GET STARTED
    </span>
  </a>
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
