import React, { useEffect } from "react";
import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ApprovalState } from "../../Datas/ComboBox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SelectedVisitorInfoContext } from "../../App";
import axios from "axios";
import { ContactsTwoTone } from "@mui/icons-material";

export default function VisitorInfo() {
  const navigate = useNavigate();
  const { selectedVisitorInfo, setSelectedVisitorInfo } = React.useContext(
    SelectedVisitorInfoContext
  );
  const [visitorInfo, setVisitorInfo] = React.useState({});
  const [authorizationList, setAuthorizationList] = React.useState([]);
  const [selectedVisitor, setSelectedVisitor] = React.useState(null);

  useEffect(() => {
    setSelectedVisitor(selectedVisitor);
    console.log("useEffect: ", selectedVisitor);

    if (selectedVisitorInfo[0] !== undefined) {
      setVisitorInfo(selectedVisitorInfo[0]);
      console.log(selectedVisitorInfo[0]);
    } else {
      navigate("/VisitorManagement");
    }

    console.log("222");
    GetAuthorization();
  }, [selectedVisitor]);

  console.log("selectedVisitor:", selectedVisitor);

  var config = {
    method: "get",
    url: `/authorization?site_id=${localStorage.getItem("SiteID")}`,
    headers: {
      login_token: localStorage.getItem("Token"),
    },
  };

  const GetAuthorization = async () => {
    axios(config)
      .then(function (response) {
        if (response.data["authorities"].length > 0) {
          setAuthorizationList(response.data["authorities"]);
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  var putConfig = {
    method: "put",
    url: "/visitorauthoritygroup",
    headers: {
      login_token: localStorage.getItem("Token"),
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      visitor_id: visitorInfo.visitor_id,
      authoritygroup_id: selectedVisitor,
    }),
  };

  const PutVisitorInfo = async () => {
    await axios(putConfig)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const UpdateVisitor = async () => {
    console.log(putConfig);
    PutVisitorInfo();
  };

  var approvalData = {
    site_id: localStorage.getItem("SiteID"),
    visitor_id: visitorInfo.visitor_id,
    approval: 0,
  };

  var putApprovalConfig = {
    method: "put",
    url: "/visitorapproval",
    headers: {
      login_token: localStorage.getItem("Token"),
      "Content-Type": "application/json",
    },
    data: approvalData,
  };

  const PutVisitorApproval = async () => {
    await axios(putApprovalConfig)
      .then(function (response) {
        console.log(putApprovalConfig);
        console.log("Approval: ", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (prop) => {
    approvalData.approval = prop;
    PutVisitorApproval();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        alignItems="flex-start"
        display="flex"
        justifyContent="space-between"
        p={2}
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          borderRadius={2}
          p={2}
          boxShadow="3"
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "column" }}
            mb={2}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              textTransform="capitalize"
            >
              방문자 관리 상세
            </Typography>

            <Divider
              Color="skyblue"
              sx={{
                marginLeft: -2,
                marginRight: -2,
                marginTop: 1,
              }}
            />
          </Box>
          <Box
            mb={1}
            sx={{
              gridRow: "3",
              alignContent: "stretch",
              bgcolor: "transparent",
              display: "grid",
              gridTemplateColumns: "2",
              gridTemplateRows: "7",
              gap: 3,
            }}
          >
            <TextField
              sx={{
                gridColumn: "1",
                gridRow: "1",
              }}
              label="방문자 성명"
              value={visitorInfo.visitor_name}
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "1",
                gridRow: "2",
              }}
              label="연락처"
              value={visitorInfo.telephone}
              variant="filled"
            />
            <Grid
              container
              spacing={1}
              sx={{
                gridColumn: "1",
                gridrow: "4",
              }}
            >
              <Grid item display="flex">
                <Typography
                  sx={{
                    alignSelf: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  방문기간
                </Typography>
              </Grid>
              <Grid item>
                <DateTimePicker
                  label="시작일"
                  value={visitorInfo.visit_from}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
              <Grid item display="flex">
                <Typography
                  sx={{
                    alignSelf: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  ~
                </Typography>
              </Grid>
              <Grid item>
                <DateTimePicker
                  label="종료일"
                  value={visitorInfo.visit_to}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Grid>
            </Grid>
            <TextField
              sx={{
                gridColumn: "1",
                gridRow: "4",
              }}
              label="차량번호"
              value={visitorInfo.car_no}
              variant="filled"
            />
            <Box
              sx={{
                gridColumn: "1",
                gridRow: "6",
                bgcolor: "#e8e8e8",
                display: "grid",
                gridAutoColumns: "auto auto 70px 10px 70px",
                gridTemplateColumns: "6",
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
                  gridColumn: "5",
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
              value={visitorInfo.email}
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "2",
                gridRow: "2",
              }}
              label="회사명"
              value={visitorInfo.comapny_name}
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "2",
                gridRow: "3",
              }}
              label="방문목적"
              value={visitorInfo.purpose}
              variant="filled"
            />
            <TextField
              sx={{
                gridColumn: "2",
                gridRow: "4",
              }}
              label="피방문자 성명"
              value={visitorInfo.purpose}
              variant="filled"
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={authorizationList}
              getOptionLabel={(option) => option.authoritygroup_name}
              onChange={(event, newValue) => {
                if (newValue === null) {
                  return;
                }

                localStorage.setItem("AuthorityGroupID", newValue.authoritygroup_id)
                setSelectedVisitor(newValue.authoritygroup_id);
                console.log("ID2:", selectedVisitor);
              }}
              sx={{ gridColumn: "2", gridRow: "5" }}
              renderInput={(params) => (
                <TextField {...params} label="출입권한" />
              )}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={ApprovalState}
              getOptionDisabled={(option) => false}
              onChange={(event, newValue) => {
                if (newValue === null) {
                  return;
                }

                if (parseInt(newValue.code.toString(), 2) === 0x01) {
                  handleChange(1);
                } else {
                  handleChange(0);
                }
              }}
              sx={{ gridColumn: "2", gridRow: "6" }}
              renderInput={(params) => (
                <TextField {...params} label="승인상태" />
              )}
            />
            <Button
              sx={{
                gridColumn: "2",
                gridRow: "7",
                visibility: "hidden",
              }}
              variant="contained"
              onClick={UpdateVisitor}
            >
              예약하기
            </Button>
            <Button
              sx={{
                gridColumn: "2",
                gridRow: "7",
              }}
              variant="contained"
              onClick={UpdateVisitor}
            >
              예약하기
            </Button>
          </Box>
          <Box
            mt={3}
            display="flex"
            flexDirection="row"
            sx={{
              gridRow: "2",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 3,
            }}
          >
            <Grid container>
              <Grid item sm={6}>
                <Box pr={1.5} textAlign="center">
                  <Link
                    to="/VisitorManagement"
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" fullWidth>
                      취소
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid item sm={6}>
                <Box pl={1.5} textAlign="center">
                  <Link
                    to="/VisitorManagement"
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" fullWidth>
                      완료
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
