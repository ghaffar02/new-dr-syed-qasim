import svgs from "@/_assets/svgs";
import { localFontSize } from "@/app/_utils/themes";
// import { localFontSize } from "@/utils/themes";
import { Button, CircularProgress, SxProps, Theme } from "@mui/material";
// import { useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";

import Image from "next/image";
import React from "react";

type ButtonComponentProps = {
  imgSrc?: string;
  label?: string;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
};

export default function ButtonComponent({
  // imgSrc ,
  label = "Learn More",

  sx = {},
  type = "button",
  loading,
}: ButtonComponentProps) {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
  //   noSsr: true,
  //   defaultMatches: false,
  // });

  // const icon = isMobile ? svgs.whiteRightArrow : svgs.arrowright;
  return (
    <Button
      type={type}
      variant="contained"
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // maxWidth: "208px",
        width: "max-content",
        height: { xs: "52px", md: "64px" },
        padding: { xs: "15px 25px", md: "20px 40px" },
        gap: { xs: "6px", md: "10px" },
        fontSize: localFontSize.p4,
        fontWeight: 400,
        // outline: "none",
        textTransform: "capitalize",
        background: { xs: "#D8B282", sm: "#FFFFFF" },
        color: { xs: "#fff", sm: "#D8B282" },
        borderRadius: "0",
        border: "2px solid #D8B282",
        ...sx,
      }}
    >
      {loading ? (
        <CircularProgress sx={{ color: "#D8B282" }} />
      ) : (
        <>
          {label}
          {/* Responsive SVGs */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={svgs.whiteRightArrow}
              alt="icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={svgs.arrowright}
              alt="icon"
              width={24}
              height={24}
              loading="lazy"
            />
          </Box>
        </>
      )}

      {/* {loading ? (
        <CircularProgress sx={{ color: "#D8B282" }} />
      ) : (
        <>
          {label}
          {imgSrc && (
            <Image
              loading="lazy"
              src={icon}
              alt="icon"
              width={24}
              height={24}
            />
          )}
        </>
      )} */}
    </Button>
  );
}
