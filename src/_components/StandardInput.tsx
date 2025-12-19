"use client";
import React, { forwardRef } from "react";
import { Box, TextField, TextFieldProps } from "@mui/material";
import { localFontSize } from "@/app/_utils/themes";

interface StandardInputProps extends Omit<TextFieldProps, "variant"> {
  inputLabel?: string;
}

const StandardInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  StandardInputProps
>(
  (
    {
      inputLabel,
      select,
      children,
      placeholder,
      type = "text",
      error = false,
      helperText = "",
      fullWidth = true,
      multiline = false,
      rows = 1,
      ...rest
    },
    ref
  ) => {
    return (
      <Box sx={{ width: "100%" }}>
        <TextField
          label={inputLabel}
          select={select}
          placeholder={placeholder}
          type={type}
          error={error}
          helperText={helperText}
          fullWidth={fullWidth}
          // size="small"
          multiline={multiline}
          rows={rows}
          inputRef={ref}
          sx={{
            fontSize: localFontSize.p3,
            boder: "none",
            outline: "none",
            // height: "59px",
            // mb: "15px",
            // borderRadius: "1px ",
            backgroundColor: "transparent",
            color: "#fff",
            width: "100%",
            // padding: "9px 15px",
            "& .MuiInputBase-input": {
              color: "#010C0D",
              padding: "15px 15px",
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid #010C0D80",
                borderRadius: "0",
              },
              "&:hover fieldset": {
                border: "1px solid #010C0D",
                borderRadius: "0",
              },
              "&.Mui-focused fieldset": {
                border: "1px solid #010C0D",
                borderRadius: "0",
              },
              "& .MuiInputLabel-root": {
                color: "#010C0D80",
              },
              "& label.Mui-focused": {
                color: "#010C0D80",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#010C0D80",
              "&.Mui-focused": {
                color: "#010C0D80",
              },
            },
          }}
          {...rest}
        >
          {select && children}
        </TextField>
      </Box>
    );
  }
);

StandardInput.displayName = "StandardInput";

export default StandardInput;
