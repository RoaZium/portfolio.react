import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function Login() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          bgcolor: "green",
          height: "740px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "1",
        }}
      >
        <Grid
          sx={{
            bgcolor: "yellow",
            gridColumn: 1,
            gridRow: 1,
          }}
        ></Grid>
        <Grid
          sx={{
            bgcolor: "red",
            gridColumn: 2,
            gridRow: 1,
          }}
        ></Grid>
      </Box>
    </Container>
  );
}
