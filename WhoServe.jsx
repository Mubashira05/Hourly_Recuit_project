import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WhoServe() {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h5" fontWeight={700}>
        Who We Serve
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 4, md: 12 },
          mt: 4,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", maxWidth: 300 }}>
          <Typography sx={{ fontSize: 26, color: "#8c8c8c", mr: 0 }}>
            «
          </Typography>
          <Typography>
            Startups needing fast developer bandwidth
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-start", maxWidth: 300 }}>
          <Typography sx={{ fontSize: 26, color: "#8c8c8c", mr: 0 }}>
            «
          </Typography>
          <Typography>
            No HR headaches, instant developer ramp-up for our sprints
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
