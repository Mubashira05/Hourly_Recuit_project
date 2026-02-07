import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "../Components/Header";
import Hero from "../Components/Hero";
import StepsRow from "../Components/StepsRow";
import WhySection from "../Components/WhySection";
import WhoServe from "../Components/WhoServe";
import CTA from "../Components/CTA";

export default function LandingPage() {

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box className="app-card">
        <Header />
        <Hero />
        <StepsRow/>
        <WhySection/>
        <WhoServe/>
        <CTA/>
      </Box>
    </Container>
  );
}
