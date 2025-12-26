"use client";

import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import pngs from "@/_assets/pngs";
import SmileGallerieCard from "@/_components/SmileGallerieCard";
import { useRouter } from "next/navigation";

export default function Myproudsmiles() {
  const router = useRouter();

  const smileImages = [
    {
      before: pngs.before1,
      after: pngs.after1,
    },
    {
      before: pngs.before2,
      after: pngs.after2,
    },
    {
      before: pngs.before3,
      after: pngs.after3,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#80858633",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
          display: { xs: "flex" },
          justifyContent: "center",

          alignItems: "center",
          flexDirection: { xs: "column" },
          // gap: { xs: "40px", md: "60px" },
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
          my proud smiles
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
          Each smile you see here is a testament to our commitment to quality
          care, precision, and patient satisfaction.
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: { xs: "block" },
            textAlign: "center",
            height: "auto",
            mt: { xs: "20px", md: "60px" },
          }}
        >
          <Grid
            spacing={2}
            container
            width="100%"
            justifyContent="center"
            sx={{
              height: { xs: "auto", lg: "200px" },
              mb: { lg: "60px" },
              alignItems: { xs: "center" },
            }}
          >
            {smileImages.map((item, index) => {
              return (
                <Grid
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  size={{ xs: 12, sm: 6, md: 4 }}
                  sx={{
                    display: {
                      xs: index === 0 ? "block" : "none",
                      md: "block",
                    },
                    mb: { xs: "40px", sm: "60px" },
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: { xs: "366px", sm: "366px" },
                  }}
                >
                  <SmileGallerieCard before={item.before} after={item.after} />
                </Grid>
              );
            })}
          </Grid>
          <Box data-aos="zoom-in" data-aos-duration="500">
            <ButtonComponent
              label="view more"
              sx={{ m: "auto" }}
              onClick={() => router.push("/smile-galleries")}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
