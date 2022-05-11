import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

export default function Visitor01() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        bgcolor: "red",
        height: "90vh",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Box
            bgcolor="warning.main"
            color="info.contrastText"
            p={10}
            textAlign="center"
          >
            <Link to="/Visitor02" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  minWidth: "300px",
                  minHeight: "300px",
                  borderColor: "black",
                  borderRadius: 20,
                }}
                variant="outlined"
              >
                방문자 예약 신청
                <AssignmentIndIcon
                  style={{ position: "absolute", top: "30px" }}
                  sx={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} container spacing={2}>
          <Grid item xs={12}>
            <Box
              bgcolor="warning.main"
              color="info.contrastText"
              p={6}
              textAlign="center"
            >
              <Button
                style={{
                  minWidth: "300px",
                  minHeight: "300px",
                  borderColor: "black",
                  borderRadius: 20,
                }}
                variant="outlined"
                startIcon={<PersonSearchIcon />}
              >
                방문자 예약 조회
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{
              height: "50px",
            }}>
              <Typography>① 방문절차 안내</Typography>
              <Typography>
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
