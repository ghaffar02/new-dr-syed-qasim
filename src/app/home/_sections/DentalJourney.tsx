import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import calander from "@/_assets/svgs/calander.svg";
import expert from "@/_assets/svgs/expert.svg";
import teeth from "@/_assets/svgs/teeth.svg";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import svgs from "@/_assets/svgs";
// import ButtonComponent from "@/_components/ButtonComponent";

const DoctorJourney = () => {
  const featuresData = [
    {
      icon: calander,
      iconMob: svgs.iconmob3,
      title: "Make Appointment",
      description:
        "Select a time and take the first step toward a healthier, brighter smile.",
      borderTop: false,
      borderBottom: false,
    },
    {
      icon: expert,
      iconMob: svgs.iconmob2,

      title: "Expert Dental Care",
      description:
        "Experience top-quality dental services with a gentle touch.",
      borderTop: true,
      borderBottom: true,
    },
    {
      icon: teeth,
      iconMob: svgs.iconmob,

      title: "Radiate Confidence",
      description: "Show off your best smile with expert care.",
      borderTop: false,
      borderBottom: true,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#80858633" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            mb: { xs: "30px", sm: "40px", md: "80px" },
            fontSize: localFontSize.h3,
            fontWeight: 600,
            textAlign: { xs: "center", md: "start" },
          }}
        >
          Journey To A Healthy Smile
        </Typography>
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            display: { xs: "block", md: "none" },
            color: "#010C0D80",
            fontSize: localFontSize.p3,
            textAlign: { xs: "center", md: "start" },
          }}
        >
          I offer expert dental care tailored to keep your smile healthy,
          bright, and confident.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "start",
            justifyContent: "space-between",
            gap: { xs: "0", md: "20px" },
            // mb: "40px",
          }}
        >
          {featuresData.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
              key={index}
            >
              <Box
                data-aos="zoom-in"
                data-aos-duration="500"
                sx={{
                  maxWidth: { xs: "100%", md: "330px" },
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: { xs: "center", md: "start" },
                  gap: { xs: "20px", md: "0px" },
                  pt: { xs: "20px", md: "0px" },
                  pb: { xs: "20px", md: "0px" },
                  borderTop: item.borderTop
                    ? { xs: "2px solid #CDD8D9", md: "none" }
                    : "none",
                  borderBottom: item.borderBottom
                    ? { xs: "2px solid #CDD8D9", md: "none" }
                    : "none",
                }}
              >
                <Box
                  sx={{
                    display: { xs: "none", md: "block" },
                    height: { xs: "100px", xl: "150px" },
                    width: { xs: "100px", xl: "150px" },
                  }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Box>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                  <Image
                    src={item.iconMob}
                    alt={item.title}
                    width={78}
                    height={78}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      mt: { xs: "0px", md: "20px" },
                      mb: { xs: "8px", md: "20px" },
                      fontSize: localFontSize.p1,
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#010C0D80",
                      fontSize: localFontSize.p5,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: index === 2 ? "none" : "block" },
                  position: "absolute",
                  right: "0",
                  // top: "20%",
                  top: { xs: "50px", xl: "75px" },
                  transform: "translateY(-50%)",
                }}
              >
                <Image
                  style={{ width: "50px", height: "50px" }}
                  src={svgs.arrowright}
                  alt="arrow right"
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* <ButtonComponent label="Make Appointment" /> */}
      </Box>
    </Box>
  );
};
export default DoctorJourney;
