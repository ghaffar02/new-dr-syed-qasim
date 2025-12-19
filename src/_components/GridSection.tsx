import pngs from "@/_assets/pngs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function GridSection() {
  return (
    <Box padding={sectionPadding} sx={{ maxWidth: "1440px", margin: "auto" }}>
      <Box
        sx={{
          maxWidth: "794px",
          margin: "auto",
          textAlign: "center",
          mb: { xs: "40px", md: "80px" },
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          fontSize={localFontSize.h3}
          sx={{
            fontWeight: { xs: "600", md: "700" },
            color: "#010C0D",
            mb: "20px",
          }}
        >
          My Smiling Gallery
        </Typography>

        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          fontSize={localFontSize.p3}
          sx={{ color: "#010C0D80", display: { xs: "none", md: "block" } }}
        >
          Step into my gallery and see the smiles I’ve helped transform. Each
          photo reflects my commitment to quality care, attention to detail, and
          the trust my patients place in me.
        </Typography>
        <Typography
          fontSize={localFontSize.p3}
          sx={{ color: "#010C0D80", display: { xs: "block", md: "none" } }}
        >
          Step into my gallery and see the smiles I’ve helped transform. Each
          photo reflects my commitment to quality care, attention to detail, and
          the trust my patients place in us.
        </Typography>
      </Box>
      <Box>
        <Grid
          data-aos="zoom-in"
          data-aos-duration="500"
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={3}
          columnSpacing={2}
        >
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "auto", width: "100%", objectFit: "contain" }}
                src={pngs.smile1}
                alt="smileimg"
              />
            </Box>
          </Grid>
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={pngs.smile2}
                alt="smileimg"
              />
            </Box>
          </Grid>
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={pngs.smile3}
                alt="smileimg"
              />
            </Box>
          </Grid>
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={pngs.smile4}
                alt="smileimg"
              />
            </Box>
          </Grid>
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={pngs.smile5}
                alt="smileimg"
              />
            </Box>
          </Grid>
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={pngs.smile6}
                alt="smileimg"
              />
            </Box>
          </Grid>
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={pngs.smile7}
                alt="smileimg"
              />
            </Box>
          </Grid>
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            size={{ xs: 12, md: 6, lg: 6 }}
          >
            <Box sx={{ width: "100%" }}>
              <Image
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={pngs.smile8}
                alt="smileimg"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
