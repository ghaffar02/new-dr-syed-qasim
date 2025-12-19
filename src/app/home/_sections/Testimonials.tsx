import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { sectionPadding, localFontSize } from "@/app/_utils/themes";

import elizabeth from "@/_assets/svgs/elizabeth.svg";
import josh from "@/_assets/svgs/josh.svg";
import james from "@/_assets/svgs/james.svg";
import pngs from "@/_assets/pngs";

const videoTestimonials = [
  {
    video: pngs.video1,
    image: elizabeth,
    name: "elizabeth olson",
    role: "Customer",
  },
  {
    video: pngs.video2,
    image: josh,
    name: "Jose Turner",
    role: "Customer",
  },
  {
    video: pngs.video3,
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
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          alignItems: "start",
          // alignContent: "center",
          flexWrap: { sm: "wrap", lg: "nowrap" },
          justifyContent: { xs: "center", lg: "space-between" },
          gap: "20px",
          // height: "auto",
          m: "auto",
        }}
      >
        {videoTestimonials.map((item, index) => (
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            key={index}
            sx={{
              display: {
                xs: index === 0 ? "block" : "none",
                md: "block",
              },
              // mx: {
              //   xs: "auto", // mobile pe center
              //   md: index - 2 ? "auto" : "unset", // ✅ only last item gets centered if wrapped
              // },
            }}
          >
            <Box
              sx={{
                maxWidth: "367px",
                width: "100%",
                height: "284px",
                marginBottom: "20px",
              }}
            >
              <Image
                src={item.video}
                alt="videos"
                style={{ width: "100%", height: "100%" }}
              />
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
        ))}
      </Box>
    </Box>
  );
};
export default Testimonials;
