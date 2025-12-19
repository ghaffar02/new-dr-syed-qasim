"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { sectionPadding } from "@/app/_utils/themes";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="dental-slider-arrow next">
      <Image
        src={svgs.sliderArrow}
        alt="next arrow"
        style={{ width: "16px", height: "auto" }}
      />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="dental-slider-arrow prev">
      <Image
        src={svgs.sliderArrow}
        alt="prev arrow"
        style={{ width: "16px", height: "auto", transform: "rotate(180deg)" }}
      />
    </div>
  );
};

export default function DentalSlider() {
  const sliderImages = [
    pngs.dentalSlider1,
    pngs.dentalSlider2,
    pngs.dentalSlider3,
    pngs.dentalSlider4,
    pngs.dentalSlider1,
    pngs.dentalSlider2,
    pngs.dentalSlider3,
    pngs.dentalSlider4,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div
        style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: "#e6e7e7",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          position: "relative",
        }}
        className="dental-slider-container"
      >
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "0 10px",
              }}
            >
              <Box
                sx={{
                  width: "270px",
                  height: "353px",
                  position: "relative",
                  margin: "0 auto",
                }}
              >
                <Box sx={{ marginX: "20px" }}>
                  <Image
                    src={image}
                    alt={`Dental slider image ${index + 1}`}
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
