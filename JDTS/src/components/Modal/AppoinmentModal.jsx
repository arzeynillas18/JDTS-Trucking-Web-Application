import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import SuccessModal from "../Modal/SuccessModal";
import emailjs from 'emailjs-com';

const BookingModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [service, setService] = useState("");
  const [truck, setTruck] = useState(""); // New state for selected truck
  const [message, setMessage] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDateChange = (e) => {
    setAppointmentDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setAppointmentTime(e.target.value);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleTruckChange = (e) => {
    setTruck(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (name, email, phone, appointmentDate, appointmentTime, service, truck, message) => {
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
      service: service,
      truck: truck,
      message: message,
    };
  
    emailjs.send('service_bz6qfcf', 'template_9yyyvgk', templateParams, 'lPZkjiXUV9H-IyK0P')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'form'), {
        name,
        email,
        phone,
        appointmentDate,
        appointmentTime,
        service,
        truck, // Include truck in the submitted data
        message,
      });
      console.log('Document written with ID: ', docRef.id);
      setBookingSuccess(true);
      sendEmail(name, email, phone, appointmentDate, appointmentTime, service, truck, message);
      // Close the modal after submission
      setShowModal(false);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg overflow-hidden w-96">
            <div className="flex justify-end px-4 pt-2">
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-2xl py-4 px-6 text-red-500 text-center font-bold uppercase">
              Book an Appointment
            </div>
            <div className="h-96 overflow-y-auto">
              <form className="py-4 px-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email 
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                    Date for Pick up
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    value={appointmentDate}
                    onChange={handleDateChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                    Time for Pick-up
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="time"
                    type
                    ="time"
                    value={appointmentTime}
                    onChange={handleTimeChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                  Service
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="service"
                  name="service"
                  value={service}
                  onChange={handleServiceChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="trucking">Trucking Service</option>
                  <option value="productstransfer">Products/Materials Transfer</option>
                  <option value="hauling">Hauling</option>
                  <option value="garbage">Garbage/Debris</option>
                  <option value="housetransfer">Lipat Bahay/Office/Warehouse Transfer</option>
                  <option value="others">Others type in Message</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="truck">
                  Select a Truck
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="truck"
                  name="truck"
                  value={truck}
                  onChange={handleTruckChange}
                  required
                >
                  <option value="">Select a truck</option>
                  <option value="truck1">Truck 1</option>
                  <option value="truck2">Truck 2</option>
                  <option value="truck3">Truck 3</option>
                  {/* Add more truck options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                  focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Enter any additional information"
                ></textarea>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button
                  className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
      {bookingSuccess && <SuccessModal />}
    </>
  );
};

export default BookingModal;
