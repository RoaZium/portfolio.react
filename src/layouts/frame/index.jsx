import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";

export default function Frame() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box maxWidth sx={{ bgcolor: "#cfe8fc", height: "8vh" }} />
      <Box maxWidth sx={{ bgcolor: "red", height: "84vh" }}>
        <Container maxWidth="lg" sx={{ bgcolor: "green", height: "84vh" }} />
      </Box>
      <Box maxWidth sx={{ bgcolor: "yellow", height: "8vh" }} />
    </React.Fragment>
  );
}
