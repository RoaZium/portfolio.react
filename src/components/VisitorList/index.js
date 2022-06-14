import React from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { VisitorRows } from "../../Datas/VisitorList";
import { Button, Grid } from "@mui/material";
import { VisitorInfoContext } from "../../App";

const columns = [
  // { field: "VisitorID", headerName: "ID", width: 90, editable: false },
  {
    field: "VisitorName",
    headerName: "이름",
    editable: false,
    align: "center",
    flex: 0.7,
    headerAlign: "center",
  },
  {
    field: "CompanyName",
    headerName: "회사명",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "TelePhone",
    headerName: "연락처",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "CarNo",
    headerName: "차량번호",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "Email",
    headerName: "이메일",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "BirthDay",
    headerName: "생년월일",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "Vip",
    headerName: "VIP",
    editable: false,
    align: "center",
    flex: 0.5,
    headerAlign: "center",
  },
  {
    field: "Purpose",
    headerName: "방문 목적",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "VisitFrom",
    headerName: "방문 시작일",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "VisitTo",
    headerName: "방문 종료일",
    editable: false,
    align: "center",
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "AgreePrivacy",
    headerName: "개인정보동의",
    editable: false,
    align: "center",
    flex: 0.8,
    headerAlign: "center",
  },
];

export default function VisitorList() {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = React.useState(5);
  const [visitorInfo, setVisitorInfo] = React.useContext(VisitorInfoContext);
  const [selectionModel, setSelectionModel] = React.useState([]);

  const RowDoubleClick = () => {
    navigate("/VisitorDetail");
    console.log(selectionModel.VisitorName);
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
          <Button variant="contained" sx={{ marginRight: 2 }}>
            수정
          </Button>
          <Button variant="contained">삭제</Button>
        </Box>
        <DataGrid
          GridLinesVisibility="None"
          rows={VisitorRows}
          columns={columns}
          pageSize={pageSize}
          isCellEditable={(params) => 0}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onRowDoubleClick={RowDoubleClick}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
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
      </Box>
    </Box>
  );
}
