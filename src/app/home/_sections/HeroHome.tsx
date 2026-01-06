"use client";

import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const HeroHome = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.setAttribute("autoplay", "");
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("loop", "");
    v.setAttribute("preload", "auto");
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

    if (v.readyState >= 3) {
      tryPlay();
    }

    return () => {
      window.removeEventListener("touchend", onFirstUserInteraction);
      window.removeEventListener("click", onFirstUserInteraction);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "calc(100vh - 89px)", md: "calc(100vh - 136px)" },
        position: "relative",
        overflow: "hidden",
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
    </Box>
  );
};

export default HeroHome;
