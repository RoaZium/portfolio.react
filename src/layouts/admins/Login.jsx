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
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Company from "../../assets/images/Login_company.jpg";
import { useState } from "react";
import { sha512 } from "js-sha512";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [id, setID] = useState();
  const [password, setPassword] = useState();
  const [encryptionPassword, setEncryptionPassword] = useState();

  const LoginUser = () => {
    if (id === undefined || id === null) {
      alert("ID를 입력하세요.");
      return;
    }

    if (password === undefined || password === null) {
      alert("패스워드를 입력하세요.");
      return;
    }

    setEncryptionPassword(sha512(password));
    PostLogin();
  };

  var data = JSON.stringify({
    id: id,
    password: encryptionPassword,
  });

  var config = {
    method: "post",
    url: "/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const PostLogin = async () => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data["code"]));
        console.log(data);
        var code = JSON.stringify(response.data["code"]);

        if (code !== "1") {
          alert("비밀번호가 틀립니다.");
          return;
        }

        navigate("/VisitorManagement");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (prop) => (event) => {
    setPassword(event.target.value);
    setEncryptionPassword(sha512(event.target.value));
  };

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
            <Typography fontWeight="bold" variant="h6" textAlign="center">
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
                value={id}
                onChange={(event) => setID(event.target.value)}
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
                type="password"
                value={password}
                onChange={handleChange("password")}
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
              <Button
                variant="contained"
                sx={{
                  borderRadius: 10,
                  alignSelf: "center",
                  justifySelf: "center",
                  height: "50px",
                  width: "350px",
                }}
                onClick={LoginUser}
              >
                로그인
              </Button>
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
