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
import Company from "../../assets/images/Login_company.jpg";

export default function Login() {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        height: "80vh",
        bgcolor: "transparent",
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
          gridAutoColumns: "450px auto",
          gridTemplateRows: "1",
          boxShadow: 5,
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="center"
          sx={{
            bgcolor: "white",
            gridColumn: 1,
            gridRow: 1,
          }}
        >
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="end"
            justifyContent="center"
          >
            <Typography
              fontWeight="bold"
              variant="h6"
              textAlign="center"
            >
              WELCOME TO
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box component="img" src={Logo} />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="end"
            justifyContent="center"
          >
            <FormControl variant="standard">
              <OutlinedInput
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
                sx={{
                  borderRadius: 10,
                  height: "50px",
                  width: "350px",
                  marginLeft: 3,
                  marginRight: 3,
                }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FormControl variant="standard">
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
                  width: "350px",
                  marginLeft: 3,
                  marginRight: 3,
                }}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box>
              <Link to="/Visitor" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 10,
                    alignSelf: "center",
                    justifySelf: "center",
                    width: "350px",
                  }}
                >
                  SIGN IN
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            bgcolor: "transparent",
            borderTopRightRadius: 13,
            borderBottomRightRadius: 13,
            gridColumn: 2,
            gridRow: 1,
          }}
        >
          <Box
            component="img"
            src={Company}
            sx={{
              bgcolor: "transparent",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
