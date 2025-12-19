"use client";
import {
  Box,
  // Grid,
  Typography,
  Card,
  SxProps,
  // Grid,
  // Grid,
} from "@mui/material";
import { Grid } from "@mui/material";

import Image from "next/image";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import pngs from "@/_assets/pngs";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import svgs from "@/_assets/svgs";
import ButtonComponent from "@/_components/ButtonComponent";
import { Theme } from "@emotion/react";

const services = [
  {
    title: "Teeth Whitening",
    description:
      "Brighten your smile with professional teeth whitening by Dr. Syed Qasim.",
    // icon: <LocalHospitalIcon sx={{ fontSize: 32, color: "#fff" }} />,
  },
  {
    title: "Teeth Checkup",
    description: "Keep your smile healthy with a routine teeth checkup.",
    // icon: <MedicalServicesIcon sx={{ fontSize: 32, color: "#fff" }} />,
  },
  {
    title: "Teeth Implants",
    description:
      "Our implants look and feel natural. Designed for long-lasting comfort and strength.",
    // icon: <EmojiPeopleIcon sx={{ fontSize: 32, color: "#fff" }} />,
  },
];

const DentalServices = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
          gap: "40px",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          height: "auto",
        }}
      >
        {/* Text Section */}

        <Grid
          container
          // spacing={6}
          justifyContent="space-between"
          sx={{ maxWidth: { md: "560px" }, width: "100%", height: "auto" }}
        >
          <Grid
            container
            size={{ xs: 12 }}
            spacing={6}
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Text Section */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ order: { xs: "1", md: "unset" } }}>
                <Typography
                  sx={{
                    fontSize: localFontSize.h3,
                    width: "100%",
                    mb: { xs: "10px", md: "20px" },
                    fontWeight: "600",
                    // textAlign: { xs: "center", md: "start" },
                    color: "#010C0D",
                    lineHeight: "160%",
                  }}
                >
                  Dental Services
                </Typography>
                <Typography
                  sx={{
                    fontSize: localFontSize.p2,
                    fontWeight: "400",
                    // textAlign: { xs: "center", md: "start" },
                    color: "#010C0D80",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  We offer expert dental care tailored to keep your smile
                  healthy, bright, and confident. From routine checkups to
                  advanced treatments, your comfort and satisfaction are our top
                  priority.
                </Typography>
                <Typography
                  sx={{
                    fontSize: localFontSize.p2,
                    fontWeight: "400",
                    // textAlign: { xs: "center", md: "start" },
                    color: "#010C0D80",
                    display: { xs: "block", md: "none" },
                  }}
                >
                  We offer expert dental care tailored to keep your smile
                  healthy, bright, and confident.
                </Typography>
              </Box>
            </Grid>
            <CardGridSection sx={{ display: { xs: "block", md: "none" } }} />

            {/* Image Section */}
            <Grid size={{ xs: 12 }} sx={{ order: { xs: "3", md: "unset" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 340,
                  mt: { xs: "0", md: "100px" },
                }}
              >
                <Image
                  src={pngs.dentalt}
                  alt="Smiling Woman"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <CardGridSection sx={{ display: { xs: "none", md: "block" } }} />
      </Box>
    </Box>
  );
};

export default DentalServices;

type ContactUsInfoCardProps = {
  sx?: SxProps<Theme>;
};

export function CardGridSection({ sx }: ContactUsInfoCardProps) {
  return (
    <Grid
      container
      sx={{
        maxWidth: { md: "484px" },
        width: "100%",
        height: { xs: "auto", md: "520px" },
        order: { xs: "1", md: "unset" },
        ...sx,
      }}
    >
      {services.map((service, index) => (
        <Grid size={{ xs: 12 }} key={index}>
          <Card
            sx={{
              width: "100%",
              display: "flex",
              alignItems: { xs: "start", md: "center" },
              justifyContent: { xs: "flex-start", md: "space-between" },
              boxShadow: "none",
              gap: { xs: "17px", md: "24px" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                maxWidth: "100px",
                width: "100%",
                height: 100,
              }}
            >
              <Image
                src={svgs.icon}
                alt="Smiling Woman"
                layout="fill"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box sx={{ p: 0, pb: 0 }}>
              <Typography
                sx={{
                  width: "100%",
                  maxWidth: "360px",
                  fontSize: localFontSize.p2,
                  fontWeight: "400",
                  // textAlign: { xs: "center", md: "start" },
                  color: "#010C0D",
                }}
              >
                {service.title}
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  maxWidth: "360px",
                  fontSize: localFontSize.p5,
                  fontWeight: "400",
                  // textAlign: { xs: "center", md: "start" },
                  color: "#010C0D80",
                }}
              >
                {service.description}
              </Typography>
            </Box>
          </Card>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "#CDD8D9",
              m: "44px 0",
            }}
          />
        </Grid>
      ))}

      <Box>
        <ButtonComponent label="All Services" sx={{ margin: 0 }} />
      </Box>
    </Grid>
  );
}
