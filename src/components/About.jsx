import React from "react";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <div className=" mx-10">
        <Grid container whiteSpace={4} xl={12}>
          {/* section-1 */}
          <Grid item sm={12} md={4}>
            <div style={{ fontFamily: "'Playfair Display', serif" }} className="flex justify-center items-center m-5 text-orange-500 text-7xl">
              About Me
            </div>
          </Grid>
          {/* section-2 */}
          <Grid item sm={12} md={8}>
            <div className="text-white text-lg text-justify">
              Hi, I’m Gaurav Hiwarale! I graduated in Computer Science from the
              Maharashtra Institute of Technology. I enjoy coding and creating
              innovative solutions using Python, Java, and JavaScript, along
              with tools like React, Node.js, and MongoDB. During my internship
              at Leapot Technologies, I developed a website and APIs, and worked
              on the frontend for a Learning Management System. I’ve also built
              projects like a secure photo gallery and a customer segmentation
              tool that analyzes data from e-commerce sites. Participating in
              hackathons has further strengthened my teamwork and
              problem-solving skills. Feel free to check out my work and connect
              with me!
            </div>
            <button className="mt-10 text-lg  text-white border-2 border-orange-600 p-2 rounded hover:scale-105 transform transition-all duration-300">
              Download Resume
            </button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default About;
