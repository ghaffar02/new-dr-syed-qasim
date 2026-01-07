"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { sectionPadding, localFontSize } from "@/app/_utils/themes";
import svgs from "@/_assets/svgs";

import elizabeth from "@/_assets/svgs/elizabeth.svg";
import josh from "@/_assets/svgs/josh.svg";
import james from "@/_assets/svgs/james.svg";

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ bottom: "-6px" }}
      className="testimonials-slider-arrow next"
    >
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
    <div
      onClick={onClick}
      style={{ bottom: "-6px" }}
      className="testimonials-slider-arrow prev"
    >
      <Image
        src={svgs.sliderArrow}
        alt="prev arrow"
        style={{
          width: "16px",
          height: "auto",
          transform: "rotate(180deg)",
        }}
      />
    </div>
  );
};

const videoTestimonials = [
  {
    text: "The dentist explained everything clearly and made me feel completely at ease. The clinic is clean, modern, and well-organized.",
    image: elizabeth,
    name: "elizabeth olson",
    role: "Customer",
  },
  {
    text: "From booking the appointment to the treatment itself, everything was smooth. The staff are kind, patient, and truly care about your comfort.",
    image: josh,
    name: "Jose Turner",
    role: "Customer",
  },
  {
    text: "I was nervous about my treatment, but the dentist was very gentle and reassuring. The results were amazing, and I couldn't be happier.",
    image: james,
    name: "James Howard",
    role: "Customer",
  },
  {
    text: "The dentist explained everything clearly and made me feel completely at ease. The clinic is clean, modern, and well-organized.",
    image: elizabeth,
    name: "elizabeth olson",
    role: "Customer",
  },
  {
    text: "From booking the appointment to the treatment itself, everything was smooth. The staff are kind, patient, and truly care about your comfort.",
    image: josh,
    name: "Jose Turner",
    role: "Customer",
  },
  {
    text: "I was nervous about my treatment, but the dentist was very gentle and reassuring. The results were amazing, and I couldn't be happier.",
    image: james,
    name: "James Howard",
    role: "Customer",
  },
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        width: "100%",
        padding: sectionPadding,
        margin: "auto",
      }}
    >
      <Box sx={{ mb: { xs: "20px", md: "50px" } }}>
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            mb: { xs: "10px", md: "20px" },
            fontSize: localFontSize.h3,
            fontWeight: 700,
            color: "#010C0D",
            textTransform: { xs: "capitalize" },
            textAlign: "center",
          }}
        >
          testimonials
        </Typography>
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            color: "#010C0D80",
            fontSize: localFontSize.p3,
            textAlign: "center",
            // textTransform: "",
            display: { xs: "none", md: "block" },
          }}
        >
          I am proud to have built lasting relationships based on trust, care,
          and results. Hear directly from my patients about their experiences at
          Dr Syed Qasim’s clinic
        </Typography>
        <Typography
          sx={{
            color: "#010C0D80",
            fontSize: localFontSize.p3,
            textAlign: "center",
            display: { xs: "block", md: "none" },
          }}
        >
          Hear directly from my patients about their experiences at Dr Syed
          Qasim’s clinic
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          position: "relative",
          margin: "auto",
        }}
        className="testimonials-slider-container"
      >
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          arrows={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          customPaging={() => (
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#e6e7e7",
                bottom: "4px",
              }}
            />
          )}
          responsive={[
            {
              breakpoint: 1024,
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
          ]}
        >
          {videoTestimonials.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                width: "100%",
                padding: "0 10px",
              }}
            >
              <Box
                sx={{
                  maxWidth: "360px",
                  width: "100%",
                  margin: { xs: "auto", sm: "unset" },
                }}
              >
                <Box
                  sx={{
                    maxWidth: "367px",
                    width: "100%",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#010C0D80",
                      fontSize: localFontSize.p3,
                      textAlign: "left",
                      height: { xs: "96px", md: "108px" },
                      // ellipsis applied there
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                      overflow: "hidden",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: { xs: "20px", sm: "32px" },
                  }}
                >
                  <Image src={item.image} alt="images" />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: localFontSize.p1,
                        fontWeight: 700,
                        color: "#010C0D",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: localFontSize.p5,
                        color: "#010C0D80",
                        textTransform: "capitalize",
                      }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
export default Testimonials;
