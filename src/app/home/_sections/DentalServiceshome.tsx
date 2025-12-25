"use client";
import React, { useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const services = [
    {
      icon: svgs.teethc,
      hoverdIcon: svgs.dentalServicesIconWhite1,
      title: "Luxe Composite Bonding",
      description:
        "Luxe Composite Bonding is a minimally invasive cosmetic treatment.",
    },
    {
      icon: svgs.sensitivity,
      hoverdIcon: svgs.dentalServicesIconWhite2,
      title: "Composite Bonding",
      description:
        "Enhance your smile with precision and care through my expert composite bonding service.",
    },
    {
      icon: svgs.whitening,
      hoverdIcon: svgs.dentalServicesIconWhite3,
      title: "Porcelain Veneers",
      description:
        "Dr Syed Qasim’s clinic offer custom-crafted veneers that cover imperfections.",
    },
    {
      icon: svgs.braces,
      hoverdIcon: svgs.dentalServicesIconWhite4,
      title: "Invisalign",
      description:
        "Achieve a beautifully aligned smile without the discomfort of traditional braces.",
    },
    {
      icon: svgs.suction,
      hoverdIcon: svgs.dentalServicesIconWhite5,
      title: "Surgical Dentistry",
      description:
        "Restore your smile with confidence through our advanced implant and surgical dental solutions.",
    },
    {
      icon: svgs.brushing,
      hoverdIcon: svgs.dentalServicesIconWhite6,
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
          paddingBottom: "0px !important",
          display: { xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column" },
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
              position: "relative",
              paddingBottom: "40px",
              alignItems: { xs: "center" },
              display: { xs: "block", sm: "none" },
            }}
          >
            <Slider {...settings}>
              {services.map((items, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <Grid
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
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
                      backgroundColor: isHovered ? "#D8B282" : "transparent",
                      transition: "background-color 0.3s ease",
                      cursor: "pointer",
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
                          src={isHovered ? items.hoverdIcon : items.icon}
                          alt="image InfoSection"
                        />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: localFontSize.p1,
                          fontWeight: "700",
                          width: "100%",
                          textAlign: "center",
                          color: isHovered ? "#fff" : "#010C0D",
                          m: { xs: "20px 0" },
                          transition: "color 0.3s ease",
                        }}
                      >
                        {items.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: localFontSize.p3,
                          fontWeight: "400",
                          textAlign: "center",
                          color: isHovered ? "#FFFFFF80" : "#010C0D80",
                          mb: { xs: "20px" },
                          transition: "color 0.3s ease",
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
              const isHovered = hoveredIndex === index;
              return (
                <Grid
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  // data-aos="zoom-in"
                  // data-aos-duration="500"
                  key={index}
                  size={{ sm: 6, lg: 4 }}
                  sx={{
                    backgroundColor: isHovered ? "#D8B282" : "#D8B2820D",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { sm: "30px 20px", md: "40px 30px", lg: "50px 40px" },
                    height: { sm: "370px", md: "413px", lg: "430px" },
                    maxWidth: { sm: "100%", lg: "380px" },
                    transition: "all 0.4s ease-in-out",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      maxWidth: { sm: "100%", lg: "380px" },
                      margin: "auto 0",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: { sm: 80 },
                        height: 80,
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
                        src={isHovered ? items.hoverdIcon : items.icon}
                        alt="image InfoSection"
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: localFontSize.p1,
                        fontWeight: "700",
                        width: "100%",
                        textAlign: "center",
                        color: isHovered ? "#fff" : "#010C0D",
                        m: { sm: "20px 0" },
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: { sm: 1, md: 1 },
                        WebkitBoxOrient: "vertical",
                        transition: "color 0.3s ease",
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
                        color: isHovered ? "#FFFFFF80" : "#010C0D80",
                        mb: { xs: "20px" },
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        transition: "color 0.3s ease",
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
