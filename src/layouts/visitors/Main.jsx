import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import Visitor01 from "./Visitor01";
import Visitor02 from "./Visitor02";
import Visitor03 from "./Visitor03";
import Visitor04 from "./Visitor04";
import Visitor05 from "./Visitor05";
import { Container } from "@mui/material";
import CI from "../../assets/images/CI.png";
import Grid from "@mui/material/Grid";

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box maxWidth sx={{ bgcolor: "transparent", height: "10vh" }}>
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Box
              component="img"
              src={CI}
              sx={{
                bgcolor: "transparent",
                height: 40,
                marginLeft: 3,
                my: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                bgcolor: "transparent",
                height: 55,
                my: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              방문 예약 시스템
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box maxWidth sx={{ bgcolor: "transparent" }}>
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Visitor01 />} />
            <Route path="/Visitor01" element={<Visitor01 />} />
            <Route path="/Visitor02" element={<Visitor02 />} />
            <Route path="/Visitor03" element={<Visitor03 />} />
            <Route path="/Visitor04" element={<Visitor04 />} />
            <Route path="/Visitor05" element={<Visitor05 />} />
          </Routes>
        </Container>
      </Box>
      <Box maxWidth sx={{ bgcolor: "transparent", height: "10vh" }} />
    </React.Fragment>
  );
}
