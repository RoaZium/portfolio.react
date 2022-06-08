import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

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
          return response.data["visitors"][0];
        } else {
          return null;
        }
      });
  };

  return (
    <Box
      sx={{
        alignContent: "stretch",
        height: "760px",
        bgcolor: "transparent",
        display: "grid",
        gridAutoRows: "80px auto 70px",
        gridTemplateColumns: "1",
        gridTemplateRows: "3",
        gap: 1,
      }}
    >
      <Box
        sx={{
          gridRow: "1",
          bgcolor: "yellow",
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
        }}
      >
        <Stepper
          sx={{
            bgcolor: "transparent",
          }}
          activeStep={2}
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        sx={{
          gridRow: "2",
          bgcolor: "transparent",
          borderRadius: 3,
          boxShadow: 3,
          p: 2,
        }}
      >
        <Typography bgcolor="transparent" fontWeight="bold" fontSize={20}>
          방문자 예약 정보
        </Typography>
        <Divider
          sx={{
            marginTop: 1,
            marginBottom: 1,
            marginLeft: -2,
            marginRight: -2,
          }}
        />
        <Box
          sx={{
            alignContent: "stretch",
            bgcolor: "transparent",
            display: "grid",
            gridAutoColumns: "200px auto",
            gridTemplateColumns: "2",
            gridTemplateRows: "9",
            gap: 1,
          }}
        >
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            방문자 성명
          </Typography>
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            예약번호
          </Typography>
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            연락처
          </Typography>
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            회사명
          </Typography>
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            피방문자
          </Typography>
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            방문기간
          </Typography>
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            차량번호
          </Typography>
          <Typography
            sx={{
              gridColumn: "1",
              gridRow: "8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            승인상태
          </Typography>
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "1",
            }}
            variant="filled"
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "2",
            }}
            variant="filled"
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "3",
            }}
            variant="filled"
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "4",
            }}
            variant="filled"
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "5",
            }}
            variant="filled"
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "6",
            }}
            variant="filled"
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "7",
            }}
            variant="filled"
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "8",
            }}
            variant="filled"
          />
        </Box>
      </Box>
      <Box
        sx={{
          gridRow: "3",
          bgcolor: "orange",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Grid item sm={6}>
          <Box p={2} textAlign="center">
            <Link to="/Visitor03" style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth>
                이전 페이지
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box p={2} textAlign="center">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth>
                홈으로
              </Button>
            </Link>
          </Box>
        </Grid>
        {/*         <Button
          onClick={sendRequest}
          sx={{ display: "flex" }}
          variant="contained"
        >
          테스트
        </Button> */}
      </Box>
    </Box>
  );
}
