"use client";
import { Box } from "@mui/material";

import StandardInput from "@/_components/StandardInput";
import ButtonComponent from "./ButtonComponent";
// import svgs from "@/_assets/svgs";
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

export default function ContactUsForm() {
  const gap = { xs: "20px", md: "20px" };
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

  return (
    <>
      <Box
        data-aos="fade-right"
        data-aos-duration="500"
        component="form"
        onSubmit={handleSubmit(onSubmit, onError)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "start" },
          gap: { xs: "10px", md: "20px" },
          width: { md: "100%" },
          // marginBottom: { xs: "30px", sm: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: { ...gap },
            width: "100%",
            maxWidth: "746px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              gap: { ...gap },
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
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              // justifyContent: "space-between",
              gap: { ...gap },
            }}
          >
            <StandardInput
              inputLabel="Phone"
              type="phone"
              {...register("phone", { required: true })}
              error={!!errors.phone}
              helperText={errors.phone ? "Phone number is required" : ""}
            />
            {/* <StandardInput inputLabel="Your Selection"  > <StandardInput/> */}
            <StandardInput
              inputLabel="Subject"
              type="text"
              {...register("subject", {
                required: "Subject is required",
              })}
              error={!!errors?.subject}
              helperText={errors?.subject?.message}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%" },
            }}
          >
            <StandardInput
              inputLabel="Message"
              placeholder="Enter your message"
              multiline
              // inputType="text"
              fullWidth
              rows={5}
              {...register("message", { required: true })} //
              error={!!errors.message}
              helperText={errors.message ? "Message is required" : ""}
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "10px", md: "20px" },
          }}
        >
          <ButtonComponent
            sx={{
              width: {
                sm: "150px",
                md: "180px",
                lg: "208px",
              },
            }}
            label="Send "
            // imgSrc={svgs.arrowright}
            type="submit"
            loading={loading}
          />
        </Box>
      </Box>
    </>
  );
}
