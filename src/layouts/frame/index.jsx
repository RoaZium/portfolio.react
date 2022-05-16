import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";

export default function Frame() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth sx={{ bgcolor: "#cfe8fc", height: "8vh" }} />
      <Container maxWidth sx={{ bgcolor: "red", height: "84vh" }}>
        <Container maxWidth="lg" sx={{ bgcolor: "green", height: "84vh" }} />
      </Container>
      <Box sx={{ bgcolor: "yellow", height: "8vh" }} />
    </React.Fragment>
  );
}