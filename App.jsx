import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import HireNow from "./pages/HireNow";
import BookCall from "./pages/BookCall";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hire" element={<HireNow />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
    </BrowserRouter>
  );
}








