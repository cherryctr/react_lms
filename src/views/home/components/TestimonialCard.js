import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; // Import icon for the quote

// Contoh data testimonial
const testimonials = [
  {
    id: 1,
    name: "Chikita Winnie",
    date: "20 Mei 2021",
    avatar: "https://via.placeholder.com/150",
    testimony: "Video materi pembelajaran sangat lengkap.",
  },
  {
    id: 2,
    name: "Ade Yogi Setiadi",
    date: "09 Mei 2020",
    avatar: "https://via.placeholder.com/150",
    testimony: "Sarana dan prasarana lembaga ini sangat dibutuhkan, saya berharap agar sarana dan prasarana ini tidak berakhir namun bisa terus menerus ada dan update agar dapat membantu orang-orang mendapatkan ilmu dan menambah kompetensi yang ada dalam diri.",
  },
  {
    id: 3,
    name: "Yusri Pamili",
    date: "06 Mei 2020",
    avatar: "https://via.placeholder.com/150",
    testimony: "Lembaga ini sangat bagus untuk orang-orang yang belum berpengalaman kerja, karena disini kita bisa belajar banyak hal.",
  },

  {
    id: 4,
    name: "Yusri Pamili",
    date: "06 Mei 2020",
    avatar: "https://via.placeholder.com/150",
    testimony: "Lembaga ini sangat bagus untuk orang-orang yang belum berpengalaman kerja, karena disini kita bisa belajar banyak hal.",
  },

  {
    id: 5,
    name: "Yusri Pamili",
    date: "06 Mei 2020",
    avatar: "https://via.placeholder.com/150",
    testimony: "Lembaga ini sangat bagus untuk orang-orang yang belum berpengalaman kerja, karena disini kita bisa belajar banyak hal.",
  },
];

const TestimonialCard = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}> {/* Menggunakan Container dengan maxWidth lg */}
      <Typography variant="h4" align="center" gutterBottom sx={styles.title}>
        Yuk Intip Apa Kata Mereka Tentang Sekolahpintar.com
      </Typography>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card sx={styles.card}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <FormatQuoteIcon sx={styles.quoteIcon} />
                <Typography variant="body1" sx={styles.testimony}>
                  {testimonial.testimony}
                </Typography>
              </Box>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.avatar}
                  sx={{ width: 56, height: 56, mb: 1 }}
                />
                <Typography variant="h6" sx={styles.name}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonial.date}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

// Custom styles
const styles = {
  title: {
    fontWeight: 'bold',
    color: '#3c3c3c',
    fontStyle: 'italic',
    marginBottom: '40px',
  },
  card: {
    padding: '20px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)', // Hover effect
    },
    border: '1px solid #dedede',
    maxWidth: '400px',
    margin: '0 auto' // Ensuring the cards are centered in each slide
  },
  quoteIcon: {
    fontSize: '40px',
    color: '#f57c00',
    marginBottom: '10px',
  },
  testimony: {
    fontSize: '1rem',
    color: '#3c3c3c',
    fontStyle: 'italic',
    marginBottom: '20px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
};

export default TestimonialCard;
