import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

const steps = ["개인정보 및 보안정책 동의", "방문신청 정보 입력", "예약 확인"];

export default function Visitor03() {
  const [value, setValue] = React.useState(new Date());
  const visitorInfo = JSON.stringify({
    site_id: "1",
    visitor_name: "테스트01",
    telephone: "010-0000-0000",
    manager_id: "WT0000000000",
    visit_from: "2022-01-01 00:00:00",
    visit_to: "2022-01-01 23:59:59",
  });

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const PostVisitor = async () => {
    await axios
      .post("/visitor", {
        site_id: "1",
        visitor_name: "테스트05",
        telephone: "010-0000-0000",
        manager_id: "WT0000000000",
        visit_from: "2022-01-01 00:00:00",
        visit_to: "2022-01-01 23:59:59",
      })
      .then(function (response) {
        console.log(response);
      });
  };

  var data = JSON.stringify({
    site_id: "1",
    visitor_name: "테스트04",
    telephone: "010-0000-0000",
    manager_id: "WT0000000000",
    visit_from: "2022-01-01 00:00:00",
    visit_to: "2022-01-01 23:59:59",
  });

  var config = {
    method: "post",
    url: "/visitor",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  useEffect(() => {
    /*     axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */
    PostVisitor();
  }, []);

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
            activeStep={1}
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
            display: "grid",
            gridAutoRows: "30px 5px 40px",
            gridTemplateColumns: "1",
            gridTemplateRows: "3",
          }}
        >
          <Typography
            bgcolor="transparent"
            fontWeight="bold"
            fontSize={20}
            sx={{
              gridRow: "1",
            }}
          >
            방문자 정보
          </Typography>
          <Divider
            sx={{
              gridRow: "2",
              marginBottom: 2,
              marginLeft: -2,
              marginRight: -2,
            }}
          />
          <Box
            sx={{
              gridRow: "3",
              alignContent: "stretch",
              bgcolor: "transparent",
              display: "grid",
              gridTemplateColumns: "2",
              gridTemplateRows: "5",
              gap: 3,
            }}
          >
            <TextField
              sx={{
                gridColumn: "1",
                gridRow: "1",
              }}
              label="방문자 성명"
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "1",
                gridRow: "2",
              }}
              label="연락처"
              variant="filled"
            />
            <Grid
              container
              spacing={1}
              sx={{
                gridColumn: "1",
                gridrow: "3",
              }}
            >
              <Grid item display="flex">
                <Typography
                  sx={{
                    alignSelf: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  방문기간
                </Typography>
              </Grid>
              <Grid item>
                <DateTimePicker
                  label="시작일"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item display="flex">
                <Typography
                  sx={{
                    alignSelf: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  ~
                </Typography>
              </Grid>
              <Grid item>
                <DateTimePicker
                  label="종료일"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid>
            <TextField
              sx={{
                gridColumn: "1",
                gridRow: "4",
              }}
              label="차량번호"
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "1",
                gridRow: "5",
              }}
              label="모바일 출입방식"
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "2",
                gridRow: "1",
              }}
              label="이메일"
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "2",
                gridRow: "2",
              }}
              label="회사명"
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "2",
                gridRow: "3",
              }}
              label="방문목적"
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "2",
                gridRow: "4",
              }}
              label="피방문자 성명"
              variant="filled"
            />
            <Link to="/Visitor04" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  gridColumn: "2",
                  gridRow: "5",
                }}
                variant="contained"
              >
                예약하기
              </Button>
            </Link>
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
              <Link to="/Visitor02" style={{ textDecoration: "none" }}>
                <Button variant="contained" fullWidth>
                  이전 페이지
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box p={2} textAlign="center">
              <Link to="/Visitor04" style={{ textDecoration: "none" }}>
                <Button variant="contained" fullWidth>
                  다음 페이지
                </Button>
              </Link>
            </Box>
          </Grid>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
