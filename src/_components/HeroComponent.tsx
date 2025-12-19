"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
// import { localFontSize, sectionPadding } from "@/utils/themes";
import { Box, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
// import React from "react";
import React from "react";
// import ButtonComponent from "./ButtonComponent";
// import AOS from "aos";
// import "aos/dist/aos.css";

interface HeroProps {
  mobileBg?: string | StaticImageData;
  pcBg?: string | StaticImageData;
  title?: string;
  description?: string;
  descriptionMob?: string;
  titleMob?: string;
}

// export default function HeroComponent({

export default function HeroComponent({
  mobileBg,
  pcBg,
  title,
  description,
  descriptionMob,
  titleMob,
}: HeroProps) {
  //

  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        backgroundImage: {
          xs: `url(${mobileBg})`,
          md: `url(${pcBg})`,
        },
        // bgcolor: "#ccc",
        backgroundPosition: { xs: "center", sm: "center", md: "cover" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // width: "100vw",
        height: { xs: "calc(100vh - 89px)", md: "auto" },

        display: "flex",
      }}
    >
      <Box
        // data-aos="zoom-in"
        // data-aos-duration="500"
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="600"
          sx={{
            padding: { xs: "20px", md: "40px 60px" },
            bgcolor: "#010C0DB2",
            maxWidth: { xs: "500px", sm: "600px", md: "700px" },
            width: "100%",
            margin: { xs: "auto", md: "initial" },
            textAlign: { xs: "center", sm: "initial" },
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.h1,
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#fff",
              marginBottom: { xs: "10px", md: "14px" },
              display: { xs: "none", md: "block" },
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: localFontSize.h1,
              fontWeight: "600",
              textTransform: "capitalize",
              color: "#fff",
              display: { xs: "block", md: "none" },
              marginBottom: { xs: "10px", md: "14px" },
            }}
          >
            {titleMob}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: "400",
              color: "#FFFFFF80",
              display: { xs: "none", md: "block" },

              // marginBottom: { xs: "20px", md: "30px" },
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: "400",
              color: "#FFFFFF80",
              display: { xs: "block", md: "none" },
            }}
          >
            {descriptionMob}
          </Typography>
          {/* <Box sx={{}}>
            <ButtonComponent
              label="Make Appointment"
              background="#ccc"
              color="#010C0D"
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
