import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Modal from "../Modal/Modal";

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
  {
    id: 4,
    name: "BOOKING",
    link: "/#Modal",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className={`fixed top-0 z-50 w-full bg-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-30`}>
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/public/jdtslogo.png" alt="Logo" className="h-10" />
            <span className={`ml-2 text-${theme === "light" ? "black" : "white"} text-xl font-bold`}>JDTS</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className={`text-lg font-medium ${theme === "light" ? "text-black" : "text-white"} hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500`}
                  >
                    {name}
                  </a>
                </li>
              ))}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl text"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl text-white"
                />
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl text"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl text-white"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
