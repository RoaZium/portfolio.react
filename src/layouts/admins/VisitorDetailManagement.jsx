import React from "react";
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
import { Link } from "react-router-dom";
import {
  Autocomplete,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import {
  AccountCircle,
  AccountBox,
  PersonAddAlt1,
  NavigateNext,
} from "@mui/icons-material";

import { AppOpenContext } from "../../App";
import { AccessAuthority, ApprovalState } from "../../Datas/ComboBox";

const drawerWidth = 160;

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
    width: `calc(${theme.spacing(7)} + 1px)`,
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

export default function VisitorDetailManagement() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { appOpen, setAppOpen } = React.useContext(AppOpenContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" to="/Visitor">
      방문자 관리
    </Link>,
    <Typography key="3" color="text.primary">
      방문자 관리 상세
    </Typography>,
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={appOpen}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setAppOpen(true)}
            edge="start"
            sx={{
              marginRight: 2,
              ...(appOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            관리자
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/" onClick={handleClose}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={appOpen} bgcolor="red">
        <DrawerHeader>
          <IconButton onClick={() => setAppOpen(false)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItemButton component={Link} to="/Visitor">
            <ListItemIcon>
              <PersonAddAlt1 />
            </ListItemIcon>
            <ListItemText
              sx={{
                marginLeft: -2,
              }}
            >
              방문자 관리
            </ListItemText>
          </ListItemButton>
          <ListItemButton component={Link} to="/Admin">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText
              sx={{
                marginLeft: -2,
              }}
            >
              관라자 관리
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        sx={{
          display: "grid",
          width: "100%",
          boxShadow: 13,
          borderRadius: 2,
          height: "85vh",
          gridAutoRows: "5vh 10px auto",
          gridTemplateRows: "3",
        }}
      >
        <Box
          sx={{
            bgcolor: "transparent",
            borderRadius: 2,
            display: "flex",
            gridRow: 1,
            alignItems: "center",
            justifySelf: "stretch",
            marginLeft: 2,
          }}
        >
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
        <Box
          sx={{
            bgcolor: "transparent",
            display: "grid",
            gridAutoRows: "auto 70px",
            gridTemplateColumns: "1",
            gridTemplateRows: "3",
            gap: 1,
            boxShadow: 13,
            borderRadius: 2,
            gridRow: 3,
          }}
        >
          <Box
            sx={{
              gridRow: "1",
              bgcolor: "transparent",
              borderRadius: 3,
              boxShadow: 3,
              p: 2,
              display: "grid",
              gridAutoRows: "30px 5px 40px",
              gridTemplateColumns: "1",
              gridTemplateRows: "3",
            }}
          >
            <Typography
              bgcolor="transparent"
              fontWeight="bold"
              fontSize={20}
              sx={{
                gridRow: "1",
              }}
            >
              방문자 관리 상세
            </Typography>
            <Divider
              sx={{
                gridRow: "2",
                marginBottom: 2,
                marginLeft: -2,
                marginRight: -2,
              }}
            />
            <Box
              sx={{
                gridRow: "3",
                alignContent: "stretch",
                bgcolor: "transparent",
                display: "grid",
                gridTemplateColumns: "2",
                gridTemplateRows: "6",
                gap: 3,
              }}
            >
              <TextField
                sx={{
                  gridColumn: "1",
                  gridRow: "1",
                }}
                label="방문자 성명"
                variant="filled"
              />
              <TextField
                sx={{
                  gridColumn: "1",
                  gridRow: "2",
                }}
                label="연락처"
                variant="filled"
              />
              <TextField
                sx={{
                  gridColumn: "1",
                  gridRow: "3",
                }}
                label="방문기간"
                variant="filled"
              />
              <TextField
                sx={{
                  gridColumn: "1",
                  gridRow: "4",
                }}
                label="차량번호"
                variant="filled"
              />
              <TextField
                sx={{
                  gridColumn: "1",
                  gridRow: "5",
                }}
                label="모바일 출입방식"
                variant="filled"
              />
              <Box
                sx={{
                  gridColumn: "1",
                  gridRow: "6",
                  bgcolor: "#e8e8e8",
                  display: "grid",
                  gridAutoColumns: "auto auto 70px 70px",
                  gridTemplateColumns: "4",
                  gridTemplateRows: "1",
                }}
              >
                <Typography
                  sx={{
                    alignSelf: "center",
                    gridColumn: "1",
                    gridRow: "1",
                    marginLeft: "10px",
                  }}
                >
                  모바일
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    gridColumn: "3",
                    gridRow: "1",
                  }}
                >
                  신청
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    gridColumn: "4",
                    gridRow: "1",
                  }}
                >
                  삭제
                </Button>
              </Box>
              <TextField
                sx={{
                  gridColumn: "2",
                  gridRow: "1",
                }}
                label="이메일"
                variant="filled"
              />
              <TextField
                sx={{
                  gridColumn: "2",
                  gridRow: "2",
                }}
                label="회사명"
                variant="filled"
              />
              <TextField
                sx={{
                  gridColumn: "2",
                  gridRow: "3",
                }}
                label="방문목적"
                variant="filled"
              />
              <TextField
                sx={{
                  gridColumn: "2",
                  gridRow: "4",
                }}
                label="피방문자 성명"
                variant="filled"
              />
              <Link to="/Visitor04" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    gridColumn: "2",
                    gridRow: "5",
                  }}
                  variant="contained"
                >
                  예약하기
                </Button>
              </Link>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={AccessAuthority}
                sx={{ gridColumn: "2", gridRow: "5" }}
                renderInput={(params) => (
                  <TextField {...params} label="출입권한" />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={ApprovalState}
                sx={{ gridColumn: "2", gridRow: "6" }}
                renderInput={(params) => (
                  <TextField {...params} label="승인상태" />
                )}
              />
            </Box>
          </Box>
          <Box
            sx={{
              gridRow: "2",
              bgcolor: "orange",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 3,
              boxShadow: 3,
            }}
          >
            <Grid item sm={6}>
              <Box p={2} textAlign="center">
                <Link to="/Visitor" style={{ textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    취소
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box p={2} textAlign="center">
                <Link to="/Visitor" style={{ textDecoration: "none" }}>
                  <Button variant="contained" fullWidth>
                    완료
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
