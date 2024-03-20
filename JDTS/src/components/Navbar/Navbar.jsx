import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Modal from "../Modal/AppoinmentModal";
import Logo from "../../assets/jdtslogo.png";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#home",
  },
  {
    id: 2,
    name: "ABOUT ",
    link: "/#about-section",
  },
  {
    id: 3,
    name: "TRUCKS",
    link: "/#carlist-section",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openModal = () => {
    setShowBookingModal(true);
  };

  return (
    <nav className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-700`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1"> {/* Changed p-4 to p-2 */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="h-16" alt="Your Logo" />
          <span className={`self-center text-3xl font-semibold whitespace-nowrap dark:text-white`}>JDTS</span>
        </a>
        <div className="flex md:order-2 space-x-6 md:space-x-0 rtl:space-x-reverse items-center">
        <button
  className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-1 px-2 border-b-2 border-yellow-600 hover:border-yellow-500 rounded" // Changed py-2 px-4 to py-1 px-2
  onClick={openModal}
>
  BOOK NOW!
</button>


          <div className="flex items-center">
            <div className="ml-4"> 
              {theme === "dark" ? (
                <BiSolidMoon
                  onClick={() => setTheme("light")}
                  className="text-2xl text"
                />
              ) : (
                <BiSolidSun
                  onClick={() => setTheme("dark")}
                  className="text-2xl text-black"
                />
              )}
            </div>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" onClick={toggleMenu}>
            <span className="sr-only">Open main menu</span>
            <HiMenuAlt3 className="w-5 h-5" />
          </button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                <a href={link} className="block py-1 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
      <Modal showModal={showBookingModal} setShowModal={setShowBookingModal} />
    </nav>
  );
            };

export default Navbar;
