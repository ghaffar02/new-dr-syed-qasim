"use client";

import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

export default function LayoutSpacer({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noSpacingRoutes = ["/", "/home"];
  const shouldApplyMargin = !noSpacingRoutes.includes(pathname);

  return (
    <Box
      sx={{
        marginTop: shouldApplyMargin ? { xs: "88.5px", md: "136px" } : 0,
      }}
    >
      {children}
    </Box>
  );
}
