import React, { useState } from "react";
import Modal from "../Modal/AppoinmentModal";
import canter from "../../assets/canter.png";
import elf from "../../assets/elf.png";
import multicab from "../../assets/multicab.png";

const carList = [
  {
    name: "Canter 4 Wheels",
    image: canter,
    description: "Engine: Diesel, typically 3.0 to 3.9 liters \nPower: Around 130 to 175 horsepower \nTransmission: Manual, 5 or 6 gears \nDrive System: 4x4 \nPayload Capacity: 1.5 to 2.5 tons \nCargo Bed: Flatbed at the back \nSeating Capacity: 2-3 passengers \nSafety Features: Airbags, ABS \nOptional Features: Air conditioning, power windows, multimedia system.",
    aosDelay: "1000",
  },
  {
    name: "Elf Cab",
    image: elf,
    description: "GVW: 8,500 kg.\nEngine: 4HK1-TCN \nMax. Output: 114 KW (155.0 PS) / 2,600 rpm \nMax. Torque :419 N-m (42.0 kg-m) / 1,600 - 2,600 rpm \nRear Body Length: 18 ft.",
    aosDelay: "1000",
  },
  {
    name: "Multicab",
    image: multicab,
    description: "Engine Displacement: 660cc\n12 valve Horsepower: 38ps/3600rpm\nTransmission: Manual\n5 speed Engine Type - 4 stroke\n3 cylinder, water cooled-direct fan gasoline",
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

  const closeDescription = () => {
    setSelectedCar(null);
    setShowModal(false);
  };

  return (
    <div id="carlist-section" className="pb-24">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">OUR TRUCKS</h1>
        <p className="text-lg md:text-xl pb-10">
          Explore our diverse fleet of top-quality trucks, meticulously maintained and ready to tackle any job.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((car) => (
            <div
              key={car.name}
              className="relative group cursor-pointer border-2 border-yellow-400 rounded-xl overflow-hidden"
              onMouseEnter={() => setSelectedCar(car)}
              onMouseLeave={() => setSelectedCar(null)}
            >
              <div className="h-[300px] overflow-hidden">
                <img src={car.image} alt="" className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105" />
              </div>
              {selectedCar === car && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <h1 className="text-white font-semibold text-2xl">{car.name}</h1>
                  <ul className="text-white text-sm text-left list-disc mt-2 px-4 ml-6">
                    {car.description.split("\n").map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                  <button onClick={() => openModal(car)} className="mt-2 px-4 py-2 bg-yellow-400 text-white font-semibold rounded hover:bg-yellow-500 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} selectedCar={selectedCar} onClose={closeDescription} />
      </div>
    </div>
  );
};

export default CarList;
