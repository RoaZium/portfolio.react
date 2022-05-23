import { AccountCircle, Lock } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function Login() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        height: "80vh",
        bgcolor: "red",
        borderRadius: 3,
      }}
    >
      <Grid
        container
        sx={{
          bgcolor: "transparent",
          display: "grid",
          height: "460px",
          marginLeft: "150px",
          marginRight: "150px",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "1",
        }}
      >
        <Grid
          sx={{
            bgcolor: "white",
            borderTopLeftRadius: 13,
            borderBottomLeftRadius: 13,
            display: "grid",
            gridColumn: 1,
            gridRow: 1,
            gridAutoRows: "30px 60px 90px 70px 70px 50px 60px",
            gridTemplateColumns: "1",
            gridTemplateRows: "7",
          }}
        >
          <Typography
            fontWeight="bold"
            fontSize={18}
            sx={{
              gridRow: 2,
              alignItems: "center",
              bgcolor: "transparent",
              display: "center",
              justifyContent: "center",
            }}
          >
            WELCOME TO
          </Typography>
          <Box
            component="img"
            src={Logo}
            sx={{
              gridRow: 3,
              bgcolor: "transparent",
              height: "30px",
              justifySelf: "center",
            }}
          />
          <FormControl
            variant="standard"
            sx={{
              gridRow: 4,
            }}
          >
            <OutlinedInput
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              sx={{
                gridRow: 4,
                borderRadius: 10,
                height: "50px",
                justifySelf: "center",
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              gridRow: 5,
            }}
          >
            <OutlinedInput
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              sx={{
                borderRadius: 10,
                height: "50px",
                justifySelf: "center",
                marginLeft: 3,
                marginRight: 3,
              }}
            />
          </FormControl>
          <Box
            sx={{
              gridRow: 6,
            }}
          >
            <Link to="/Admin01" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 10,
                  fontSize: 16,
                  marginLeft: 3,
                  width: "380px",
                }}
              >
                SIGN IN
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid
          sx={{
            bgcolor: "orange",
            borderTopRightRadius: 13,
            borderBottomRightRadius: 13,
            gridColumn: 2,
            gridRow: 1,
          }}
        ></Grid>
      </Grid>
    </Box>
  );
}
