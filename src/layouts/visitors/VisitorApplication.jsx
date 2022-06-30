import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { AppOpenContext, GlobalContext } from "../../App";

const steps = ["개인정보 및 보안정책 동의", "방문신청 정보 입력", "예약 확인"];

export default function VisitorApplication() {
  const navigate = useNavigate();
  var { globalVariable, setGlobalVariable } = React.useContext(GlobalContext);
  const [visitorName, setVisitorName] = React.useState();
  const [comapnyName, setComapnyName] = React.useState();
  const [email, setEmail] = React.useState();
  const [carNo, setCarNo] = React.useState();
  const [telephone, setTelephone] = React.useState();
  const [purpose, setPurpose] = React.useState();
  const [managerID, setManagerID] = React.useState("WT0000000000");
  const [managerName, setManagerName] = React.useState("이름");
  const [managerDeptName, setManagerDeptName] = React.useState("부서");
  const [managerTelePhone, setManagerTelePhone] = React.useState("01011112222");
  const [visitFrom, setVisitFrom] = React.useState(new Date());
  const [visitTo, setVisitTo] = React.useState(new Date());
  var { appOpen, setAppOpen } = React.useContext(AppOpenContext);

  useEffect(() => {
    if (globalVariable["agreePrivacy"] === false) {
      console.log(globalVariable["agreePrivacy"]);
      navigate("/AgreePrivacy");
    }
  }, []);

  const reservVisitor = () => {
    if (visitorName === undefined || visitorName === null) {
      alert("방문자 성명을 입력하세요.");
      return;
    }

    if (telephone === undefined || telephone === null) {
      alert("연락처를 입력하세요.");
      return;
    }

    if (visitFrom === undefined || visitFrom === null) {
      alert("방문 시작일을 입력하세요.");
      return;
    }

    if (visitTo === undefined || visitTo === null) {
      alert("방문 종료일을 입력하세요.");
      return;
    }

    console.log("종료", visitTo);
    console.log("시작", visitFrom);

    GetManagerID();
  };

  var data = JSON.stringify({
    site_id: "1",
    visitor_name: visitorName,
    gender: "",
    address: "",
    company_name: comapnyName,
    job_position: "",
    job_title: "",
    email: email,
    car_no: carNo,
    telephone: telephone,
    picture: "",
    birthday: "",
    vip: "",
    purpose: purpose,
    manager_id: localStorage.getItem("ManagerID"),
    manager_name: managerName,
    manager_dept_name: managerDeptName,
    visit_from: visitFrom,
    visit_to: visitTo,
    agree_privacy: true,
    sign_image: "",
    access_permission: "",
    visit_approval: "",
  });

  var config = {
    method: "post",
    url: "/visitor",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const PostVisitor = async () => {
    axios(config)
      .then(function (response) {
        console.log("data:", config.data);
        console.log("PostVisitor: ", response.data);
        globalVariable["visitorID"] = response.data["visitor_id"];
        localStorage.setItem("visitorID", response.data["visitor_id"]);
        navigate("/ReservationConfirm");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  var getManagerData = "";

  var getconfig = {
    method: "get",
    url: `/visitormanagerid?telephone=${managerTelePhone}&user_name=${managerName}&organization_name=${managerDeptName}`,
    headers: {
      login_token: localStorage.getItem("Token"),
    },
    data: getManagerData,
  };

  const GetManagerID = () => {
    axios(getconfig)
      .then(function (response) {
        console.log(response.data);

        localStorage.setItem("ManagerID", response.data["manager_id"]);

        if (response.data["code"] === 1) {
          PostVisitor();
        } else {
          alert("존재하지 않는 피방문자 입니다.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          alignContent: "stretch",
          height: "760px",
          bgcolor: "transparent",
          display: "grid",
          gridAutoRows: "80px auto auto 70px",
          gridTemplateColumns: "1",
          gridTemplateRows: "4",
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
            borderRadius: 3,
            boxShadow: 3,
            p: 2,
            display: "grid",
            gridAutoRows: "30px 5px auto",
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
                value={visitorName}
                variant="filled"
                onChange={(event) => setVisitorName(event.target.value)}
                sx={{
                  marginBottom: 2,
                }}
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="회사명"
                value={comapnyName}
                variant="filled"
                onChange={(event) => setComapnyName(event.target.value)}
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="이메일"
                value={email}
                variant="filled"
                onChange={(event) => setEmail(event.target.value)}
              />
              <DateTimePicker
                label="방문 시작일"
                value={visitFrom}
                inputFormat="yyyy-MM-dd HH:mm"
                minDateTime={new Date()}
                onChange={(newValue) => setVisitFrom(newValue)}
                renderInput={(params) => (
                  <TextField {...params} sx={{ marginBottom: 2 }} />
                )}
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
                label="연락처"
                value={telephone}
                variant="filled"
                onChange={(event) => setTelephone(event.target.value)}
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="방문목적"
                value={purpose}
                variant="filled"
                onChange={(event) => setPurpose(event.target.value)}
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="차량번호"
                value={carNo}
                variant="filled"
                onChange={(event) => setCarNo(event.target.value)}
              />
              <DateTimePicker
                label="방문 종료일"
                value={visitTo}
                inputFormat="yyyy-MM-dd HH:mm"
                onChange={(newValue) => setVisitTo(newValue)}
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
            borderRadius: 3,
            boxShadow: 3,
            p: 2,
            display: "grid",
            gridAutoRows: "30px 5px auto",
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
            피방문자 정보
          </Typography>
          <Divider
            sx={{
              gridRow: "2",
              marginBottom: 2,
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
                sx={{
                  marginBottom: 2,
                }}
                label="피방문자 성명"
                value={managerName}
                variant="filled"
                onChange={(event) => setManagerName(event.target.value)}
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="피방문자 부서"
                value={managerDeptName}
                variant="filled"
                onChange={(event) => setManagerDeptName(event.target.value)}
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
                label="피방문자 연락처"
                value={managerTelePhone}
                variant="filled"
                onChange={(event) => setManagerTelePhone(event.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            gridRow: "4",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <Grid item sm={6}>
            <Box p={2} textAlign="center">
              <Link to="/AgreePrivacy" style={{ textDecoration: "none" }}>
                <Button variant="contained" fullWidth>
                  이전 페이지
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box p={2} textAlign="center">
              <Button variant="contained" onClick={reservVisitor}>
                예약 하기
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
