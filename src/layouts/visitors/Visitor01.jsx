import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import InboxIcon from "@mui/icons-material/MoveToInbox";

export default function Visitor01() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "yellow",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          bgcolor: "#cfe8fc",
          height: "94vh",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box
              bgcolor="warning.main"
              color="info.contrastText"
              p={10}
              textAlign="center"
            >
              <Button
                style={{
                  maxWidth: "30px",
                  maxHeight: "30px",
                  minWidth: "200px",
                  minHeight: "200px",
                }}
                variant="contained"
                startIcon={<InboxIcon />}
              >
                방문자 예약 신청
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid item xs={12}>
              <Box
                bgcolor="warning.main"
                color="info.contrastText"
                p={5}
                textAlign="center"
              >
                <Button
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "200px",
                    minHeight: "200px",
                  }}
                  variant="contained"
                  startIcon={<InboxIcon />}
                >
                  방문자 예약 조회
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box bgcolor="warning.main" color="info.contrastText" p={5}>
                <Card>
                  <Typography>① 방문절차 안내</Typography>
                  <Typography>방문신청 &gt; 피방문자 통보 &gt; 내부승인 &gt; 방문수속 &gt; 방문</Typography>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
