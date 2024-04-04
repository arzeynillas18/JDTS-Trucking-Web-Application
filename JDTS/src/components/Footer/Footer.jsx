import React from "react";
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.697149398867746,
  lng: -74.25908998630975,
};

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
          <a href="https://www.instagram.com/">
            <FaInstagram className="text-3xl hover:text-primary duration-300" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554131270049">
            <FaFacebook className="text-3xl hover:text-primary duration-300" />
          </a>
        </div>

          </div>
          <div className="md:col-span-1 py-8 px-4" style={{ marginLeft: '-30px' }}>
            <p className="text-sm text-gray-500 mb-3">
              Our location on the map
            </p>
            <div style={{ width: '350px', height: '240px' }}>
              <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15}
                ></GoogleMap>
              </LoadScript>
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
