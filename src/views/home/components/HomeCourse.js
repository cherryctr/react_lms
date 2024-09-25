import React from 'react';
import backgroundImage from '../../../assets/backgound.png'; // Import your image


import { Skeleton,Grid, Box, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';

import Testimonial from './TestimonialCard'; // Ensure this component is exported correctly





const HomeCourse = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // State untuk loading
  // Dummy course data for demonstration purposes
  useEffect(() => {
    // Simulasi pengambilan data dari API
    setTimeout(() => {
      setCourses([
        {
          id: 1,
          title: "Introduction to Digital Marketing",
          videos: 33,
          price: 500000,
          description: "Learn the fundamentals of digital marketing from experts.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 2,
          title: "Data Science for Beginners",
          videos: 40,
          price: 600000,
          description: "A beginner's guide to understanding the world of data science.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 3,
          title: "Web Development Bootcamp",
          videos: 25,
          price: 750000,
          description: "Become a web developer with our intensive bootcamp.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 4,
          title: "Graphic Design Masterclass",
          videos: 20,
          price: 450000,
          description: "Master the basics of graphic design and create stunning visuals.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 5,
          title: "Advanced SEO Techniques",
          videos: 15,
          price: 550000,
          description: "Learn advanced SEO techniques to boost your website's visibility.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 6,
          title: "Python Programming for Beginners",
          videos: 50,
          price: 700000,
          description: "Learn Python from scratch and start building your own applications.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 7,
          title: "Project Management Essentials",
          videos: 12,
          price: 650000,
          description: "Learn how to manage projects effectively with proven techniques.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 8,
          title: "Artificial Intelligence and Machine Learning",
          videos: 45,
          price: 800000,
          description: "An introduction to AI and Machine Learning for beginners.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 9,
          title: "Cybersecurity Basics",
          videos: 18,
          price: 600000,
          description: "Protect your online data by learning the basics of cybersecurity.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 10,
          title: "Financial Analysis and Modeling",
          videos: 30,
          price: 900000,
          description: "Become proficient in financial analysis and modeling techniques.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 11,
          title: "Content Marketing Strategy",
          videos: 22,
          price: 520000,
          description: "Create a powerful content marketing strategy to engage your audience.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 12,
          title: "E-commerce Mastery",
          videos: 35,
          price: 950000,
          description: "Learn how to set up and manage successful e-commerce businesses.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 13,
          title: "Leadership and Team Management",
          videos: 28,
          price: 850000,
          description: "Develop strong leadership skills and learn to manage teams effectively.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 14,
          title: "JavaScript for Web Developers",
          videos: 38,
          price: 780000,
          description: "Master JavaScript to build interactive web applications.",
          imageUrl: "https://via.placeholder.com/300x200",
        },
        {
          id: 15,
          title: "Social Media Marketing",
          videos: 27,
          price: 620000,
          description: "Learn how to grow your business using social media marketing techniques.",
          imageUrl: "https://via.placeholder.com/300x200",
        }
      ]);
      setLoading(false); // Setelah data berhasil diambil, set loading ke false
    }, 2000); // Simulasi delay 2 detik
  }, []);
  

  return (
    <div>
      {/* Gali Potensi Section */}
      <Box sx={{ py: 8, width: '100vw' }}>
        <Box sx={{ maxWidth: 'lg', margin: '0 auto', px: 4 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left Column: Text Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                Gali potensi dirimu dengan Kartu Prakerja
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Ingin lebih kompeten? Mau mengembangkan diri tanpa pusing memikirkan biaya? Bekali dirimu dengan Kartu Prakerja dan #SiapDariSekarang.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button variant="contained" color="primary" size="large">
                  Pilih Kursus
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Daftar
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Image Section */}
            <Grid item xs={12} md={6}>
              <img
                src={backgroundImage} // Use the imported image here
                alt="Kartu Prakerja Illustration"
                style={{ width: '100%', borderRadius: '8px' }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

     {/* Course List Section */}
     <Box sx={{ py: 8, width: '100vw', background: 'linear-gradient(90deg, rgba(255, 225, 102, 1) 0%, rgba(255, 240, 153, 1) 100%)' }}>
      <Box sx={{ maxWidth: 'lg', margin: '0 auto', px: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Course List
        </Typography>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          style={{
            paddingBottom: '20px',
          }}
        >
          {loading ? (
            // Menampilkan Skeleton jika loading
            [...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                  <Skeleton variant="rectangular" height={160} />
                  <CardContent>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Skeleton variant="text" width="30%" />
                      <Skeleton variant="text" width="50%" sx={{ ml: 'auto' }} />
                    </Box>
                    <Skeleton variant="rectangular" height={40} />
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))
          ) : (
            courses.map((course) => (
              <SwiperSlide key={course.id}>
                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={course.imageUrl}
                    alt={course.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem', mb: 2 }}>
                      {course.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                        <span style={{ marginRight: 5 }}>🕒</span>{course.videos} video
                      </Typography>
                      <Typography sx={{ marginLeft: 'auto', fontWeight: 'bold', color: '#007bff' }}>
                        Rp {course.price.toLocaleString('id-ID')}
                      </Typography>
                    </Box>
                    <Button variant="outlined" fullWidth sx={{ borderRadius: 2 }}>
                      See Preview
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))
          )}
        </Swiper>
        <div className="swiper-pagination" style={{ marginTop: '20px' }}></div>
      </Box>

      {/* All Courses Button */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ borderRadius: 4, px: 4, py: 2 }}
          href="/all-courses"
        >
          All Courses
        </Button>
      </Box>
    </Box>
    

    <Testimonial />

    </div>
  );
};

export default HomeCourse;
