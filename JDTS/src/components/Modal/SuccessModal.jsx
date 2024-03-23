import React from "react";

const SuccessModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg overflow-hidden w-96">
        <div className="text-2xl py-4 px-6 text-red-500 text-center font-bold uppercase">
          Appointment Booked Successfully.
        </div>
        <div className="text-center text-gray-700 mb-4">
          We'll contact you shortly for the confirmation.
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            onClick={() => window.location.reload()} // Reload the page to reset the form
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
