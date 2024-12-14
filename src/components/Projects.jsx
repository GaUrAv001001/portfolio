// import React from "react";
// import { Grid } from "@mui/material";
// import reactLogo from "../assets/reactLogo.png";
// import python from "../assets/python.png"
// import { Link } from "react-router-dom";

// const Projects = () => {
//   return (
//     <>
//       <div className="mt-80 flex-col mx-10 text-white text-4xl flex justify-center items-center">
//         <div className="mb-28">
//           <h1 className="text-5xl flex justify-center items-center">
//             Projects
//           </h1>
//         </div>
//         <div className="">
//           <Grid container spacing={4}>
//             <Grid item xs={4}>
//               <div className="bg-[#4e4e4e] cursor-pointer mx-10 p-1 rounded transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
//                 <div className="flex justify-center items-center">
//                   <img
//                     className=" h-52 w-52 object-contain"
//                     src={reactLogo}
//                     alt="img"
//                   />
//                 </div>
//                 <h1 className="text-xl font-semibold m-2">PhotoG</h1>
//                 <p className="text-lg m-2">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Repellendus consequatur animi eius id nostrum asperiores.
//                 </p>
//                 <div className="m-2 text-end">
//                   <Link className="text-sm m-2 text-white rounded">
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={4}>
//             <div className="bg-[#4e4e4e] cursor-pointer mx-10 p-1 rounded transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
//                 <div className="flex justify-center items-center">
//                   <img
//                     className=" h-52 w-52 object-contain"
//                     src={python}
//                     alt="img"
//                   />
//                 </div>
//                 <h1 className="text-xl font-semibold m-2">Customer Segmentation</h1>
//                 <p className="text-lg m-2">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Repellendus consequatur animi eius id nostrum asperiores.
//                 </p>
//                 <div className="m-2 text-end">
//                   <Link className="text-sm m-2 text-white rounded">
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={4}>
//             <div className="bg-[#4e4e4e] cursor-pointer mx-10 p-1 rounded transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
//                 <div className="flex justify-center items-center">
//                   <img
//                     className=" h-52 w-52 object-contain"
//                     src={reactLogo}
//                     alt="img"
//                   />
//                 </div>
//                 <h1 className="text-xl font-semibold m-2">Seed Data</h1>
//                 <p className="text-lg m-2">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Repellendus consequatur animi eius id nostrum asperiores.
//                 </p>
//                 <div className="m-2 text-end">
//                   <Link className="text-sm m-2 text-white rounded">
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </Grid>
//             <Grid item xs={4}>
//             <div className="bg-[#4e4e4e] cursor-pointer mx-10 p-1 rounded transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
//                 <div className="flex justify-center items-center">
//                   <img
//                     className=" h-52 w-52 object-contain"
//                     src={python}
//                     alt="img"
//                   />
//                 </div>
//                 <h1 className="text-xl font-semibold m-2">Webscrapper</h1>
//                 <p className="text-lg m-2">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Repellendus consequatur animi eius id nostrum asperiores.
//                 </p>
//                 <div className="m-2 text-end">
//                   <Link className="text-sm m-2 text-white rounded">
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Projects;



// code 3

// import React from "react";
// import { Grid, Typography } from "@mui/material";
// import reactLogo from "../assets/reactLogo.png";
// import python from "../assets/python.png";
// import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";


// const Projects = () => {
//   const cardData = [
//     {
//       id: 1,
//       title: "PhotoG",
//       description:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
//       image: reactLogo,
//       linkText: "Learn More",
//     },
//     {
//       id: 2,
//       title: "Customer Segmentation",
//       description:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
//       image: python,
//       linkText: "Learn More",
//     },
//     {
//       id: 3,
//       title: "Seed Data",
//       description:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
//       image: reactLogo,
//       linkText: "Learn More",
//     },
//     {
//       id: 4,
//       title: "Webscrapper",
//       description:
//         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
//       image: python,
//       linkText: "Learn More",
//     },
//   ];
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,         // Enable autoplay
//     autoplaySpeed: 500, 
//   };

//   return (
//     <div className="mt-20 mx-10 text-white text-4xl">
//       <div className="mb-16 text-center">
//         <Typography variant="h3" component="h1">
//           Projects
//         </Typography>
//       </div>
//       <Slider {...settings}>
//       <Grid container spacing={4} justifyContent="center">
//         {cardData.map((card) => (
//           <Grid key={card.id} item xs={12} sm={6} md={4} lg={3}>
//             <div className="bg-[#4e4e4e] cursor-pointer p-4 rounded-lg transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
//               <div className="flex justify-center items-center mb-4">
//                 <img
//                   className="h-40 w-40 object-contain"
//                   src={card.image}
//                   alt={card.title}
//                 />
//               </div>
//               <Typography variant="h6" component="h2" className="text-xl font-semibold mb-2">
//                 {card.title}
//               </Typography>
//               <Typography variant="body1" component="p" className="mb-4">
//                 {card.description}
//               </Typography>
//               <div className="text-right">
//                 <Link className="text-sm text-white rounded underline">
//                   {card.linkText}
//                 </Link>
//               </div>
//             </div>
//           </Grid>
//         ))}
//       </Grid>
//       </Slider>
//     </div>
//   );
// };

// export default Projects;



// code 4


import React from "react";
import { Grid, Typography } from "@mui/material";
import reactLogo from "../assets/reactLogo.png";
import python from "../assets/python.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const cardData = [
    {
      id: 1,
      title: "PhotoG",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
      image: reactLogo,
      linkText: "Learn More",
    },
    {
      id: 2,
      title: "Customer Seg..",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
      image: python,
      linkText: "Learn More",
    },
    {
      id: 3,
      title: "Seed Data",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
      image: reactLogo,
      linkText: "Learn More",
    },
    {
      id: 4,
      title: "Webscrapper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus consequatur animi eius id nostrum asperiores.",
      image: python,
      linkText: "Learn More",
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true, 
  //   autoplaySpeed: 3000,
  // };


  const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // for devices with width less than 1024px
      settings: {
        slidesToShow: 2, // show 2 cards
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600, // for devices with width less than 600px
      settings: {
        slidesToShow: 1, // show 1 card
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <div className="mt-48 mx-10 text-white text-4xl min-h-screen">
      <div className="mb-28 text-center  flex justify-center items-center flex-col">
        <h1 className="text-6xl text-orange-500 my-3 " style={{ fontFamily: "'Playfair Display', serif" }}>
          Projects
        </h1>
        <p className="border-b-4 border-orange-500 w-[10%]"></p>
      </div>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id} className="bg-[#4e4e4e] cursor-pointer p-4 rounded-lg transition duration-300 hover:translate-y-[-5px] hover:shadow-lg">
            <div className="flex justify-center items-center mb-4">
              <img
                className="h-40 w-40 object-contain"
                src={card.image}
                alt={card.title}
              />
            </div>
            <Typography variant="h6" component="h2" className="text-xl font-semibold mb-2">
              {card.title}
            </Typography>
            <Typography variant="body1" component="p" className="mb-4">
              {card.description}
            </Typography>
            <div className="text-right">
              <Link className="text-sm text-white rounded underline">
                {card.linkText}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
