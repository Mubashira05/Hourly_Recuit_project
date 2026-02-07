import React from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"

export default function WhySection() {
    const leftItems = [
        "No long-term lock-ins",
        "Pre-vetted talent",
        "Flexible scale-up/down",
    ];

    const rightItems = [
        "Startups needing fast developers",
        "Agencies needing hourly resources",
        "Product companies requiring flexible QA",
    ];

    return (
        <Box sx={{ textAlign: "center", mt:8 }}>

           <Typography variant="h5" fontWeight={700} mb={4}>
            Why HourlyRecuit?
           </Typography>

           <Box
             sx={{
                display: "flex",
                justifyContent: "center",
                gap: 6,
                flexWrap: "wrap",
             }}>
                <Box>
                    {leftItems.map((text, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                            <CheckIcon color="black" sx={{ fontSize:20, mr: 1}}/>
                            <Typography>{text}</Typography>
                        </Box>
                    ))}
                </Box>
                
                <Box>
                    {rightItems.map((text, index) => (
                        <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1.5}}>
                            <CheckIcon color="black" sx={{ fontSize: 20, mr: 1}}/>
                            <Typography>{text}</Typography>
                        </Box>    
                    ))}
                </Box>
             </Box>
        </Box>
    )
}
