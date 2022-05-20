import { Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function Login() {
  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "auto auto",
        gridTemplateColumns: "2",
        gridTemplateRows: "1",
      }}
    >
      <Grid></Grid>
      <Grid></Grid>
    </Box>
  );
}
