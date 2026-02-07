import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center", mt: 10, mb: 8 }}>
      <Typography variant="h5" fontWeight={700}>
        Need developers by the hour?
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: "#3b82f6",
          px: 3,
          py: 1.2,
          borderRadius: 2,
          textTransform: "none",
        }}
        onClick={() => navigate("/book-call")}
      >
        Talk to Us
      </Button>
    </Box>
  );
}
