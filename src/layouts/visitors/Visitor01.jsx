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
  borderRadius: 10,
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
        justifyContent: "flex-end",
      }}
    >
      <Grid container>
        <Grid
          bgcolor="blue"
          item
          xs={6}
          container
          justifyContent="center"
        >
          <Link to="/Visitor02" style={{ textDecoration: "none" }}>
            <Button sx={buttonStyle} variant="contained">
              방문자 예약 신청
              <AssignmentIndIcon
                sx={{
                  height: "100px",
                  width: "100px",
                  position: "absolute",
                  top: "40px",
                  color: "yellow",
                }}
              />
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          bgcolor="yellow"
          xs={6}
          container
          justifyContent="center"
        >
          <Link to="/Visitor02" style={{ textDecoration: "none" }}>
            <Button sx={buttonStyle} variant="contained">
              방문자 예약 조회
              <AssignmentIndIcon
                sx={{
                  height: "100px",
                  width: "100px",
                  position: "absolute",
                  top: "40px",
                  color: "yellow",
                }}
              />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
