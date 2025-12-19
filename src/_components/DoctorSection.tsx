import React from "react";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";

export type DoctorSectionProps = {
  title: string;
  titleMob: string;
  description: string;
  descriptionMob: string;
  image: StaticImageData | string;
  bgImage?: boolean;
  imageLeft?: boolean;
  bgColor?: string;
  textAlignMobile?: "start" | "center" | "end";
  sx?: SxProps<Theme>;
  paddingY?:
    | string
    | { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
};

const mapTextAlign = (
  value?: "start" | "center" | "end"
): "left" | "center" | "right" => {
  switch (value) {
    case "start":
      return "left";
    case "end":
      return "right";
    case "center":
      return "center";
    default:
      return "left";
  }
};

const DoctorSection = ({
  title,
  titleMob,
  description,
  descriptionMob,
  image,
  imageLeft = false,
  bgColor = "#fff",
  bgImage,
  // sx = {},
  textAlignMobile,
  paddingY = {
    xs: "50px 20px",
    sm: "60px 60px",
    md: "80px 80px",
    lg: "100px 150px",
    xl: "160px 150px",
  },
}: DoctorSectionProps) => {
  return (
    <Box sx={{ backgroundColor: bgColor }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            md: imageLeft ? "row-reverse" : "row",
          },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "40px", md: "80px" },
          maxWidth: "1440px",
          margin: "auto",
          // padding: {
          //   xs: bgImage ? paddingY : sectionPadding,
          //   md: bgImage ? paddingY : sectionPadding,
          // },

          padding: bgImage ? paddingY : sectionPadding,
          ...(bgImage && {
            backgroundImage: 'url("/bgOfComponents.webp")',
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }),
        }}
      >
        {/* Image Box */}
        <Box
          data-aos={bgImage ? "fade-left" : "fade-right"}
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "361px", md: "440px", lg: "468px" },
            width: { xs: "100%", md: "100%" },
            height: { xs: "300px", md: "498px" },
            position: "relative",
            // ...sx,
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        {/* Text Content */}
        <Box
          data-aos={!bgImage ? "fade-left" : "fade-right"}
          data-aos-duration="500"
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", sm: "550px", md: "600px" },
            textAlign: {
              xs: mapTextAlign(textAlignMobile),
              sm: "center",
              md: "start",
            },
          }}
        >
          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: localFontSize.h3,
              fontWeight: 600,
              mb: "20px",
              color: "#010C0D",
              display: { xs: "none", md: "block" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textTransform: "capitalize",
              fontSize: localFontSize.h3,
              fontWeight: 600,
              mb: "20px",
              color: "#010C0D",
              display: { xs: "block", md: "none" },
            }}
          >
            {titleMob}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              color: "#010C0D80",
              display: { xs: "none", md: "block" },
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              color: "#010C0D80",
              display: { xs: "block", md: "none" },
            }}
          >
            {descriptionMob}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorSection;
