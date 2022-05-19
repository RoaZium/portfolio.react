import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import axios from "axios";
import { useState } from "react";
import { styled } from "@mui/system";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const steps = ["개인정보 및 보안정책 동의", "방문신청 정보 입력", "예약 확인"];

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  border: 1,
  borderRadius: 0,
  borderColor: "black",
}));

const commonStyles = {
  border: 1,
  borderColor: "text.primary",
};

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
    <Box
      sx={{
        alignContent: "stretch",
        height: "80vh",
        flexDirection: "column",
        bgcolor: "red",
      }}
    >
      <Grid
        item
        sx={{
          height: "60px",
        }}
      >
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "614px",
        }}
      >
        <Typography bgcolor="green" color="red" fontWeight="bold" fontSize={20}>
          ▶ 방문자 예약 정보
        </Typography>
        <Button variant="contained" onClick={sendRequest}>
          테스트
        </Button>
        <Divider />
        <Grid item bgcolor="yellow" xs={12} container>
          <Grid xs={6} bgcolor="blue">
            <Box color="white">
              <Typography>방문자</Typography>
              <Divider></Divider>
              <Typography></Typography>
              <TextField></TextField>
            </Box>
          </Grid>
          <Grid xs={6} bgcolor="yellow">
            <Card bgcolor="yellow"></Card>
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={0}>
          <Grid item xs={2} bgcolor="red">
            <Stack>
              <Typography
                component="h2"
                variant="h6"
                sx={{ ...commonStyles, borderBottom: 0 }}
              >
                성명
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                sx={{ ...commonStyles, borderBottom: 0 }}
              >
                연락처
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                sx={{ ...commonStyles, borderBottom: 0 }}
              >
                방문기간
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                sx={{ ...commonStyles, borderBottom: 0 }}
              >
                차량번호
              </Typography>
              <Typography component="h2" variant="h6" sx={{ ...commonStyles }}>
                모바일 출입방식
              </Typography>
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
                label="12가 4455"
                variant="outlined"
              />
              <Checkbox />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs="auto"
        sx={{
          bgcolor: "green",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Box p={2} textAlign="center">
            <Link to="/Visitor03" style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth>
                이전 페이지
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} textAlign="center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth>
                홈으로
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
