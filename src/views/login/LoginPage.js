import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width={400} p={3} boxShadow={3} borderRadius={5}>
        <Typography variant="h5" mb={2} align="center">Login</Typography>
        <TextField label="Email" fullWidth variant="outlined" margin="normal" />
        <TextField label="Password" type="password" fullWidth variant="outlined" margin="normal" />
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>Login</Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
