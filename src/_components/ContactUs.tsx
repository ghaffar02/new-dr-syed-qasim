"use client";
import { Box, Typography } from "@mui/material";
// import { localFontSize, sectionPadding } from "@/utils/themes";
// import ContactUsForm from "./ContactUsForm";
import React from "react";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import pngs from "@/_assets/pngs";
import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

import dynamic from "next/dynamic";

const ContactUsForm = dynamic(() => import("./ContactUsForm"), {
  ssr: false,
});

export default function ContactUsSection() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: {
            xs: "#fff",
            // sm: "rgba(21, 56, 92, 1)",
          },
        }}
      >
        {/* top textual content  */}
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
            padding: sectionPadding,
            display: { xs: "flex" },
            justifyContent: "space-between",
            alignItems: { sm: "center", md: "flex-start" },

            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "40px", md: "60px" },
          }}
        >
          <Box
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              maxWidth: "584px",
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column" },
              // alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              // paddingBottom: {
              //   xs: "0px",
              //   md: "60px",
              //   lg: "80px",
              // },
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                color: "#010C0D",
                maxWidth: "560px",
                // maxWidth: { xs: "400px", lg: "556px", xl: "650px" },
                width: "100%",
                textTransform: "capitalize",
                fontWeight: "600",
                // textAlign: "center",
                display: { xs: "none", md: "block" },
              }}
            >
              get in touch with me
            </Typography>
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                color: "#010C0D",
                maxWidth: "560px",
                width: "100%",
                display: { xs: "block", md: "none" },
                textTransform: "capitalize",
                fontWeight: "600",
                // textAlign: "center",
              }}
            >
              get in touch
            </Typography>
            <Typography
              sx={{
                fontSize: localFontSize.p3,
                color: "#010C0D80",
                maxWidth: "560px",
                // textAlign: "center",
                width: "100%",
                mb: { xs: "30px", md: "44px" },
                display: { xs: "block", md: "none" },
              }}
            >
              Have a question or need to book an appointment? I am here to help.
            </Typography>
            <Typography
              sx={{
                fontSize: localFontSize.p3,
                color: "#010C0D80",
                maxWidth: "560px",
                // textAlign: "center",
                width: "100%",
                mb: { xs: "30px", md: "44px" },
                display: { xs: "none", md: "block" },
              }}
            >
              Have a question or need to book an appointment? I am here to help.
            </Typography>

            <Box
              sx={{
                // maxWidth: "100",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: { xs: "0", md: "30px" },
                flexDirection: { xs: "column-reverse", md: "row" },
              }}
            >
              <ContactUsForm />
            </Box>
          </Box>
          {/* image */}
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: { xs: "361px", md: "456px" },
              width: "100%",
              height: { xs: "auto" },
            }}
          >
            <Image
              alt="conact us"
              src={pngs.contactUspng}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
