import React from 'react';
import { Box, Typography } from '@mui/material';

const BannerSection = () => {
  const styles = {
    section: {
      backgroundImage: 'url(https://kartuprakerja.sekolahpintar.com/assets/images/patter-1-1.jpg)',
      backgroundSize: 'cover', // Ensures the image covers the full section
      backgroundPosition: 'center', // Centers the background image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      height: '400px', // Increased height for a more spacious look
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative', // For overlay positioning
      padding: '0 20px', // Padding to avoid text touching the edges
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay for better contrast
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0, // Make sure the overlay is behind the content
    },
    content: {
      position: 'relative', // Keeps the text above the overlay
      zIndex: 1, // Ensures the text is above the overlay
      color: 'white',
      fontWeight: 'bold',
      fontSize: '2rem', // Slightly larger font size for better readability
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Add text shadow for better contrast
    },
  };

  return (
    <Box component="section" sx={styles.section}>
      {/* Dark overlay for better readability */}
      <Box sx={styles.overlay}></Box> 
      <Typography variant="h3" sx={styles.content}>
        Tambah Ilmu Masa Depan Bermutu dengan Kursus Populer dari Kami
      </Typography>
    </Box>
  );
};

export default BannerSection;
