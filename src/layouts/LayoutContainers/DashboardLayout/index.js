import { Box } from "@mui/material";

export default function DashboardLayout({ children }) {
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        boxShadow: 13,
        borderRadius: 2,
        height: "85vh",
      }}
    >
      {children}
    </Box>
  );
}
