import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";

const steps = ["개인정보 및 보안정책 동의", "방문신청 정보 입력", "예약 확인"];

export default function Visitor04() {
  const [visitors, setVisitors] = useState("");

  const sendRequest = async () => {
    await axios
      .get(
        "/visitormanager?visitor_id=VT7157&visitor_name=김민구&site_id=01f0ea04-6040-47d8-a756-f1b08d855096",
        { headers: { login_token: "98A047DF-0C2D-402D-8397-86AC011D09A8" } }
      )
      .then(function (response) {
        if (response.data["visitors"][0] != null) {
          setVisitors(response.data["visitors"][0]);
          console.log("ghj");
        } else {
          console.log("fef");
        }
      });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "yellow",
        height: "93vh",
      }}
    >
      <Box>
        <Box py={2} height={60}>
          <Card>방문자 04</Card>
        </Box>
        <Box
          className="Stepper"
          bgcolor="gold"
          border={1}
          py={2}
          sx={{ width: "100%" }}
        >
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box className="VisitorInfo" bgcolor="orange" border={1}>
          <Grid bgcolor="warning.main">
            <Grid item xs={12}>
              <Typography
                bgcolor="green"
                color="red"
                fontWeight="bold"
                fontSize={20}
              >
                ▶ 방문자 예약 정보
              </Typography>
              <Divider />
              <Grid item xs={12} container spacing={0}>
                <Grid item xs={2} bgcolor="red">
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      label="성명"
                      variant="outlined"
                      autoFocus="true"
                    />
                    <TextField
                      id="outlined-basic"
                      label={visitors.telephone}
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="방문기간"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="차량번호"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="모바일 출입방식"
                      variant="outlined"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={10} bgcolor="red">
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      label={visitors.visitor_name}
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="010-1111-2222"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="방문기간"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="12가 4455"
                      variant="outlined"
                    />
                    <Checkbox />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid></Grid>
          </Grid>
        </Box>
        <Box
          className="ReservResult"
          bgcolor="purple"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <Box
                bgcolor="warning.main"
                color="info.contrastText"
                p={2}
                textAlign="center"
              >
                <Link to="/Visitor03" style={{ textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    이전 페이지
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                bgcolor="warning.main"
                color="info.contrastText"
                p={2}
                textAlign="center"
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    완료
                  </Button>
                </Link>

                <Button variant="contained" onClick={sendRequest}>
                  테스트
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
