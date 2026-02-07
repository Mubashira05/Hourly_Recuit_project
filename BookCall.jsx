import { Box, TextField, Button, Typography } from "@mui/material";

export default function BookCall() {
  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 6 }}>
      <Typography variant="h5" fontWeight={700}>
        Book a Free Consultation Call
      </Typography>

      <TextField fullWidth label="Name" sx={{ mt: 3 }} />
      <TextField fullWidth label="Email" sx={{ mt: 2 }} />
      <TextField fullWidth label="Preferred Date" sx={{ mt: 2 }} />

      <Button variant="contained" sx={{ mt: 3 }}>
        Book Call
      </Button>
    </Box>
  );
}
