import React, { useState } from "react";
import Modal from "../Modal/Modal";
import canter from "../../assets/canter.png";
import elf from "../../assets/elf.png";
import multicab from "../../assets/multicab.png";

const carList = [
  {
    name: "Canter 4 Wheels",
    image: canter,
    aosDelay: "0",
  },
  {
    name: "Elf Cab",
    image: elf,
    aosDelay: "500",
  },
  {
    name: "Multicab",
    image: multicab,
    aosDelay: "1000",
  },
];

const CarList = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div id="carlist-section" className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem ipsum dolor
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure
          nemo ab?
        </p>
        {/* Truck listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                key={data.name}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of truck listing */}
        <div className="grid place-items-center mt-8">
        <button 
        onClick={openModal}
        data-aos="fade-up"
        data-aos-delay="1500" className="px-8 py-2 border border-black bg-transparent text-black relative group transition duration-200">
            <div className="absolute -bottom-2 -right-2 bg-red-700 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
            <span className="relative font-bold group-hover:text-yellow-500">
              BOOK NOW!
            </span>
          </button>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default CarList;
