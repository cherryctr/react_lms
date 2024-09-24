import React from 'react';
import BannerApp from '../../component/BannerApp/BannerApp'; // Import the BannerApp component
import { Container, Box } from '@mui/material'; // Optional, if using Material UI for layout

const HomePage = () => {
  return (
    <div>
     

      {/* Load BannerApp */}
      <BannerApp />

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <h1>Welcome to MyLMS</h1>
          <p>Discover new learning opportunities!</p>
          {/* You can add more components like a registration form or course listing here */}
        </Box>
      </Container>

      
    </div>
  );
};

export default HomePage;
