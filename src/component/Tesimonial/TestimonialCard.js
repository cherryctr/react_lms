import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';

const TestimonialCard = ({ name, avatar, testimony, occupation }) => {
  return (
    <Card sx={styles.card}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt={name}
          src={avatar}
          sx={{ width: 56, height: 56, mr: 2 }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {occupation}
          </Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          "{testimony}"
        </Typography>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    padding: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)', // Hover effect
    },
  },
};

export default TestimonialCard;
