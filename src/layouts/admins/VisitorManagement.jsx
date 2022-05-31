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
import { Link } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import {
  AccountCircle,
  AccountBox,
  PersonAddAlt1,
  PersonSearch,
} from "@mui/icons-material";

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

const columns = [
  { id: "number", label: "번호", minWidth: 70, align: "center" },
  { id: "visitorname", label: "방문자", minWidth: 100, align: "center" },
  { id: "phonenumber", label: "전화번호", minWidth: 170, align: "center" },
  { id: "company", label: "회사명", minWidth: 170, align: "center" },
  { id: "carnumber", label: "차량번호", minWidth: 120, align: "center" },
  { id: "assign", label: "승인", minWidth: 100, align: "center" },
  { id: "interviewer", label: "피방문자", minWidth: 100, align: "center" },
  { id: "department", label: "부서", minWidth: 170, align: "center" },
  {
    id: "reservationnumber",
    label: "예약번호",
    minWidth: 170,
    align: "center",
  },
  { id: "people", label: "동행자", minWidth: 70, align: "center" },
  { id: "visitorpurpose", label: "방문목적", minWidth: 170, align: "center" },
  {
    id: "privacyconsent",
    label: "개인정보동의",
    minWidth: 100,
    align: "center",
  },
];

function createData(
  number,
  visitorname,
  phonenumber,
  company,
  carnumber,
  assign,
  interviewer,
  department,
  reservationnumber,
  people,
  visitorpurpose,
  privacyconsent
) {
  return {
    number,
    visitorname,
    phonenumber,
    company,
    carnumber,
    assign,
    interviewer,
    department,
    reservationnumber,
    people,
    visitorpurpose,
    privacyconsent,
  };
}

const visitorData = [
  createData(
    "1",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "2",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "3",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "4",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "5",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "6",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "7",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "8",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "9",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "10",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "11",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "12",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "13",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "14",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
  createData(
    "15",
    "홍길동",
    "010-1234-5678",
    "xx테크",
    "56가 2323",
    "승인",
    "고길동",
    "영업1팀",
    "123456789",
    "3",
    "회의",
    "동의"
  ),
];

export default function VisitorManagement() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log("true");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    console.log("false");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: "none" }),
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
      <Drawer variant="permanent" open={open} bgcolor="red">
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
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
          width: "100%",
          overflow: "hidden",
          boxShadow: 13,
          borderRadius: 2,
          height: "85vh",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                bgcolor: "skyblue",
              }}
            >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {visitorData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={visitorData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}
