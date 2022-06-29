import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { VisitorRows } from "../../Datas/VisitorList";
import { Button } from "@mui/material";
import { SelectedVisitorInfoContext } from "../../App";
import axios from "axios";

const columns = [
  {
    visitor_id: "VisitorID",
    headerName: "ID",
    flex: 0.01,
    editable: false,
    align: "center",
    headerAlign: "center",
    hide: true,
  },
  {
    field: "visitor_name",
    headerName: "이름",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "comapny_name",
    headerName: "회사명",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "telephone",
    headerName: "연락처",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "car_no",
    headerName: "차량번호",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "이메일",
    editable: false,
    align: "center",
    flex: 1.4,
    headerAlign: "center",
  },
  {
    field: "purpose",
    headerName: "방문 목적",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "visit_from",
    headerName: "방문 시작일",
    editable: false,
    align: "center",
    flex: 1.6,
    headerAlign: "center",
    type: "date",
  },
  {
    field: "visit_to",
    headerName: "방문 종료일",
    editable: false,
    align: "center",
    flex: 1.6,
    headerAlign: "center",
    type: "date",
  },
  {
    field: "manager_name",
    headerName: "피방문자 성명",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "manager_dept_name",
    headerName: "피방문자 부서",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "manager_telephone",
    headerName: "피방문자 연락처",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "agree_privacy",
    headerName: "개인정보동의",
    editable: false,
    align: "center",
    flex: 0.8,
    headerAlign: "center",
  },
];

const DEFAULT_DATA = [
  {
    agree_privacy: true,
    birthday: "",
    car_no: "",
    card_number: null,
    comapny_name: "",
    email: "",
    manager_dept_name: "",
    manager_id: "",
    manager_name: "",
    manager_telephone: "",
    mobile_status: 0,
    picture: null,
    purpose: "",
    sign_image: "",
    telephone: "",
    vip: false,
    visit_approval: false,
    visit_from: "",
    visit_to: "",
    visitor_id: "",
    visitor_name: "",
  },
];
export default function VisitorList() {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = React.useState(5);
  const { selectedVisitorInfo, setSelectedVisitorInfo } = React.useContext(
    SelectedVisitorInfoContext
  );
  const [visitorList, setVisitorList] = React.useState(DEFAULT_DATA);

  useEffect(() => {
    console.log("data", "data");
    GetVisitorAdmin();
  }, []);

  var config = {
    method: "get",
    url: `/visitoradmin?site_id=${localStorage.getItem("SiteID")}`,
    headers: {
      login_token: localStorage.getItem("Token"),
    },
  };

  const GetVisitorAdmin = async () => {
    await axios(config)
      .then(function (response) {
        setVisitorList(response.data["visitors"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const RowDoubleClick = () => {
    navigate("/VisitorDetailManagement");
  };

  const DeleteSelectedVisitor = () => {
    const visiotrFilter = visitorList.filter(
      (x) => x.visitor_id === selectedVisitorInfo[0].visitor_id
    );

    console.log("ss", visiotrFilter);
    console.log("TT", selectedVisitorInfo[0]);
    // setVisitorList(visiotrFilter);
    DeleteVisitor();
  };

  var DeleteConfig = {
    method: "delete",
    url: `/visitor?visitor_id=`,
    headers: {
      login_token: localStorage.getItem("Token"),
    },
  };

  const DeleteVisitor = async () => {
    DeleteConfig.url = `/visitor?visitor_id=${selectedVisitorInfo[0].visitor_id}`;
    await axios(DeleteConfig)
      .then(function (response) {
        alert("삭제되었습니다.");
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        height="70vh"
      >
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{ marginRight: 2 }}
            onClick={GetVisitorAdmin}
          >
            조회
          </Button>
          <Button variant="contained" onClick={DeleteSelectedVisitor}>
            삭제
          </Button>
        </Box>
        <DataGrid
          GridLinesVisibility="None"
          rows={visitorList}
          columns={columns}
          pageSize={pageSize}
          isCellEditable={(params) => 0}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onRowDoubleClick={RowDoubleClick}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection={false}
          getRowId={(row) => row.visitor_id}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedVisitorInfo = visitorList.filter((row) =>
              selectedIDs.has(row.visitor_id)
            );
            localStorage.setItem(
              "visitorID",
              selectedVisitorInfo[0].visitor_id
            );
            setSelectedVisitorInfo(selectedVisitorInfo);
          }}
          sx={{
            border: 0,
            borderColor: "primary.light",
            "& .MuiDataGrid-row:hover": {
              color: "primary.main",
            },
            ".MuiDataGrid-cell:focus": {
              outline: 0,
            },
            "&.MuiDataGrid-root": {
              border: "none",
            },
          }}
        />
        <div></div>
      </Box>
    </Box>
  );
}
