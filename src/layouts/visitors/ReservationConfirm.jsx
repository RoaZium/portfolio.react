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
import { useEffect, useState } from "react";
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

export default function ReservationConfirm() {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    GetVisitor();
  }, []);

  var config = {
    method: "get",
    url: "/visitor?site_id=1&manager_id=WT0000000000&visitor_id=WT0000000061",
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
            성명
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
            value={visitors.visitor_name}
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "2",
            }}
            variant="filled"
            value={visitors.visitor_name}
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "3",
            }}
            variant="filled"
            value={visitors.telephone}
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "4",
            }}
            variant="filled"
            value={visitors.comapny_name}
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "5",
            }}
            variant="filled"
            value={visitors.visitor_name}
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "6",
            }}
            variant="filled"
            value={visitors.visitor_name}
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "7",
            }}
            variant="filled"
            value={visitors.car_no}
          />
          <TextField
            sx={{
              gridColumn: "2",
              gridRow: "8",
            }}
            variant="filled"
            value={visitors.visitor_name}
          />
        </Box>
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
  );
}
