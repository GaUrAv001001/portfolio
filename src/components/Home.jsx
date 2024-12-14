import React from "react";
import TypewriterComponent from "typewriter-effect";
import { Grid } from "@mui/material";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mx-10 justify-center items-center min-h-screen ">
        <Grid item container xs={12}>
          <Grid item xs={12} sm={12} md={7}>
            {/* section-1 */}
            <div className="text-white m-auto w-full">
              <div className="text-orange-500 text-5xl my-5">
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: ["Hello! I'am Gaurav Hiwarale"],
                  }}
                />
              </div>
              <p className=" text-lg text-[#CDCDCD] text-justify">
                Hi, I’m Gaurav Hiwarale! I recently completed my Computer
                Science degree and have a passion for building user-friendly
                applications and solving real-world problems. With skills in
                full-stack development and a love for learning, I’m excited to
                share my work and grow in the tech field.
              </p>
              <div className="my-4">
                <button className=" border-2 border-orange-600 hover:scale-105 transform transition-all duration-300 text-[#CDCDCD] rounded p-2">
                  Contact me 
                </button>
              </div>
            </div>
          </Grid>
          {/* section-2 */}
          <Grid item xs={12} sm={12} md={5}>
            <div className="flex justify-center text-white w-full">
              <img
                className="h-1/2 w-auto object-contain rounded broder-white border-b-4 hover:scale-105 transform transition-all duration-300  cursor-pointer"
                src={profile}
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
