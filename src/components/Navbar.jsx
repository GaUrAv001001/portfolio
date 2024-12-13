import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa6";
// import { SiLinkedin } from "react-icons/si";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

const Navbar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com", "_blank", "noopener,noreferrer");
  };

  const hanldeGitHibClick = () => {
    window.open(
      "https://github.com/GaUrAv001001",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="w-full md:bg-[#4e4e4e] p-4 flex justify-between items-center">
        <button
          className="h-7 w-8 md:hidden"
          onClick={() => setSideBarOpen(true)}
        >
          <img src={menu} alt="" />
        </button>
        <div className="hidden md:flex w-[100%] justify-between items-center">
          <div className="flex">
            <div className="text-[#CDCDCD] mx-4">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#CDCDCD] mx-4">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#CDCDCD] mx-4">
              <ul>
                <li>
                  <Link>Projects</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#CDCDCD] mx-4">
              <ul>
                <li>
                  <Link>Experience</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#CDCDCD] mx-4">
              <ul>
                <li>
                  <Link>Skills & Tools</Link>
                </li>
              </ul>
            </div>
            <div className="text-[#CDCDCD] mx-4">
              <ul>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="hidden md:flex">
            <div className="mx-4">
              <ul>
                <li>
                  <Link
                    onClick={handleLinkedInClick}
                    className="hover:scale-105 transform transition-all duration-300 border-white cursor-pointer"
                  >
                    <img
                      className="h-7 w-8 object-cover rounded"
                      src={linkedin}
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-4">
              <ul>
                <li>
                  <Link
                    onClick={hanldeGitHibClick}
                    className="hover:scale-105 transform transition-all duration-300 border-white cursor-pointer"
                  >
                    <img className="h-7 w-8 object-cover" src={github} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* hamberger menu */}
        {isSidebarOpen && (
          <>
            <div className="absolute top-0 left-0 w-40 h-full bg-[#4e4e4e] p-4 z-50 md:hidden">
              <button>
                <img
                  className="h-4 w-5 object-cover flex justify-center items-center"
                  src={close}
                  alt=""
                  onClick={() => setSideBarOpen(false)}
                />
              </button>
              <div className="flex flex-col my-2">
                <div className="text-[#CDCDCD] mx-4 my-2">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                  </ul>
                </div>
                <div className="text-[#CDCDCD] mx-4 my-2">
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="text-[#CDCDCD] mx-4 my-2">
                  <ul>
                    <li>
                      <Link>Projects</Link>
                    </li>
                  </ul>
                </div>
                <div className="text-[#CDCDCD] mx-4 my-2">
                  <ul>
                    <li>
                      <Link>Experience</Link>
                    </li>
                  </ul>
                </div>
                <div className="text-[#CDCDCD] mx-4 my-2">
                  <ul>
                    <li>
                      <Link>Skills & Tools</Link>
                    </li>
                  </ul>
                </div>
                <div className="text-[#CDCDCD] mx-4 my-2">
                  <ul>
                    <li>
                      <Link>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
