"use client";
import { Box, Typography } from "@mui/material";
// import Image from "next/image";
import AOS from "aos";
// import "./globals.css";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import svgs from "@/_assets/svgs";
// import ButtonComponent from "./ButtonComponent";
import { usePathname, useRouter } from "next/navigation";
// import { localFontSize } from "@/app/_utils/themes";
import ButtonComponent from "./ButtonComponent";
import Image from "next/image";
// import { localFontSize } from "@/utils/themes";

export default function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);
  const toggleDrawer = (open: boolean) => {
    setMenu(open);
  };

  function sidebar() {
    setMenu((p) => !p);
    console.log(menu);
  }

  const navLinks = [
    { text: "home", route: "/" },
    { text: "about us", route: "/about-us" },
    { text: "Services", route: "/services" },
    { text: "For Dentists", route: "/for-dentists" },
    { text: "Smile Galleries", route: "/smile-galleries" },
  ];
  const menuNavLinks = [
    {
      src: svgs.homew,
      darkLogo: svgs.homeb,
      text: "Home",
      route: "/",
    },
    {
      src: svgs.aboutw,
      darkLogo: svgs.aboutb,
      text: "About Us",
      route: "/about-us",
    },
    {
      src: svgs.servicesw,
      darkLogo: svgs.servicesb,
      text: "Services",
      route: "/services",
    },
    {
      src: svgs.whitefor,
      darkLogo: svgs.blackfor,
      text: "For Dentists",
      route: "/for-dentists",
    },
    {
      src: svgs.fesmilew,
      darkLogo: svgs.fesmileb,
      text: "Smile Galleries",
      route: "/smile-galleries",
    },
    {
      src: svgs.contactw,
      darkLogo: svgs.contactb,
      text: "Contact Us",
      route: "/contact-us",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: { xs: "#010C0D", md: "#FFFFFF" },
        // position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 20000,
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "row-reverse", md: "row" },
          justifyContent: "space-between",
          gap: { md: "10px", lg: "18px" },
          // width: "100vw",
          padding: {
            xs: "20px",
            sm: "20px 40px",
            md: "36px 80px",
            // lg: "36px 100px",
            lg: "36px 150px",
          },
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            objectFit: "contain",
            display: { xs: "block", md: "none" },
            paddingTop: "5px",
          }}
        >
          <Image
            onClick={sidebar}
            src={svgs.logowhite}
            alt="logo"
            height={40}
            width={178}
          />
        </Box>
        <Box
          sx={{
            // width: "100%",
            maxWidth: "180px",
            // height: "40px",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            // height={51}
            width={180}
            style={{
              height: "100% !important",
              width: "100% !important",
              cursor: "pointer",
              // objectFit: "cover",
            }}
            src={svgs.logo}
            alt="logo"
          />
        </Box>

        <Box
          sx={{
            // maxWidth: { md: "484px" },
            width: 484,
            display: { md: "flex", xs: "none" },
            gap: { md: "3px", lg: "24px" },
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.4s ease-in-out",
            cursor: "pointer",
            textTransform: "capitalize",
            "&:hover": {
              color: "#010C0D",
            },
          }}
        >
          {navLinks.map((link, index) => (
            <Typography
              key={index}
              onClick={() => router.push(link.route)}
              sx={{
                fontSize: "16px",

                fontWeight:
                  pathname ===
                  (link.route.startsWith("./")
                    ? link.route.substring(1)
                    : link.route)
                    ? "700"
                    : "400",
                cursor: "pointer",
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
        <Box
          onClick={() => router.push("/contact-us")}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <ButtonComponent
            // background="transparent"
            imgSrc={svgs.arrowright}
            label="Get Started"
            // borderRadius="10px "
            sx={{
              color: "#D8B282",
              padding: { md: "5px 10px ", lg: "20px 40px" },
            }}
          />
        </Box>

        <Box onClick={sidebar} sx={{ display: { xs: "block", md: "none" } }}>
          <Image src={svgs.humbarger} alt="dr" height={40} width={34} />
        </Box>
      </Box>
      {/*  */}

      <Box
        onClick={sidebar}
        sx={{
          // bgcolor:""
          display: menu ? "block" : "none",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0px",
          left: "0px",
          zIndex: "1000",
        }}
      ></Box>
      <Box
        sx={{
          height: "100vh",
          width: { xs: "100vw", sm: "50vw" },
          position: "fixed",
          top: "0px",
          left: "0px",
          transition: "all 0.4s ease-in-out",
          transform: menu ? "translateX(0)" : "translateX(-100%)",

          zIndex: "1000",
          backgroundColor: "#010C0D",
        }}
      >
        <Box
          sx={{
            margin: { xs: "20px 20px 45px 20px", sm: "20px 40px 45px 20px" },

            textAlign: "left",
          }}
        >
          <Image
            onClick={sidebar}
            src={svgs.cross}
            alt="kashanimgclose"
            height={20}
            width={20}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            // bgcolor: "#ccc",
            gap: "10px",
          }}
        >
          {menuNavLinks.map((link, i) => (
            <Box
              onClick={() => {
                toggleDrawer(false);
                router.push(link.route);
              }}
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                display: "flex",
                gap: "30px",
                backgroundColor:
                  pathname ===
                  (link.route.startsWith("./")
                    ? link.route.substring(1)
                    : link.route)
                    ? "#FFFFFF"
                    : "",
                padding: { xs: "20px" },
                cursor: "pointer",
              }}
              key={i}
            >
              <Image
                style={{ height: "30px", width: "30px", objectFit: "contain" }}
                src={
                  pathname ===
                  (link.route.startsWith("./")
                    ? `/${link.route.substring(2)}`
                    : link.route)
                    ? link.darkLogo
                    : link.src
                }
                alt="location"
              />
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color:
                    pathname ===
                    (link.route.startsWith("./")
                      ? link.route.substring(1)
                      : link.route)
                      ? "#0A0A0A"
                      : "#ffffff",
                  fontSize: "20px",
                }}
              >
                {link.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
