import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import laptopImg from "../assets/laptopImg.png"

export default function Hero({ onHire }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        mt: 4,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" fontWeight={700}>
          Hire Developers & Test Engineers By the Hour
        </Typography>

        <Typography sx={{ mt: 2, color: "black" }}>
          Get pre-vetted developers, programmers, and testers when you need 
          them. Pay hourly, scale instantly.
        </Typography>

        <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 3,
          flexWrap: "wrap",
        }}
        >
          <Button 
          variant="contained"
          sx={{
            bgcolor: "#3b82f6",
            px: 3,
            py: 1.2,
            textTransform: "none",
            borderRadius: 2,
            fontSize: "16px",
          }}
          onClick={() => navigate("/hire")}
          >
            Hire Now 
          </Button>

          <Button 
           variant="outlined"
           sx={{
            borderColor: "#3b82f6",
            color: "#3b82f6",
            px: 3,
            py: 1.2,
            textTransform: "none",
            borderRadius: 2,
            fontSize: "16px",
           }}
           onClick={() => navigate("/book-call")}
           >
            Book Free Call 
           </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={laptopImg}
          alt="Laptop"
          sx={{
            width: { xs: "80%", md: 350 },
            maxWidth: "100%",
          }}
        />
      </Box>
    </Box>
  );
}
