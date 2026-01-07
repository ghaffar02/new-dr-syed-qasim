"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "@/_components/Navbar";
import { localFontSize } from "@/app/_utils/themes";

const HeroHome = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  /* ---------------- VIDEO LOGIC (unchanged) ---------------- */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;

    const tryPlay = async () => {
      try {
        if (v.paused) await v.play();
      } catch {}
    };

    const onFirstUserInteraction = async () => {
      await tryPlay();
      window.removeEventListener("touchend", onFirstUserInteraction);
      window.removeEventListener("click", onFirstUserInteraction);
    };

    window.addEventListener("touchend", onFirstUserInteraction, { once: true });
    window.addEventListener("click", onFirstUserInteraction, { once: true });

    tryPlay();

    return () => {
      window.removeEventListener("touchend", onFirstUserInteraction);
      window.removeEventListener("click", onFirstUserInteraction);
    };
  }, []);

  /* ---------------- SCROLL LOGIC ---------------- */
  useEffect(() => {
    const onScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 10000,
          width: "100%",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          opacity: showNavbar ? 1 : 0,
          transition: "all 0.35s ease",
        }}
      >
        <Navbar />
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          opacity: 0.85,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        >
          <source src="/bgHero.mp4" type="video/mp4" />
        </video>
        <Typography
          sx={{
            width: "fit-content",
            fontSize: localFontSize.h1,
            fontWeight: 700,
            textTransform: "uppercase",
            // textTransform: "capitalize",
            color: "#D8B282",
            //         textShadow: `
            //   0 2px 6px rgba(0, 0, 0, 0.55),
            //   0 6px 18px rgba(0, 0, 0, 0.35)
            // `,
            textShadow: `
  0 2px 6px rgba(0, 0, 0, 0.75),
  0 6px 18px rgba(0, 0, 0, 0.65)
`,

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Dr Syed Qasim
        </Typography>
      </Box>
    </>
  );
};

export default HeroHome;
