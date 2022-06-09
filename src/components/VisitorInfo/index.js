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

export default function VisitorInfo() {
  return (
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
          <Typography variant="h6" fontWeight="bold" textTransform="capitalize">
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
              gridAutoColumns: "auto auto 70px 10px 70px 10px",
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
            renderInput={(params) => <TextField {...params} label="출입권한" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ApprovalState}
            sx={{ gridColumn: "2", gridRow: "6" }}
            renderInput={(params) => <TextField {...params} label="승인상태" />}
          />
          <Link to="/Visitor" style={{ textDecoration: "none" }}>
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
          mb={1}
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
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
