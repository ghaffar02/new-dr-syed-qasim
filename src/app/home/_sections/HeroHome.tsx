import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";

const HeroHome = () => {
  return (
    <Box
      sx={{
        // maxWidth: "1440px",
        width: "100%",
        margin: "auto",
        height: { xs: "calc(100vh - 89px)", md: "calc(100vh - 136px)" },
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Image
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={pngs.heroHome}
          alt="heroHome"
        />
      </Box>
    </Box>
  );
};
export default HeroHome;
