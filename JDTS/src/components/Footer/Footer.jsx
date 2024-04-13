import React from "react";
import { FaFacebook, FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3925.8987433167913!2d123.82930671919657!3d10.269742027977884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDE2JzExLjYiTiAxMjPCsDQ5JzUyLjMiRQ!5e0!3m2!1sen!2sph!4v1712979174684!5m2!1sen!2sph";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container max-w-[90%]">
        <div className="grid md:grid-cols-4 py-5 gap-y-5">
          <div className="md:col-span-2 py-8 px-4">
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
              <p> 09099855322</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="mailto:youremail@example.com">
                <FaEnvelope className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61554131270049">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          <div className="md:col-span-2 py-8 px-4 flex justify-center items-center">
            <div style={{ width: '100%', maxWidth: '400px' }}>
              <p className="text-center text-sm text-gray-500 mb-3">
                Our location in the map
              </p>
              <iframe
                title="Map"
                width="100%"
                height="240"
                frameBorder="0"
                style={{ border: 0 }}
                src={mapUrl}
                allowFullScreen
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
