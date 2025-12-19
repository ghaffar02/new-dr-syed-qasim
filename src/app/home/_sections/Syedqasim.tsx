import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";

export type DoctorSectionProps = {
  title: string;
  description: string;
  image: StaticImageData | string;
  // paddingY?: string;
  bgImage?: boolean;
  imageLeft?: boolean;
  bgColor?: string;
  textAlignMobile?: "start" | "center" | "end";
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

const Syedqasim = ({
  title,
  description,
  image,
  imageLeft = false,
  bgColor = "#fff",
  bgImage,
  textAlignMobile,
  paddingY = {
    xs: "50px 20px",
    sm: "60px 60px",
    md: "80px 80px",
    lg: "100px 100px",
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
          data-aos="fade-left"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "330px", md: "466px", lg: "500" },
            width: { xs: "100%", md: "100%" },
            height: { xs: "300px", md: "498px" },
            position: "relative",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            // sizes="(max-width: 768px) 100vw, 500px"s
          />
        </Box>

        {/* Text Content */}
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "600px" },
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
              mb: 2,
              color: "#fff",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              color: "#FFFFFF80",
              display: { xs: "none", sm: "block" },
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              display: { xs: "block", sm: "none" },
              fontSize: localFontSize.p3,
              color: "#FFFFFF80",
            }}
          >
            With a passion for precision and patient care, Dr Syed Qasim brings
            years of clinical experience and a gentle approach to modern
            dentistry. Committed to ongoing learning and the latest
            advancements, he offers high-quality treatment tailored to each
            patient’s needs.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Syedqasim;
