import React from "react";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container max-w-[90%]">
        <div className="grid md:grid-cols-4 py-5 gap-y-5">
          <div className="md:col-span-3 py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Jetch and Dwight Trucking Services
            </h1>
            <p className="text-sm">
              Driving Success, Delivering Excellence. Your Cargo, Our Commitment.<br />
              Experience the Difference with Jetch & Dwight Trucking Services.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Jetch Merald</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 py-8 px-4" style={{ marginLeft: '-30px' }}>
            <p className="text-sm text-gray-500 mb-3">
              Our location on the map
            </p>
            <div className="relative" style={{ width: '350px', height: '240px' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387168.6978227105!2d-74.25908998630975!3d40.697149398867746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1648850842205!5m2!1sen!2sbd"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className="text-xs text-gray-500 mt-2 text-center">
        © {new Date().getFullYear()} Jetch and Dwight Trucking Services. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
