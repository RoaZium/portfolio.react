import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Route, Routes } from "react-router-dom";
import Visitor01 from "./Visitor01";
import Visitor02 from "./Visitor02";
import Visitor03 from "./Visitor03";
import Visitor04 from "./Visitor04";
import Visitor05 from "./Visitor05";
import { Button, Container } from "@mui/material";
import CI from "../../assets/images/CI.png";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { height } from "@mui/material/node_modules/@mui/system";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box maxWidth sx={{ bgcolor: "transparent", height: "10vh" }}>
        <Grid container spacing={0}>
          <Grid item xs={1.2}>
            <Box
              component="img"
              src={CI}
              sx={{
                bgcolor: "transparent",
                height: 55,
                marginLeft: 2,
                my: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{
                bgcolor: "transparent",
                height: 55,
                my: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              방문 예약 시스템
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box maxWidth sx={{ bgcolor: "#dd09f4", height: "90vh" }}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Visitor01 />} />
            <Route path="/Visitor01" element={<Visitor01 />} />
            <Route path="/Visitor02" element={<Visitor02 />} />
            <Route path="/Visitor03" element={<Visitor03 />} />
            <Route path="/Visitor04" element={<Visitor04 />} />
            <Route path="/Visitor05" element={<Visitor05 />} />
          </Routes>
        </Container>
      </Box>
    </React.Fragment>
  );
}
