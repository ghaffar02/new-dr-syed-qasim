"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/_components/Navbar";
import { Box } from "@mui/material";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Hide navbar on / and /home
  if (pathname === "/" || pathname === "/home") {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 10000,
        width: "100%",
      }}
    >
      <Navbar />
    </Box>
  );
}
