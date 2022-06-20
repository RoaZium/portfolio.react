import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Route, Routes } from "react-router-dom";
import Visitor01 from "./Visitor01";
import Visitor02 from "./Visitor02";
import Visitor03 from "./VisitorApplication";
import Visitor04 from "./Visitor04";
import { Container } from "@mui/material";
import CI from "../../assets/images/CI.png";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../assets/theme";

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Box sx={{ bgcolor: "transparent", height: "100px" }}>
          <Grid container>
            <Grid>
              <Box
                component="img"
                src={CI}
                sx={{
                  bgcolor: "transparent",
                  height: 40,
                  marginLeft: 3,
                  my: 3,
                }}
              />
            </Grid>
            <Grid>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  bgcolor: "transparent",
                  height: 40,
                  marginLeft: 2,
                  my: 3,
                }}
              >
                방문 예약 시스템
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "transparent" }}>
            <Routes>
              <Route path="/" element={<Visitor01 />} />
              <Route path="/Visitor01" element={<Visitor01 />} />
              <Route path="/Visitor02" element={<Visitor02 />} />
              <Route path="/Visitor03" element={<Visitor03 />} />
              <Route path="/Visitor04" element={<Visitor04 />} />
            </Routes>
          </Box>
        </Container>
        <Box sx={{ bgcolor: "transparent", height: "auto" }} />
      </React.Fragment>
    </ThemeProvider>
  );
}
