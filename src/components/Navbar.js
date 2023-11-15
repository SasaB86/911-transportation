import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../src/images/logo.svg";
import "../index.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="md:sticky md:top-0 z-50">
      <div className="px-4 py-2 text-white flex  md:flex-row justify-around items-center bg-black">
        <div className="flex items-center w-auto">
          <img
            src={logo}
            alt="Logo"
            onClick={handleScrollToTop}
            className="md:h-18 md:w-36 h-12 w-28 mr-2 w-auto cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-end">
          <div className=" md:flex gap-4 text-sm ">
            <p className="text-gray-300 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>+1 224 422 3254</span>
            </p>
            <p className="text-gray-300 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span>Des Plaines</span>
            </p>
          </div>
          <div
            className={
              toggleMenu
                ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
                : "hidden md:flex"
            }
            id="menu"
          >
            <ul>
              <li
                className={`md:inline-block cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${
                  window.scrollY >= 0 && window.scrollY < 100 ? "active" : ""
                }`}
              >
                <Link
                  className="scroll-smooth"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  onClick={handleToggle}
                >
                  Home
                </Link>
              </li>
              <li
                className={`md:inline-block cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${
                  window.scrollY >= 0 && window.scrollY < 100 ? "active" : ""
                }`}
              >
                <Link
                  className="scroll-smooth"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  onClick={handleToggle}
                >
                  About Us
                </Link>
              </li>
              <li
                className={`md:inline-block cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${
                  window.scrollY >= 0 && window.scrollY < 100 ? "active" : ""
                }`}
              >
                <Link
                  className="scroll-smooth"
                  to="fleet"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  onClick={handleToggle}
                >
                  Fleet
                </Link>
              </li>
              <li
                className={`md:inline-block cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${
                  window.scrollY >= 0 && window.scrollY < 100 ? "active" : ""
                }`}
              >
                <Link
                  className="scroll-smooth"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  onClick={handleToggle}
                >
                  Services
                </Link>
              </li>

              <li
                className={`md:inline-block cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 md:px-0  relative ${
                  window.scrollY >= 0 && window.scrollY < 100 ? "active" : ""
                }`}
              >
                <Link
                  className="scroll-smooth"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={400}
                  onClick={handleToggle}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="cursor-pointer md:hidden">
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            htmlFor="menu-btn"
          >
            <span
              onClick={handleToggle}
              className="navicon bg-white-darkest flex items-center relative"
            ></span>
          </label>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
