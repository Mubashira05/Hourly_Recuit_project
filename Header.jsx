import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Typography fontWeight={700}>HourlyRecuit</Typography>

      <Box>
        <Button
          variant="contained"
          size="small"
          sx={{ mr: 1 }}
          onClick={() => navigate("/hire")}
        >
          Hire Now
        </Button>

        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate("/book-call")}
        >
          Book Free Call
        </Button>
      </Box>
    </Box>
  );
}

