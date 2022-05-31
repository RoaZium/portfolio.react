import * as React from "react";
import { Route, Routes } from "react-router-dom";

/* MUI */
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import CI from "../../assets/images/CI.png";
import theme from "../../assets/theme";

import Admin01 from "../admins/Admin01";
import Admin02 from "../admins/Admin02";
import Admin03 from "../admins/Admin03";
import Admin04 from "../admins/Admin04";
import Login from "../admins/Login";

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
        <Container maxWidth="">
          <Box sx={{ bgcolor: "transparent" }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Admin01" element={<Admin01 />} />
              <Route path="/Admin02" element={<Admin02 />} />
              <Route path="/Admin03" element={<Admin03 />} />
              <Route path="/Admin04" element={<Admin04 />} />
            </Routes>
          </Box>
        </Container>
        <Box sx={{ bgcolor: "transparent", height: "auto" }} />
      </React.Fragment>
    </ThemeProvider>
  );
}
