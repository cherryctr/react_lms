import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import BannerApp from '../../component/BannerApp/BannerApp'; // Ensure this component is exported correctly
import HomeCourse from './components/HomeCourse'; // Ensure this component is exported correctly


const HomePage = () => {
  return (
    <div>
      {/* Banner Section */}
      <BannerApp />


      {/* Load Page gali potensi  */}
      <HomeCourse />

    </div>
  );
};

export default HomePage;
