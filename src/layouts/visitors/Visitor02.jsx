import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@material-ui/core/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const steps = ["개인정보 및 보안정책 동의", "방문신청 정보 입력", "예약 확인"];

export default function Visitor02() {
  return (
    <Box
      sx={{
        height: "80vh",
        bgcolor: "red",
      }}
    >
      <Grid>
        <Grid
          item
          xs={2}
          sx={{
            height: "60px",
          }}
        >
          <Box>
            <Stepper
              sx={{
                alignItems: "center",
              }}
              activeStep={0}
              alternativeLabel
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            height: "61vh",
          }}
        >
          <Grid>
            <Grid item xs={12} sx={{ bgcolor: "purple", height: "30.5vh" }}>
              <Typography textAlign="center" fontWeight="bold" fontSize={20}>
                개인정보 수집, 이용, 제공 동의
              </Typography>
              <Typography
                sx={{
                  alignItems: "center",
                  bgcolor: "blue",
                  height: "23vh",
                }}
              >
                (주) 종근당(이하. 회사라고 합니다.) 이용자들의 개인정보를 소중히
                다루고 개인정보와 관련된 정보 통신망 이용 촉진 및 정보 보호등에
                관한 법률(이하' 개인정보보호법) 등을 준수합니다. 귀하의
                개인정보를 수집함에 있어 아래 내용을 안내하고 있으니 자세히
                읽어보시고 모든 내용을 이해하신 후에 동의 여부를 결정 해주시기
                바랍니다.
              </Typography>
              <FormControlLabel
                sx={{
                  bgcolor: "powderblue",
                }}
                control={<Checkbox />}
                label="상기 내용을 확인 하였으며, 개인정보 수집 및 이용에 동의 합니다."
              />
            </Grid>
            <Grid item xs={12} sx={{ bgcolor: "gold", height: "30.5vh" }}>
              <Typography textAlign="center" fontWeight="bold" fontSize={20}>
                (주) 종근당 보안 정책 준수 동의
              </Typography>
              <Typography
                sx={{
                  alignItems: "center",
                  bgcolor: "blue",
                  height: "23vh",
                }}
              >
                · 지정된 장소 외 출입 및 개별 행동 금지(안내자와 상시 동행){" "}
                <br />
                · 사진 촬영 및 음성 녹음 금지 <br />
                · 사전 허가된 인원과 장비만 출입 및 반입 <br />
              </Typography>
              <Box
                sx={{
                  bgcolor: "whitesmoke",
                }}
              >
                <FormControlLabel
                  sx={{
                    bgcolor: "powderblue",
                  }}
                  control={<Checkbox />}
                  label="당사의 보안 정책의 내용을 확인 하였으며, 동의 합니다."
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            height: "10vh",
          }}
        >
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Box p={2} textAlign="center">
                  <Link to="/Visitor01" style={{ textDecoration: "none" }}>
                    <MyButton variant="contained" fullWidth>
                      이전 페이지
                    </MyButton>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box p={2} textAlign="center">
                  <Link to="/Visitor03" style={{ textDecoration: "none" }}>
                    <MyButton variant="contained" fullWidth>
                      다음 페이지
                    </MyButton>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
