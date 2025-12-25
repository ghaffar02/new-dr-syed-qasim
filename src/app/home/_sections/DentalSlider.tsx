"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import pngs from "@/_assets/pngs";
import svgs from "@/_assets/svgs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import ButtonComponent from "@/_components/ButtonComponent";

interface ArrowProps {
  onClick?: () => void;
}

interface SliderCardData {
  image: StaticImageData;
  icon: StaticImageData | string;
  heading: string;
  text: string;
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    slideRefs.current.forEach((ref, index) => {
      if (ref) {
        const slideElement = ref.closest(".slick-slide");
        if (slideElement) {
          if (hoveredIndex === index) {
            slideElement.classList.add("dental-slide-hovered");
          } else {
            slideElement.classList.remove("dental-slide-hovered");
          }
        }
      }
    });
  }, [hoveredIndex]);

  const sliderData: SliderCardData[] = [
    {
      image: pngs.dentalSlider1,
      icon: svgs.teethc,
      heading: "Luxe Composite Bonding",
      text: "Luxe Composite Bonding is a minimally invasive cosmetic treatment.",
    },
    {
      image: pngs.dentalSlider2,
      icon: svgs.sensitivity,
      heading: "Composite bonding",
      text: "Enhance your smile with precision and care through our expert composite bonding service.",
    },
    {
      image: pngs.dentalSlider3,
      icon: svgs.whitening,
      heading: "Porcelain veneers",
      text: "Dr Syed Qasim’s clinic offer custom-crafted veneers that cover imperfections.",
    },
    {
      image: pngs.dentalSlider4,
      icon: svgs.braces,
      heading: "Invisalign",
      text: "Achieve a beautifully aligned smile without the discomfort of traditional braces.",
    },
    {
      image: pngs.dentalSlider5,
      icon: svgs.suction,
      heading: "surgical dentistry",
      text: "Restore your smile with confidence through our advanced implant and surgical dental solutions.",
    },
    {
      image: pngs.dentalSlider6,
      icon: svgs.brushing,
      heading: "Full mouth rehabilitation",
      text: "Restore your smile and confidence with full mouth rehabilitation.",
    },
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
        className={`dental-slider-container ${
          hoveredIndex !== null ? "has-hovered-card" : ""
        }`}
      >
        <Slider {...settings}>
          {sliderData.map((card, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <Box
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  slideRefs.current[index] = el;
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 10px",
                  transition: "padding 0.4s ease-in-out",
                  flexShrink: 0,
                }}
              >
                <Box
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    width: "270px",
                    height: "353px",
                    position: "relative",
                    cursor: "pointer",
                    overflow: "hidden",
                    borderRadius: "20px",
                    transition: "width 0.4s ease-in-out",
                    margin: "auto",
                  }}
                >
                  {/* Image Container - Full Width */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={`Dental slider image ${index + 1}`}
                      fill
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        width: "100%",
                        objectPosition: "center right",
                      }}
                    />
                  </Box>

                  {/* Hover Box */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      transform: isHovered ? "" : "translateX(100%)",
                      height: "100%",
                      backgroundColor: "#010C0D80",
                      opacity: isHovered ? 1 : 0,
                      transition: "all 0.3s ease-in-out",
                      overflow: "hidden",
                      padding: "20px 25px",
                      borderRadius: "20px",
                      "& > :not(:last-child)": {
                        marginBottom: "12px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        padding: "10px",
                        backgroundColor: "#fff",
                        borderRadius: "6px",
                        overflow: "hidden",
                        width: "fit-content",
                      }}
                    >
                      <Image
                        style={{ width: "30px", height: "30px" }}
                        src={card.icon}
                        alt="icon"
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: "#D8B282",
                        fontSize: localFontSize.p1,
                        fontWeight: "700",
                        textTransform: "capitalize",
                      }}
                    >
                      {card.heading}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: localFontSize.p5,
                      }}
                    >
                      {card.text}
                    </Typography>
                    <ButtonComponent
                      imgSrc={svgs.arrowright}
                      label="Read More"
                      sx={{
                        color: "#D8B282",
                        padding: { md: "5px 10px ", lg: "15px 40px" },
                        backgroundColor: "#FFFFFF",
                        fontSize: localFontSize.p5,
                        fontWeight: "400",
                        borderRadius: "10px",
                        border: "unset",
                        width: "100%",
                        height: "50px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
