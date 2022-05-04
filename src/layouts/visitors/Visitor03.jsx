import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import InboxIcon from "@mui/icons-material/MoveToInbox";
export default function Visitor03() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "yellow",
      }}
    >
      <Card>방문자 03</Card>
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
              p={2}
              textAlign="center"
            >
              <Link to="/Visitor02" style={{ textDecoration: "none" }}>
                <Button variant="contained" fullWidth>
                  이전 페이지
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              bgcolor="warning.main"
              color="info.contrastText"
              p={2}
              textAlign="center"
            >
              <Link to="/Visitor03" style={{ textDecoration: "none" }}>
                <Button variant="contained" fullWidth>
                  다음 페이지
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
