"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { localFontSize } from "@/app/_utils/themes";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
// import { title } from "process";

interface ArrowProps {
  onClick?: () => void;
  // style?: CSSProperties;
  // className?: string;
}
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  // const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        right: "15%",
        // top: "50%",

        bottom: "-12%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={onClick}
      className="custom-arrow prev"
    >
      <Image
        src={svgs.blackarrow}
        alt="whitearrow"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  // const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        left: "15%",
        bottom: "-12%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        cursor: "pointer",
      }}
      onClick={onClick}
      className="custom-arrow next"
    >
      <Image
        src={svgs.whitearrow}
        alt="whitearrow"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};

const dataRedefiningYourSmile = [
  {
    image: pngs.resImage,
    title: " Excellence, Crafted Locally",

    description:
      "Bringing each smile to life is my passion. I have diverse experience to ensures exceptional quality to ensure the best treatment is given to the patients.",
  },

  {
    image: pngs.resImage2,
    title: " Smiles Beyond Compare",

    description:
      "I am not just practicing cosmetic dentistry; I am pioneering it. My unique approach crafts the most coveted smiles, setting new benchmarks.",
  },
  {
    image: pngs.resImage3,
    title: "The Art of Your Smile",

    description:
      "Discover the transformative power of a custom smile at Dr. Qasim's Clinic. I integrate the best of both worlds – advanced digital technology and expert analog craftsmanship.",
  },
];

const RedefiningYourSmile = () => {
  const chunkedServices = [];
  for (let i = 0; i < dataRedefiningYourSmile.length; i += 2) {
    chunkedServices.push(dataRedefiningYourSmile.slice(i, i + 2));
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    customPaging: () => (
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          // backgroundColor: "transparent",
        }}
      />
    ),
  };
  return (
    <Box
      sx={{
        backgroundColor: { xs: "#80858633", sm: "#fff" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",

          padding: {
            xs: "40px 0px",
            sm: "50px 0px",
            md: "60px 0px",
            lg: "80px 00px",
            xl: "120px 0px",
          },
          display: { xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column" },
          // gap: { xs: "40px", md: "60px" },
          height: "auto",
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "500px", sm: "796px" },
            width: "100%",
            fontSize: localFontSize.h3,
            fontWeight: 600,
            px: "20px",
            textAlign: "center",
            display: { xs: "block" },
            textTransform: "capitalize",
            mb: { xs: "10px", md: "20px" },
          }}
        >
          Redefining Your Smile
        </Typography>
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "500px", sm: "796px" },
            px: { xs: "40px", lg: "0" },
            width: "100%",
            textAlign: "center",
            display: { xs: "none", sm: "block" },
            color: "#010C0D80",
            fontSize: localFontSize.p3,
          }}
        >
          Experience the perfect blend of artistry and advanced dental
          technology at Dr. Qasim&apos;s Clinic. I combine traditional
          craftsmanship with cutting-edge techniques to provide restorative
          dentistry.
        </Typography>
        <Typography
          sx={{
            maxWidth: { xs: "500px", sm: "796px" },
            px: { xs: "20px", lg: "0" },

            width: "100%",
            textAlign: "center",
            display: { xs: "block", sm: "none" },
            color: "#010C0D80",
            fontSize: localFontSize.p3,
          }}
        >
          Experience the perfect blend of artistry and advanced dental
          technology at Dr. Qasim&apos;s Clinic.
        </Typography>

        <Box
          maxWidth={480}
          width="100%"
          height="100%"
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: "20px", sm: "40px", md: "60px" },
            // pb: "20px",
          }}
        >
          <Box
            width="100%"
            height="100%"
            sx={{
              display: { xs: "block", sm: "none" },
              position: "relative", // add this
              mx: "auto 0",
              paddingBottom: "40px", // space for dots & arrows
            }}
          >
            <Slider {...settings}>
              {dataRedefiningYourSmile.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "480px",
                    mb: "60px",
                    mx: "auto",
                    // pb: "40px",
                    // textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: "480px",
                      height: "320px",
                      mb: "16px",
                      // position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt="image"
                      // fill
                      // style={{  }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: localFontSize.p1,
                      fontWeight: 700,
                      color: "#010C0D",
                      mb: "4px",
                      px: "20px",
                      // textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: localFontSize.p5,
                      color: "#010C0D80",
                      px: "20px",

                      // textTransform: "uppercase",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "start",
            mt: { xs: "20px", sm: "40px", md: "60px" },
            gap: { sm: "20px", lg: "0" },
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          {dataRedefiningYourSmile.map((item, index) => (
            <Box
              data-aos="zoom-in"
              data-aos-duration="500"
              key={index}
              sx={{
                width: "100%",
                maxWidth: { sm: "400px", md: "480px" },
                // height: "410px",
                // height: { sm: "400px", md: "auto" },

                display: {
                  xs: index === 0 ? "block" : "none",
                  sm: "block",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { sm: "400px", md: "480px" },
                  // height: { sm: "220px", md: "320px" },
                  mb: { xs: "16px", sm: "20px" },
                }}
              >
                <Image
                  src={item.image}
                  alt="image"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: localFontSize.p1,
                  fontWeight: 700,
                  color: "#010C0D",
                  mb: "5px",
                  // textTransform: "uppercase",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: localFontSize.p5,
                  color: "#010C0D80",
                  // textTransform: "uppercase",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default RedefiningYourSmile;
