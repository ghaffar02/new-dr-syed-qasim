"use client";
import pngs from "@/_assets/pngs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import SmileGallerieCard from "./SmileGallerieCard";

export default function GridSection() {
  const beforeAfterImages = [
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
    {
      before: pngs.before4,
      after: pngs.after4,
    },
    {
      before: pngs.before5,
      after: pngs.after5,
    },
    {
      before: pngs.before6,
      after: pngs.after6,
    },
    {
      before: pngs.before7,
      after: pngs.after7,
    },
    {
      before: pngs.before8,
      after: pngs.after8,
    },
  ];

  return (
    <Box padding={sectionPadding} sx={{ maxWidth: "1440px", margin: "auto" }}>
      <Box
        sx={{
          maxWidth: "794px",
          margin: "auto",
          textAlign: "center",
          mb: { xs: "40px", md: "80px" },
        }}
      >
        <Typography
          fontSize={localFontSize.h3}
          sx={{
            fontWeight: { xs: "600", md: "700" },
            color: "#010C0D",
            mb: "20px",
          }}
        >
          My Smiling Gallery
        </Typography>
      </Box>

      <Grid
        data-aos="zoom-in"
        data-aos-duration="500"
        container
        justifyContent="center"
        alignItems="center"
        columnSpacing={2.5}
        sx={{
          rowGap: "20px",
        }}
      >
        {beforeAfterImages.map((item, index) => (
          <Grid
            key={index}
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 4 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SmileGallerieCard before={item.before} after={item.after} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
