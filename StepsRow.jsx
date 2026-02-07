import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function StepsRow() {

  const steps = [
    "Share requirements",
    "Get profiles within 24 hours",
    "Approve & start work",
    "Pay hourly, track progress"
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 700, mb: 2 }}
      >
        How It Works
      </Typography>

      <Box className="steps-row" sx={{ justifyContent: "center", px: 1 }}>
        {steps.map((s, idx) => (
          <Box key={idx} className="step-box">
            <Typography variant="body2">
              <strong>{idx + 1}</strong> &nbsp; {s}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
