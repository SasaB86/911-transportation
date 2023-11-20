import React, { useState, useEffect } from "react";
import { FaHouse, FaPhone } from "react-icons/fa6";

import { Link } from "react-scroll";
import logo from "../../src/images/logo.svg";
import "../index.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getActiveClass = (sectionName) => {
    return scrollY >= 0 && scrollY < 100 ? "active" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <p className="text-white text-lg flex items-center gap-2">
              <FaPhone className="h-5 w-5    text-white" />
              <span>
                <a href="tel:+12244223254" title="Phone Number">
                  +1 224 422 3254
                </a>
              </span>
            </p>
            <p className="text-white text-lg flex items-center gap-2">
              <FaHouse className="h-5 w-5 text-white" />
              <span>
                <a
                  href="https://maps.app.goo.gl/TWsYkCURcMhSyDcs5"
                  target="_blank"
                  rel="noreferrer"
                  title="Google Map"
                >
                  Des Plaines
                </a>
              </span>
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
                className={`md:inline-block uppercase cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${getActiveClass(
                  "home"
                )}`}
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
                className={`md:inline-block uppercase cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${getActiveClass(
                  "about"
                )}`}
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
                className={`md:inline-block uppercase cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${getActiveClass(
                  "fleet"
                )}`}
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
                className={`md:inline-block uppercase cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${getActiveClass(
                  "services"
                )}`}
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
                className={`md:inline-block uppercase cursor-pointer hover:text-gray-500 border-none md:border-none py-2 px-3 relative ${getActiveClass(
                  "contact"
                )}`}
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
