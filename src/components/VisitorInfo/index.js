import React from "react";
import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { AccessAuthority, ApprovalState } from "../../Datas/ComboBox";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function VisitorInfo() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
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
                  value={value}
                  onChange={handleChange}
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
                  value={value}
                  onChange={handleChange}
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
            <Link
              to="/Visitor"
              style={{ textDecoration: "none", justifySelf: "flex-end" }}
            >
              <Button
                sx={{
                  gridColumn: "2",
                  gridRow: "7",
                  visibility: "hidden",
                }}
                variant="contained"
              >
                예약하기
              </Button>
            </Link>
            <Link
              to="/Visitor"
              style={{ textDecoration: "none", justifySelf: "flex-end" }}
            >
              <Button
                sx={{
                  gridColumn: "2",
                  gridRow: "7",
                }}
                variant="contained"
              >
                예약하기
              </Button>
            </Link>
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
                  <Link to="/Visitor" style={{ textDecoration: "none" }}>
                    <Button variant="contained" fullWidth>
                      취소
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid item sm={6}>
                <Box pl={1.5} textAlign="center">
                  <Link to="/Visitor" style={{ textDecoration: "none" }}>
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
