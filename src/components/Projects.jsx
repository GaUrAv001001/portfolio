import React from "react";
import { Grid } from "@mui/material";

const Projects = () => {
  return (
    <>
      <div className="mt-80 flex-col mx-10 text-white text-4xl flex justify-center items-center">
        <div className="mb-28">
          <h1 className="text-5xl flex justify-center items-center">
            Projects
          </h1>
        </div>
        <div className="">
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <div className="bg-[#4e4e4e] mx-10 p-1 rounded">
                <img src="" alt="img" />
                <h1 className="text-xl font-semibold m-2">PhotoG</h1>
                <p className="text-lg m-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur animi eius id nostrum asperiores.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="bg-[#4e4e4e] mx-10">
                <img src="" alt="img" />
                <h1>PhotoG</h1>
                <p className="text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur animi eius id nostrum asperiores.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="bg-[#4e4e4e] mx-10">
                <img src="" alt="img" />
                <h1>PhotoG</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur animi eius id nostrum asperiores.
                </p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="bg-[#4e4e4e] mx-10">
                <img src="" alt="img" />
                <h1>PhotoG</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Repellendus consequatur animi eius id nostrum asperiores.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Projects;
