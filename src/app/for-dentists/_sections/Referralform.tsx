"use client";
import { Box, MenuItem, Typography } from "@mui/material";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import StandardInput from "@/_components/StandardInput";
import ButtonComponent from "@/_components/ButtonComponent";

import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
type ContactFormInputs = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function Referralform() {
  const [loading, setLoading] = React.useState(false);

  const searchParams = useSearchParams();
  const productTitle = searchParams.get("product");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    defaultValues: {
      subject: "",
    },
  });

  useEffect(() => {
    if (productTitle) {
      setValue("subject", productTitle);
    }
  }, [setValue, productTitle]);

  const onSubmit = async (data: ContactFormInputs) => {
    console.log("Form Submitted:", data);
    try {
      setLoading(true);
      const response = await axios.post("/api/contactus", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response?.status === 200) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Submission failed! Please try again.");
      }
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Submission failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {};
  // const onError = (errors) => {
  //   console.log("Validation Errors:", errors);
  // };

  return (
    <Box
      sx={
        {
          // backgroundImage: {
          //   xs: `url(./bgsmilepround.png)`,
          // },
          // backgroundPosition: { xs: "center", sm: "center", md: "cover" },
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "no-repeat",
          // minHeight: { xs: "770px" },
          // height: "auto",
        }
      }
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit, onError)}
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          padding: sectionPadding,
          display: { xs: "flex" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column" },

          // gap: { xs: "40px", md: "96px" },
        }}
      >
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "500px", sm: "796px" },
            width: "100%",
            fontSize: localFontSize.h3,
            fontWeight: 600,
            textAlign: "center",
            display: { xs: "block" },
            textTransform: "capitalize",
            mb: { xs: "20px", md: "40px" },
          }}
        >
          Referral form
        </Typography>
        <Typography
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "500px", sm: "796px" },

            width: "100%",
            textAlign: "center",
            display: { xs: "block" },
            color: "#010C0D80",
            fontSize: localFontSize.p3,
          }}
        >
          Referrals from general dentists, healthcare professionals, and
          specialists seeking expert care for their patients are welcomed.
        </Typography>

        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            width: "100%",
            maxWidth: "796px",
            // height: "470px",
            bgcolor: "#80858633",
            padding: "40px",
            mt: { xs: "40px", md: "96px" },

            // border: "2px solid #010C0D",
            display: "flex",
            gap: { xs: "40px" },
            flexDirection: "column",
            // justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "713px",
              height: "auto",
              display: "flex",
              gap: { xs: "20px", md: "25px" },

              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <StandardInput
              inputLabel="Name"
              type="text"
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name ? "Name is required" : ""}
            />
            <StandardInput
              inputLabel="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
            <StandardInput
              inputLabel="Phone"
              type="phone"
              {...register("phone", { required: true })}
              error={!!errors.phone}
              helperText={errors.phone ? "Phone number is required" : ""}
            />
            <StandardInput
              inputLabel="Training courses"
              select
              defaultValue=""
              placeholder="Training courses"
              {...register("subject", {
                required: "Training courses is required",
              })}
              error={!!errors?.subject}
              helperText={errors?.subject?.message}
            >
              <MenuItem value="">Training courses</MenuItem>
              <MenuItem value="teeth-cleaning">Teeth Cleaning</MenuItem>
              <MenuItem value="dental-xray">Dental X-Ray Training</MenuItem>
              <MenuItem value="braces-installation">
                Braces Installation
              </MenuItem>
              <MenuItem value="dental-hygiene">Dental Hygiene Basics</MenuItem>
              <MenuItem value="oral-surgery">Oral Surgery Basics</MenuItem>
              <MenuItem value="root-canal">Root Canal Training</MenuItem>
            </StandardInput>
          </Box>
          <Box
            sx={{
              maxWidth: {
                xs: "104px",
                sm: "150px",
                md: "180px",
                lg: "208px",
              },
              width: "100%",
            }}
          >
            <ButtonComponent
              label="send"
              loading={loading}
              type="submit"
              sx={{
                maxWidth: {
                  xs: "104px",
                  sm: "150px",
                  md: "180px",
                  lg: "208px",
                },
                width: "100%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
