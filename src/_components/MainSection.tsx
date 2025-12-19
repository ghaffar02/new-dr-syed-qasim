import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import mainsectionimg from "@/_assets/pngs/mainsectionimg.png";

export default function MainSection() {
  return (
    <Box sx={{ background: "#80858633" }}>
      <Box
        padding={sectionPadding}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexDirection: {
            xs: "column",
            md: "row",
            maxWidth: "1440px",
            margin: "auto",
          },
        }}
      >
        <Box>
          <Typography fontSize={localFontSize.h1} sx={{ maxWidth: "560px" }}>
            What Sets Dr. Syed Qasim Apart
          </Typography>
          <Typography
            fontSize={localFontSize.p2}
            sx={{ maxWidth: "560px", paddingTop: "20px" }}
          >
            We take the time to listen, understand your needs, and create a
            treatment plan that works for you. Every patient is different, and
            we make sure our care reflects that.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "455px", width: "100%" }}>
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={mainsectionimg}
            alt="image"
          />
        </Box>
      </Box>
    </Box>
  );
}
