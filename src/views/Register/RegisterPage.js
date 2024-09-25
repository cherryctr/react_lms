import React from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';


const Register = () => {
  return (
    <div>
      {/* <h1>Register Page</h1> */}
      {/* Add your register form or other components here */}

	  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width={400} p={3} boxShadow={3} borderRadius={5}>
        <Typography variant="h5" mb={2} align="center">Registrasi</Typography>
        <TextField label="Email" fullWidth variant="outlined" margin="normal" />
        <TextField label="Password" type="password" fullWidth variant="outlined" margin="normal" />
        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>Login</Button>
      </Box>
    </Box>
    </div>
  );
};

export default Register;
