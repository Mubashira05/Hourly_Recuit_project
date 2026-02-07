import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function HireNow() {
  const [form, setForm] = useState({ role: "", hours: "" });
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.role || !form.hours) {
      setError("All fields are required");
      return;
    }
    setError("");
    alert("Request Submitted Successfully");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 6 }}>
      <Typography variant="h5" fontWeight={700}>
        Hire Developers
      </Typography>

      <TextField
        fullWidth
        label="Role Needed"
        sx={{ mt: 3 }}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />

      <TextField
        fullWidth
        label="Hours Required"
        sx={{ mt: 2 }}
        onChange={(e) => setForm({ ...form, hours: e.target.value })}
      />

      {error && <Typography color="error">{error}</Typography>}

      <Button variant="contained" sx={{ mt: 3 }} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
