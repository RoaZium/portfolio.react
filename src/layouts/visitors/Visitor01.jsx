import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const buttonStyle = {
  minWidth: "300px",
  minHeight: "300px",
  backgroundColor: "#62b4f4",
  border: "3px solid",
  borderColor: "yellow",
  borderRadius: 5,
  boxShadow: 13,
};

export default function Visitor01() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        height: "80vh",
        bgcolor: "red",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={5}
          container
          justifyContent="center"
          alignContent="center"
        >
          <Link to="/Visitor02" style={{ textDecoration: "none" }}>
            <Button bgcolor="red" sx={buttonStyle} variant="outlined">
              방문자 예약 신청
              <AssignmentIndIcon
                sx={{
                  height: "100px",
                  width: "100px",
                  position: "absolute",
                  top: "30px",
                  color: "yellow",
                }}
              />
            </Button>
          </Link>
        </Grid>
        <Grid item xs={7} container>
          <Grid item xs={12} height="45%" container justifyContent="center">
            <Button
              sx={[
                {
                  boxShadow: 13,
                  minWidth: "470px",
                  border: "3px solid",
                  bgcolor: "#62b4f4",
                  borderColor: "yellow",
                  borderRadius: 5,
                },
              ]}
              variant="outlined"
              startIcon={<PersonSearchIcon sx={{ color: "yellow" }} />}
            >
              방문자 예약 조회
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            height="10%"
            sx={{
              pointerEvents: "none",
            }}
          ></Grid>
          <Grid item height="45%" xs={12} container justifyContent="center">
            <Card
              justifyContent="center"
              alignContent="center"
              sx={{
                width: "470px",
                border: "3px solid",
                color: "blue",
                borderColor: "yellow",
                boxShadow: 13,
                borderRadius: 5,
                bgcolor: "white",
              }}
            >
              <Typography
                sx={{
                  marginLeft: "30px",
                  color: "black",
                }}
              >
                ① 방문절차 안내
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  color: "black",
                }}
              >
                방문신청 &gt; 피방문자 통보 &gt; 내부승인 &gt; 방문수속 &gt;
                방문
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
