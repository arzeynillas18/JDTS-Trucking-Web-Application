import React, { useState } from "react";
import Modal from "../Modal/AppoinmentModal";
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
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
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
           OUR TRUCKS
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-lg md:text-xl pb-10">
        Explore our diverse fleet of top-quality trucks, meticulously maintained and ready to tackle any job.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((car) => (
              <div
                key={car.name}
                data-aos="fade-up"
                data-aos-delay={car.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={car.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{car.name}</h1>
                  <button
                    onClick={() => openModal(car)}
                    className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 border-b-4 border-yellow-600 hover:border-yellow-500 rounded"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <Modal showModal={showModal} setShowModal={setShowModal} selectedCar={selectedCar} />
      </div>
    </div>
  );
};

export default CarList;
