import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { styled } from "@material-ui/core/styles";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

export default function Visitor02() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "yellow",
      }}
    >
      <Card>방문자 02</Card>
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
              <Link to="/Visitor01" style={{ textDecoration: "none" }}>
                <MyButton variant="contained" fullWidth>
                  이전 페이지
                </MyButton>
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
              <Link to="/Visitor01" style={{ textDecoration: "none" }}>
                <MyButton variant="contained" fullWidth>
                  홈으로
                </MyButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
