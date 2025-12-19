"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import svgs from "@/_assets/svgs";

import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

// import { CSSProperties } from "react";

interface ArrowProps {
  onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  // const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        right: "9%",
        // top: "50%",

        bottom: "-13.8%",
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
        left: "9%",
        bottom: "-13.8%",
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

export default function DentalServiceshome() {
  const services = [
    {
      icon: svgs.teethc,
      title: "Luxe Composite Bonding",
      description:
        "Luxe Composite Bonding is a minimally invasive cosmetic treatment.",
    },
    {
      icon: svgs.sensitivity,
      title: "Composite Bonding",
      description:
        "Enhance your smile with precision and care through my expert composite bonding service.",
    },
    {
      icon: svgs.whitening,
      title: "Porcelain Veneers",
      description:
        "Dr Syed Qasim’s clinic offer custom-crafted veneers that cover imperfections.",
    },
    {
      icon: svgs.braces,
      title: "Invisalign",
      description:
        "Achieve a beautifully aligned smile without the discomfort of traditional braces.",
    },
    {
      icon: svgs.suction,
      title: "Surgical Dentistry",
      description:
        "Restore your smile with confidence through our advanced implant and surgical dental solutions.",
    },
    {
      icon: svgs.brushing,
      title: "Full Mouth Rehabilitation",
      description:
        "Restore your smile, function, and confidence with comprehensive full mouth rehabilitation.",
    },
  ];
  const chunkedServices = [];
  for (let i = 0; i < services.length; i += 2) {
    chunkedServices.push(services.slice(i, i + 2));
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
        backgroundColor: {
          xs: "#fff",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
          display: { xs: "flex" },
          justifyContent: "center",

          alignItems: "center",
          flexDirection: { xs: "column" },
          // gap: { xs: "40px", md: "60px" },
        }}
      >
        {/* <Box
          sx={{
            maxWidth: "796px",
            display: { xs: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column" },
            gap: { xs: "20px", md: "20px" },
          }}
        > */}

        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "500px", sm: "796px" },
            width: "100%",
            fontSize: localFontSize.h3,
            fontWeight: 600,
            textAlign: "center",
            display: { xs: "block" },
            textTransform: "capitalize",
            mb: { xs: "10px", md: "20px" },
          }}
        >
          Dental Services
        </Typography>
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "500px", sm: "796px" },

            width: "100%",
            textAlign: "center",
            display: { xs: "block" },
            color: "#010C0D80",
            fontSize: localFontSize.p3,
          }}
        >
          I offer expert dental care tailored to keep your smile healthy,
          bright, and confident. From routine checkups to advanced treatments,
          your comfort and satisfaction are our top priority.
        </Typography>

        {/* </Box> */}
        <Box
          sx={{
            width: "100%",
            display: { xs: "block", sm: "none" },
            textAlign: "center",
            mt: { xs: "40px", md: "60px" },
          }}
        >
          <Grid
            container
            width="100%"
            height="100%"
            justifyContent="center"
            sx={{
              position: "relative", // add this
              paddingBottom: "40px", // space for dots & arrows
              alignItems: { xs: "center" },
              display: { xs: "block", sm: "none" },
            }}
          >
            <Slider {...settings}>
              {services.map((items, index) => {
                return (
                  <Grid
                    key={index}
                    size={{ xs: 12, sm: 6, lg: 4 }}
                    sx={{
                      mb: "50px",
                      border: { xs: "1px solid #80858633", sm: "none" },
                      width: "100%",
                      maxWidth: "380px",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "413px",
                      p: "50px 40px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: { xs: "380px" },
                        // height: { xs: "300" },
                        margin: "auto 0",
                      }}
                    >
                      <Box
                        sx={{
                          maxWidth: { sm: 80 },
                          height: 80,
                          // width: "100%",
                          m: "auto",
                        }}
                      >
                        <Image
                          style={{
                            textAlign: "center",
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                            borderRadius: "20px",
                          }}
                          src={items.icon}
                          alt="image InfoSection"
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: localFontSize.p1,
                          fontWeight: "700",
                          width: "100%",
                          textAlign: "center",
                          color: "#010C0D",
                          m: { xs: "20px 0" },
                        }}
                      >
                        {items.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: localFontSize.p3,
                          fontWeight: "400",
                          textAlign: "center",
                          color: "#010C0D80",
                          mb: { xs: "20px" },
                        }}
                      >
                        {items.description}
                      </Typography>
                    </Box>

                    <ButtonComponent label="Read More" sx={{ m: "auto" }} />
                  </Grid>
                );
              })}
            </Slider>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: { xs: "none", sm: "block" },
            mt: { xs: "30px", md: "60px" },
          }}
        >
          <Grid
            container
            width="100%"
            height="100%"
            justifyContent="center"
            sx={{
              alignItems: { sm: "center" },
            }}
          >
            {services.map((items, index) => {
              return (
                <Grid
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  key={index}
                  size={{ sm: 6, lg: 4 }}
                  sx={{
                    // hight: 400,
                    // borderTop: {
                    //   sm: index < 2 ? "1px solid #80858633" : "none",
                    //   lg: index < 3 ? "1px solid #80858633" : "none", // 3 columns for lg
                    // },
                    // borderLeft: {
                    //   sm: index % 2 === 0 ? "1px solid #80858633" : "none",
                    //   lg: index % 3 === 0 ? "1px solid #80858633" : "none", // 3 columns on lg
                    // },
                    // borderRight: {
                    //   sm:
                    //     index % 2 === 0
                    //       ? "1px solid #80858633"
                    //       : "1px solid #80858633",
                    //   lg: "1px solid #80858633",
                    // },

                    // borderBottom: "1px solid #80858633",
                    backgroundColor: "#D8B2820D",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { sm: "30px 20px", md: "40px 30px", lg: "50px 40px" },
                    height: { sm: "370px", md: "413px", lg: "430px" },
                    maxWidth: { sm: "100%", lg: "380px" },
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: { sm: "100%", lg: "380px" },
                      // height: { sm: "413px", lg: "300px" },
                      // height: { sm: "285px", md: "260px", lg: "270px" },
                      margin: "auto 0",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: { sm: 80 },
                        height: 80,
                        // width: "100%",
                        m: "auto",
                      }}
                    >
                      <Image
                        style={{
                          textAlign: "center",
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                          borderRadius: "20px",
                        }}
                        src={items.icon}
                        alt="image InfoSection"
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: localFontSize.p1,
                        fontWeight: "700",
                        width: "100%",
                        textAlign: "center",
                        color: "#010C0D",
                        m: { sm: "20px 0" },
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: { sm: 1, md: 1 }, // set number of lines to show
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {items.title}
                    </Typography>
                    <Typography
                      sx={{
                        height: "81px",
                        fontSize: localFontSize.p4,
                        fontWeight: "400",
                        textAlign: "center",
                        color: "#010C0D80",
                        mb: { xs: "20px" },
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 3, // set number of lines to show
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {items.description}
                    </Typography>
                  </Box>
                  <Box height={64}>
                    <ButtonComponent label="view more" sx={{ m: "auto" }} />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
