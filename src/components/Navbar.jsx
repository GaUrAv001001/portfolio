import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#4e4e4e] p-2 flex justify-between items-center">
        <div className="w-[100%] flex">
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
                <Link>Current work</Link>
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
        <div className="flex">
          <div className="mx-4">
            <ul>
              <li>
                <Link to="/" className="mx-4">
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-4">
            <ul>
              <li>
                <Link to="/" className="mx-4 rounded">
                  <SiLinkedin className="text-[#0077B5] bg-white" />
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
