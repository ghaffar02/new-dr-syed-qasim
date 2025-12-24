"use client";
import { useState } from "react";
import svgs from "@/_assets/svgs";
import { localFontSize } from "@/app/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface SmileGallerieCardProps {
  before: StaticImageData | string;
  after: StaticImageData | string;
}

export default function SmileGallerieCard({
  before,
  after,
}: SmileGallerieCardProps) {
  const [active, setActive] = useState<number>(2);

  const incrementActive = () => {
    setActive((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const decrementActive = () => {
    setActive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // helper for smooth grid widths
  const getWidth = (value: number) => {
    if (active === value) return "100%";
    if (active === 2) return "50%";
    return "0%";
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "fit-content",
        height: "fit-content",
        m: "auto",
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "370px",
          width: "100%",
          // height: "200px",
          aspectRatio: "183/100",
        }}
      >
        {/* BEFORE */}
        <Grid
          sx={{
            height: "100%",
            flexBasis: getWidth(1),
            maxWidth: getWidth(1),
            transition: "all 0.4s ease-in-out",
            overflow: "hidden",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <Image
              src={before}
              alt="before"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "left center",
              }}
            />
          </Box>
        </Grid>

        {/* AFTER */}
        <Grid
          sx={{
            height: "100%",
            flexBasis: getWidth(3),
            maxWidth: getWidth(3),
            transition: "all 0.4s ease-in-out",
            overflow: "hidden",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <Image
              src={after}
              alt="after"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "right center",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Labels */}
      <Typography
        sx={{
          fontSize: localFontSize.p5,
          color: "#FFFFFF",
          position: "absolute",
          top: "15px",
          left: "15px",
        }}
      >
        before
      </Typography>

      <Typography
        sx={{
          fontSize: localFontSize.p5,
          color: "#FFFFFF",
          position: "absolute",
          top: "15px",
          right: "15px",
        }}
      >
        after
      </Typography>

      {/* NEXT */}
      <Image
        onClick={incrementActive}
        src={svgs.doubleArrow}
        alt="next"
        style={{
          height: "30px",
          width: "30px",
          position: "absolute",
          top: "calc(50% - 15px)",
          left: "50%",
          cursor: active === 3 ? "not-allowed" : "pointer",
          opacity: active === 3 ? 0.3 : 1,
          transition: "opacity 0.4s ease-in-out",
        }}
      />

      {/* PREV */}
      <Image
        onClick={decrementActive}
        src={svgs.doubleArrow}
        alt="prev"
        style={{
          height: "30px",
          width: "30px",
          position: "absolute",
          top: "calc(50% - 15px)",
          right: "50%",
          transform: "rotate(180deg)",
          cursor: active === 1 ? "not-allowed" : "pointer",
          opacity: active === 1 ? 0.3 : 1,
          transition: "opacity 0.4s ease-in-out",
        }}
      />
    </Box>
  );
}
