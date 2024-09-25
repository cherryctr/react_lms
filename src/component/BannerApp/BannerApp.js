import React, { useState } from "react";
import { Box, Typography, Button, Skeleton } from '@mui/material';

const BannerApp = () => {
  // State for tracking whether the original image has been loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  // Placeholder and original image URLs
  const placeholderImage = "https://via.placeholder.com/1920x300"; // Placeholder image
  const originalImage = "https://kartuprakerja.sekolahpintar.com/static/media/banner_web.695ff6a6.png"; // The new original image

  // Function to handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true); // Set to true when the original image is loaded
  };

  return (
    <Box sx={styles.bannerWrapper}>
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={{ xs: 400, md: 300, lg: 500 }} // Skeleton height to match banner height
          sx={styles.skeleton}
        />
      )}

      <Box
        sx={{
          ...styles.banner,
          backgroundImage: `url(${imageLoaded ? originalImage : placeholderImage})`,
        }}
      >
        {/* Load original image in the background, set display to none */}
        <img
          src={originalImage}
          alt="Banner"
          style={{ display: "none" }}
          onLoad={handleImageLoad}
        />

        {imageLoaded ? (
          <Box sx={styles.bannerContent}>
            <Typography variant="h3" component="h1" sx={styles.bannerTitle}>
              Welcome to MyLMS
            </Typography>
            <Typography variant="subtitle1" component="p" sx={styles.bannerSubtitle}>
              Learn new skills and advance your career with top online courses!
            </Typography>
            <Button variant="contained" color="warning" size="large" sx={styles.bannerButton}>
              Get Started
            </Button>
          </Box>
        ) : (
          <Box sx={styles.skeletonContent}>
            <Skeleton variant="text" width="60%" height={40} />
            <Skeleton variant="text" width="40%" height={30} sx={{ marginBottom: 2 }} />
            <Skeleton variant="rectangular" width="30%" height={50} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

// Material-UI styles using sx
const styles = {
  bannerWrapper: {
    position: "relative",
    width: "100%",
    height: { xs: "400px", md: "300px", lg: "500px" },
    overflow: "hidden",
  },
  banner: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%", // Use full height
    display: "flex",
    justifyContent: "flex-start", // Align content to the left
    alignItems: "center",
    color: "#fff",
    transition: "background-image 0.3s ease-in-out", // Smooth transition when the original image loads
    paddingLeft: { xs: "10px", md: "5%", lg: "10%" }, // Adjust padding based on screen size
  },
  skeleton: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "#e0e0e0",
  },
  bannerContent: {
    zIndex: 2,
    textAlign: "left", // Align text to the left
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background for better text readability
    padding: { xs: "10px", md: "20px" }, // Responsive padding for smaller and larger screens
    borderRadius: "10px",
    maxWidth: { xs: "100%", md: "60%", lg: "40%" }, // Adjust max width based on screen size
  },
  bannerTitle: {
    fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3rem" }, // Responsive font size for small, medium, and large screens
    fontWeight: "bold",
    marginBottom: "10px",
  },
  bannerSubtitle: {
    fontSize: { xs: "0.9rem", md: "1.2rem", lg: "1.4rem" }, // Responsive subtitle size
    marginBottom: "20px",
  },
  bannerButton: {
    backgroundColor: "#ff9800",
    color: "#fff",
    padding: { xs: "8px 16px", md: "10px 20px" }, // Adjust button padding for different devices
    borderRadius: "5px",
    fontSize: { xs: "0.8rem", md: "1rem" }, // Responsive font size for button
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#e68900", // Hover effect on button
    },
  },
  skeletonContent: {
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    padding: { xs: "10px", md: "20px" },
    width: { xs: "100%", md: "60%", lg: "40%" }, // Adjust content width based on screen size
  },
};

export default BannerApp;
