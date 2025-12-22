"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { localFontSize } from "@/app/_utils/themes";
import svgs from "@/_assets/svgs";

import { useTheme, useMediaQuery } from "@mui/material";

const navLinks = [
  { text: "home", route: "/" },
  { text: "about us", route: "/about-us" },
  { text: "Services", route: "/services" },
  { text: "For Dentists", route: "/for-dentists" },
  { text: "Smile Galleries", route: "/smile-galleries" },
  { text: "contact us", route: "/contact-us" },
];

const navLinksMob = [
  { text: "home", route: "/" },
  { text: "about us", route: "/about-us" },
  { text: "Services", route: "/services" },
  { text: "For Dentists", route: "/for-dentists" },
  { text: "Smile Galleries", route: "/smile-galleries" },

  { text: "contact us", route: "/contact-us" },
];

const services = [
  { text: "Luxe Composite Bonding", route: "" },
  { text: "Composite bonding", route: "" },
  { text: "Porcelain veneers", route: "" },
  { text: "Invisalign", route: "" },
  { text: "surgical dentistry", route: "" },
  { text: "Full mouth rehabilitation", route: "" },
];

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: {
            xs: "40px 20px 20px",
            sm: "50px 60px 20px",
            md: "60px 80px 60px",
            // lg: "80px 100px 20px",
            lg: "80px 150px ",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "start" },
            justifyContent: "space-between",
            // gap: { md: "30px" },
          }}
        >
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{ maxWidth: "367px", width: "100%" }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.h4,
                // paddingTop: "30px",
                fontWeight: { xs: "500", md: "900" },

                mb: "20px",
                textAlign: { xs: "center", md: "start" },
                color: { xs: "#010C0D" },
                // lineHeight: "100%",
              }}
            >
              Dr Syed Qasim
            </Typography>
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.p5,
                // paddingTop: "30px",
                pr: { md: "40px" },
                // paddingBottom: "50px",
                fontWeight: "400",
                textAlign: { xs: "center", md: "start" },
                color: "#010C0D80",
                lineHeight: "160%",
              }}
            >
              Dr Syed Qasim is a trusted name in modern dentistry, offering
              personalized care with a gentle touch.
            </Typography>

            <Box
              sx={{
                maxWidth: "152px",
                mt: { md: "32px" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                {/* {/* <Image loading="lazy" src={svgs.twitter} alt="twitter logo" /> */}
                <Image loading="lazy" src={svgs.icon1} alt="twiter logo" />
                <Image loading="lazy" src={svgs.icon2} alt="insta logo" />
                <Image loading="lazy" src={svgs.icon3} alt="youtube logo" />
              </Box>
            </Box>
          </Box>

          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              pb: { xs: "30px", md: "0px" },
              maxWidth: { md: "132px" },
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: localFontSize.p1,
                color: "#010C0D",
                pb: "30px",
                textAlign: { xs: "center", md: "start" },
                display: { xs: "none", md: "block" },
              }}
            >
              Navigation
            </Typography>

            <Box
              sx={{
                color: "#010C0D80",
                fontWeight: "400",
                display: { xs: "none", md: "flex" },
                flexDirection: { xs: "row", md: "column" },
                gap: { xs: "0px", md: "15px" },
                columnGap: { xs: "30px", md: "0px" },
                flexWrap: "wrap",
                justifyContent: { xs: "space-evenly", md: "start" },
                transition: "all 0.4s ease-in-out",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {navLinks.map((link, index) => (
                <Typography
                  key={index}
                  onClick={() => router.push(link.route)}
                  sx={{
                    fontSize: "14px",

                    color:
                      pathname ===
                      (link.route.startsWith("./")
                        ? link.route.substring(1)
                        : link.route)
                        ? "#010C0D"
                        : "#010C0D80",
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              mb: { xs: "30px", md: "0px" },
              width: "100%",
              maxWidth: "301px",
              display: { xs: "block", md: "none" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: localFontSize.p1,
                color: "#010C0D",
                pb: "30px",
                textAlign: { xs: "center", md: "start" },
                display: { xs: "block", md: "none" },
              }}
            >
              Navigation
            </Typography>

            <Box
              sx={{
                color: "#010C0D80",
                fontWeight: "400",
                display: { xs: "flex", md: "none" },
                flexDirection: { xs: "row", md: "column" },
                gap: { xs: "10px", md: "20px" },
                columnGap: { xs: "20px", md: "0px" },
                flexWrap: "wrap",
                justifyContent: { xs: "space-evenly", md: "start" },
                transition: "all 0.4s ease-in-out",
                cursor: "pointer",
                textTransform: "capitalize",
                // p: { xs: "20px", md: "0px" },
                maxWidth: "200px",
                margin: "auto",
              }}
            >
              {navLinksMob.map((link, index) => (
                <Typography
                  key={index}
                  onClick={() => router.push(link.route)}
                  sx={{
                    fontSize: "14px",

                    color:
                      pathname ===
                      (link.route.startsWith("./")
                        ? link.route.substring(1)
                        : link.route)
                        ? "#010C0D"
                        : "#010C0D80",
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              pb: {
                xs: "30px",
                md: "0px",
              },
              maxWidth: { md: "190px" },
              width: "100%",
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: localFontSize.p1,
                color: "#010C0D",
                pb: "30px",
                textAlign: { xs: "center", md: "start" },
                display: { xs: "none", md: "block" },
              }}
            >
              Services
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                fontSize: "14px",
                color: "#010C0D80",
                fontWeight: "400",
                flexDirection: { xs: "row", md: "column" },
                gap: { xs: "0px", md: "15px" },
                columnGap: { xs: "30px", md: "0px" },
                flexWrap: "wrap",
                justifyContent: { xs: "space-evenly", md: "start" },
                transition: "all 0.4s ease-in-out",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {services.map((link, index) => (
                <Typography
                  key={index}
                  onClick={() => router.push(link.route)}
                  sx={{
                    fontSize: "14px",

                    color:
                      pathname ===
                      (link.route.startsWith("./")
                        ? link.route.substring(1)
                        : link.route)
                        ? "#010C0D"
                        : "#010C0D80",
                  }}
                >
                  {link.text}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box
            data-aos={isMobile ? "fade-left" : "zoom-in"}
            data-aos-duration="500"
            sx={{
              display: { xs: "none", md: "block" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { md: "220px" },
              width: "100%",
              pb: { xs: "30px", md: "0px" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: localFontSize.p1,
                color: "#010C0D",
                pb: "30px",
                textTransform: { xs: "capitalize", md: "none" },
                textAlign: { xs: "center", md: "start" },
              }}
            >
              Contact Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "24px", md: "15px" },
                alignItems: { xs: "start", md: "start" },
                justifyContent: "start",
                width: { xs: "244px", md: "100%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "20px",
                }}
              >
                <Image src={svgs.call} alt="phone image" />
                <Typography sx={{ fontSize: "14px", color: "#010C0D80" }}>
                  +44 7577 473042
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "20px",
                }}
              >
                <Image src={svgs.address2} alt="address image" />
                <Typography sx={{ fontSize: "14px", color: "#010C0D80" }}>
                  Apollo taxis, Sheffield, United Kingdom, S5
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: "20px",
                }}
              >
                <Image src={svgs.mail2} alt="mail image" />
                <Typography sx={{ fontSize: "14px", color: "#010C0D80" }}>
                  info@drsyedqasim.co.uk
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-duration="500"
          sx={{
            // textAlign: "center",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            justifyContent: {
              xs: "center",
            },
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: localFontSize.p1,
              color: "#010C0D",
              pb: "30px",
              textTransform: { xs: "capitalize", md: "none" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Contact Us
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
              // flexWrap: "wrap",
              gap: "24px",
              width: "244px",
              // textAlign: "center",
              // alignItems: "center",
              justifyContent: {
                xs: "center",
                // sm: "space-between",
                md: "center",
              },
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                gap: "20px",
              }}
            >
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Image src={svgs.phone} alt="phone logo" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: localFontSize.p3,
                    color: "#010C0D80",
                  }}
                >
                  PHONE
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: localFontSize.p3,
                    color: "#010C0D80",
                  }}
                >
                  +44 7577 473042
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Image src={svgs.email} alt="email logo" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "500",
                    fontSize: localFontSize.p3,
                    color: "#010C0D80",
                  }}
                >
                  Email
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: localFontSize.p3,
                    color: "#010C0D80",
                  }}
                >
                  info@drsyedqasim.com.uk
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Image src={svgs.address} alt="location logo" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    textTransform: "capitalize",

                    fontWeight: "500",
                    fontSize: localFontSize.p3,
                    color: "#010C0D80",
                  }}
                >
                  ADRESS
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: localFontSize.p3,
                    color: "#010C0D80",
                  }}
                >
                  Apollo taxis, Sheffield, United Kingdom, S5
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          padding: {
            xs: "20px 20px ",
            sm: "30px 60px ",
            md: "30px 80px ",
            lg: "30px 100px ",
            xl: "30px 150px ",
          },
          display: { xs: "flex" },
          flexWrap: "wrap",
          gap: { xs: "10px", md: "30px" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", md: "start" },
          bgcolor: { xs: "#80858633", md: "#010C0D" },
          // height: "70px",
        }}
      >
        <Typography
          sx={{
            fontSize: localFontSize.p4,
            color: { xs: "#010C0D80", md: "#fff" },
            textAlign: { xs: "center", md: "start" },

            "& a": {
              transition: "all 0.4s ease-in-out",
              color: "#8B0000",
              "&:hover": {
                color: "#8B0000",
              },
            },
          }}
        >
          Copyrigt © 2024 Dr Syed Qasim | Design by Qasnova
        </Typography>
        <Typography
          sx={{
            fontSize: localFontSize.p4,
            color: { xs: "#010C0D", md: "#fff" },
            textAlign: { xs: "center", md: "start" },

            "& a": {
              transition: "all 0.4s ease-in-out",
              color: "#8B0000",
              "&:hover": {
                color: "#8B0000",
              },
            },
          }}
        >
          Terms of Use | Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
