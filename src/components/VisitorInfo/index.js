import { useContext, useDebugValue, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ApprovalState } from "../../Datas/ComboBox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { SelectedVisitorInfoContext } from "../../App";
import {
  DeleteAuthorization,
  PutAuthorization,
} from "../../APIs/Authorization";
import { PostMobile, DeleteMobile } from "../../APIs/Mobile";

export default function VisitorInfo() {
  const navigate = useNavigate();
  const { selectedVisitorInfo, setSelectedVisitorInfo } = useContext(
    SelectedVisitorInfoContext
  );
  const [visitorInfo, setVisitorInfo] = useState({});
  const [authorizationList, setAuthorizationList] = useState([]);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [userAuthorList, setUserAuthorList] = useState([]);

  useEffect(() => {
    console.log("useEffet", "");
    setSelectedVisitor(selectedVisitor);

    if (selectedVisitorInfo[0] !== undefined) {
      setVisitorInfo(selectedVisitorInfo[0]);
    } else {
      navigate("/VisitorManagement");
    }

    GetAuthorization();
    user();
  }, []);

  var config = {
    method: "get",
    url: `/authorization?site_id=${localStorage.getItem(
      "SiteID"
    )}&user_id=${localStorage.getItem("visitorID")}`,
    headers: {
      login_token: localStorage.getItem("Token"),
    },
  };

  const GetAuthorization = async () => {
    await axios(config)
      .then(function (response) {
        if (response.data["authorities"].length > 0) {
          setAuthorizationList(response.data["authorities"]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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

  var userAuthorityConfig = {
    method: "get",
    url: `/userauthoritygroup?site_id=${localStorage.getItem(
      "SiteID"
    )}&user_id=${localStorage.getItem("visitorID")}`,
    headers: {
      login_token: localStorage.getItem("Token"),
    },
  };

  const user = async () => {
    console.log("config", userAuthorityConfig);
    await axios(userAuthorityConfig)
      .then(function (response) {
        console.log("config", response.data);
        setUserAuthorList(response.data["userauthorities"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" flexDirection="column">
        <Box
          sx={{
            gridRow: "2",
            borderRadius: 3,
            boxShadow: 3,
            p: 2,
            marginBottom: 2,
            display: "grid",
            gridAutoRows: "30px 5px auto",
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
            ????????? ??????
          </Typography>
          <Divider
            sx={{
              gridRow: "2",
              marginBottom: 2,
              marginLeft: -2,
              marginRight: -2,
            }}
          />
          <Grid
            container
            spacing={3}
            sx={{
              gridRow: "3",
              display: "flex",
            }}
          >
            <Grid
              item
              container
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                label="??????"
                value={visitorInfo.visitor_name}
                variant="filled"
                sx={{
                  marginBottom: 2,
                }}
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="?????????"
                value={visitorInfo.comapny_name}
                variant="filled"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="?????????"
                value={visitorInfo.email}
                variant="filled"
              />
              <DateTimePicker
                label="?????? ?????????"
                value={visitorInfo.visit_from}
                inputFormat="yyyy-MM-dd HH:mm"
                onChange={() => console.log(visitorInfo.visit_to)}
                renderInput={(params) => (
                  <TextField {...params} sx={{ marginBottom: 2 }} />
                )}
              />
              <Autocomplete
                multiple
                disablePortal
                id="combo-box-demo"
                value={userAuthorList}
                options={authorizationList}
                getOptionLabel={(option) => option.authoritygroup_name}
                onInputChange={(event, newInputValue) => {
                  console.log(newInputValue);
                }}
                onChange={(event, newValue, reason, detail) => {
                  localStorage.setItem(
                    "AuthoritygroupID",
                    detail.option["authoritygroup_id"]
                  );

                  switch (reason) {
                    case "selectOption": // ???????????? ??????
                      var resultFilter = userAuthorList.filter(
                        (p) =>
                          p.authoritygroup_id ===
                          detail.option.authoritygroup_id
                      );

                      if (resultFilter.length >= 1) {
                        alert("?????? ???????????? ????????? ???????????????.");
                        return;
                      }

                      userAuthorList.push({
                        user_id: localStorage.getItem("visitorID"),
                        authoritygroup_id: detail.option.authoritygroup_id,
                        authoritygroup_name: detail.option.authoritygroup_name,
                        site_id: localStorage.getItem("SiteID"),
                        site_name: "SITE",
                      });

                      setUserAuthorList(userAuthorList);
                      PutAuthorization(detail.option.authoritygroup_id);
                      break;
                    case "removeOption": // ???????????? ??????
                      DeleteAuthorization(detail.option.authoritygroup_id);

                      var result = userAuthorList.filter(
                        (id) =>
                          id.authoritygroup_id !==
                          detail.option.authoritygroup_id
                      );

                      setUserAuthorList(result);
                      break;
                    default:
                      break;
                  }

                  setSelectedVisitor(newValue.authoritygroup_id);
                }}
                sx={{ gridColumn: "2", gridRow: "5" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="????????????"
                    onDelete={(value) => console.log("t", value)}
                  />
                )}
              />
            </Grid>
            <Grid
              item
              container
              xs={6}
              sx={{
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="?????????"
                value={visitorInfo.telephone}
                variant="filled"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="????????????"
                value={visitorInfo.purpose}
                variant="filled"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="????????????"
                value={visitorInfo.car_no}
                variant="filled"
              />
              <DateTimePicker
                label="?????? ?????????"
                value={visitorInfo.visit_to}
                inputFormat="yyyy-MM-dd HH:mm"
                onChange={() => console.log(visitorInfo.visit_to)}
                renderInput={(params) => (
                  <TextField {...params} sx={{ marginBottom: 2 }} />
                )}
              />
              <Autocomplete
                disablePortal
                id="ApprovalComboBox"
                options={ApprovalState}
                getOptionDisabled={(option) => false}
                defaultValue={
                  selectedVisitorInfo[0].visit_approval === false
                    ? "??????"
                    : "??????"
                }
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
                sx={{ gridColumn: "2", gridRow: "6", marginBottom: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="????????????" />
                )}
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
                  ?????????
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    gridColumn: "3",
                    gridRow: "1",
                  }}
                  onClick={() => {
                    PostMobile(
                      visitorInfo.visitor_id,
                      visitorInfo.visit_from,
                      visitorInfo.visit_to
                    );
                  }}
                >
                  ??????
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    gridColumn: "5",
                    gridRow: "1",
                  }}
                  onClick={() => {
                    DeleteMobile(localStorage.getItem("MobileCode"));
                  }}
                >
                  ??????
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            gridRow: "3",
            borderRadius: 3,
            boxShadow: 3,
            p: 2,
            display: "grid",
            gridAutoRows: "30px 5px auto",
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
            ???????????? ??????
          </Typography>
          <Divider
            sx={{
              gridRow: "2",
              marginBottom: 2,
              marginLeft: -2,
              marginRight: -2,
            }}
          />
          <Grid
            container
            spacing={3}
            sx={{
              gridRow: "3",
              display: "flex",
            }}
          >
            <Grid
              item
              container
              xs={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="???????????? ??????"
                value={visitorInfo.manager_name}
                variant="filled"
              />
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="???????????? ??????"
                value={visitorInfo.manager_dept_name}
                variant="filled"
              />
            </Grid>
            <Grid
              item
              container
              xs={6}
              sx={{
                flexDirection: "column",
              }}
            >
              <TextField
                sx={{
                  marginBottom: 2,
                }}
                label="???????????? ?????????"
                value={visitorInfo.manager_telephone}
                variant="filled"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
