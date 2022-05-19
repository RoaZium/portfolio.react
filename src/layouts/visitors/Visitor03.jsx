import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const steps = ["개인정보 및 보안정책 동의", "방문신청 정보 입력", "예약 확인"];

export default function Visitor03() {
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
        <Stepper
          sx={{
            alignItems: "center",
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
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "614px",
        }}
      >
        <Box className="VisitorInfo" bgcolor="orange" border={1}>
          <Grid>
            <Grid item xs={12}>
              <Typography
                bgcolor="green"
                color="red"
                fontWeight="bold"
                fontSize={20}
              >
                ▶ 방문자 정보
              </Typography>
              <Divider />
              <Grid item xs={12} container spacing={0}>
                <Grid bgcolor="red">
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      label="성명"
                      variant="outlined"
                      autoFocus="true"
                    />
                    <TextField
                      id="outlined-basic"
                      label="연락처"
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
                <Grid bgcolor="red">
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      label="홍길동"
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
                <Grid bgcolor="red">
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      label="이메일"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="회사명"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="방문목적"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="피방문자성명"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Stack>
                </Grid>
                <Grid bgcolor="red">
                  <Stack>
                    <TextField
                      id="outlined-basic"
                      label="visitor@xx.com"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="xx테크"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="업무회의"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="고길동"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                    />
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Link to="/Visitor04" style={{ textDecoration: "none" }}>
                  <Button variant="contained">예약하기</Button>
                </Link>
              </Grid>
            </Grid>
            <Grid></Grid>
          </Grid>
        </Box>
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
            <Link to="/Visitor02" style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth>
                이전 페이지
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={2} textAlign="center">
            <Link to="/Visitor04" style={{ textDecoration: "none" }}>
              <Button variant="contained" fullWidth>
                다음 페이지
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
