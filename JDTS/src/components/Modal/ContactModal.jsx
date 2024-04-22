import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SuccessContactModal from '../Modal/SuccessContactModal';

const ContactModal = ({ showModal, closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal
  const [submitting, setSubmitting] = useState(false); // State for submitting status

  const sendEmail = (templateParams) => {
    setSubmitting(true); // Set submitting status to true
    emailjs.send('service_bz6qfcf', 'template_drvdpfx', templateParams, 'lPZkjiXUV9H-IyK0P')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setShowSuccessModal(true); // Show success modal on successful email send
        console.log('showSuccessModal:', showSuccessModal); // Add this console log
        closeModal(); // Close the contact modal
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setShowSuccessModal(false); // Hide success modal in case of error
        // Handle error, e.g., show an error message
      })
      .finally(() => {
        setSubmitting(false); // Reset submitting status to false
      });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name,
      email,
      subject,
      message,
    };
    sendEmail(templateParams);
    // You can clear the form fields here or handle success message
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false); // Close the success modal
  };

  if (!showModal) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">Let's Talk</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="bg-transparent text-black h-6 w-6 text-xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            <div className="relative p-3 flex-auto">
              <p className="my-2 text-blueGray-500 text-sm leading-relaxed">
                If you have general questions about a Business or Personal use rental, rates and availability, or our services, our customer service team can help.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="name" className="block text-xs font-bold text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="message" className="block text-xs font-bold text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`block mx-auto bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-1 px-2 border-b-2 border-yellow-600 hover:border-yellow-500 rounded focus:outline-none ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showSuccessModal && <SuccessContactModal closeModal={handleSuccessModalClose} />}

    </>
  );
};

export default ContactModal;
