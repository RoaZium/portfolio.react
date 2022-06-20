import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../../App";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

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

export default function ReservationConfirm() {
  const navigate = useNavigate();
  const { globalVariable, setGlobalVariable } = React.useContext(GlobalContext);
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    if (
      globalVariable["visitorID"] === undefined ||
      globalVariable["visitorID"] === null
    ) {
      navigate("/");
    }

    localStorage.setItem("visitorID", globalVariable["visitorID"]);
    GetVisitor();
  }, []);

  var config = {
    method: "get",
    url: `/visitor?site_id=${globalVariable["siteID"]}&manager_id=WT0000000000&visitor_id=${globalVariable["visitorID"]}`,
    headers: {},
  };

  const GetVisitor = async () =>
    await axios(config)
      .then(function (response) {
        setVisitors(response.data["visitors"][0]);
      })
      .catch(function (error) {
        console.log(error);
      });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
              marginBottom: 3,
              marginLeft: -2,
              marginRight: -2,
            }}
          />
          <Grid
            container
            spacing={3}
            sx={{
              gridRow: "3",
              display: "flex",
            }}
          >
            <Grid
              item
              container
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                label="성명"
                value={visitors.visitor_name}
                variant="outlined"
                sx={{
                  marginBottom: 2,
                }}
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="연락처"
                value={visitors.telephone}
                variant="outlined"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="회사명"
                value={visitors.comapny_name}
                variant="outlined"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="차량번호"
                value={visitors.car_no}
                variant="outlined"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="이메일"
                value={visitors.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              container
              xs={6}
              sx={{
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="방문목적"
                value={visitors.purpose}
                variant="outlined"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="피방문자 성명"
                value={visitors.manager_id}
                variant="outlined"
              />
              <DateTimePicker
                label="방문 시작일"
                value={visitors.visit_from}
                inputFormat="yyyy-MM-dd HH:mm"
                renderInput={(params) => (
                  <TextField {...params} sx={{ marginBottom: 2 }} />
                )}
              />
              <DateTimePicker
                label="방문 종료일"
                value={visitors.visit_to}
                inputFormat="yyyy-MM-dd HH:mm"
                renderInput={(params) => (
                  <TextField {...params} sx={{ marginBottom: 2 }} />
                )}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            gridRow: "3",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <Grid item sm={6}>
            <Box p={2} textAlign="center">
              <Link to="/VisitorApplication" style={{ textDecoration: "none" }}>
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
    </LocalizationProvider>
  );
}
