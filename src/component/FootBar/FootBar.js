import React from "react";
import { Box, Typography, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Ikon WhatsApp dari Material-UI

const FootBar = () => {
  return (
    <Box>
      {/* Footer Utama */}
      <Box sx={styles.footer}>
        <Box sx={styles.container}>
          <Box sx={styles.row}>
            {/* Kolom 1: Kantor Pusat */}
            <Box sx={styles.column}>
              <img
                src="https://kartuprakerja.sekolahpintar.com/static/media/Logo_SekolahPintar.fcb3f7a3.png"
                alt="Logo Sekolah Pintar"
                style={{ width: "150px" }}
              />
              <Typography variant="body2" sx={styles.text}>
                <strong>Kantor Pusat</strong>
                <br />
                One Pacific Place, 15th Floor, Jl. Jend. Sudirman No.Kav. 52-53,
                Senayan, Jakarta Selatan, DKI Jakarta 12190
                <br />
                <Link href="#" underline="hover" color="inherit">
                  Syarat dan ketentuan
                </Link>
              </Typography>
            </Box>

            {/* Kolom 2: Layanan */}
            <Box sx={styles.column}>
              <Typography variant="body2" sx={styles.title}>
                Kami siap melayani anda
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Senin - Jumat: 09:00 - 17:00 WIB
                <br />
                Sabtu - Minggu & Hari Besar: Libur
                <br />
                <Link href="#" underline="hover" color="inherit">
                  FAQ
                </Link>
              </Typography>
            </Box>

            {/* Kolom 3: Jadwal Jam Belajar */}
            <Box sx={styles.column}>
              <Typography variant="body2" sx={styles.title}>
                Jadwal Jam Belajar
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Anda bisa belajar kapan saja, setiap hari
              </Typography>
            </Box>

            {/* Kolom 4: Bantuan */}
            <Box sx={styles.column}>
              <Typography variant="body2" sx={styles.title}>
                Anda membutuhkan bantuan?
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Hubungi CS kami
              </Typography>
              <Box sx={styles.whatsappContainer}>
                <WhatsAppIcon sx={{ color: "green", fontSize: "24px" }} />
                <Link href="#" underline="none" sx={styles.whatsappLink}>
                  klik disini
                </Link>
              </Box>
            </Box>
          </Box>

       
        </Box>
      </Box>

      {/* Box Baru di Bawah Footer */}
      <Box sx={styles.newBox}>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          This is a new section below the footer. You can add additional links or content here.
        </Typography>
        <Box sx={styles.newLinks}>
          <Link href="/contact" sx={styles.newLink}>
            Contact Us
          </Link>
          {" | "}
          <Link href="/about" sx={styles.newLink}>
            About Us
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

// Custom styles
const styles = {
  footer: {
    background: "linear-gradient(90deg, rgb(255, 204, 0) 0%, rgb(255, 224, 102) 100%)", // Latar belakang gradient kuning
    color: "white",
    padding: "2rem 0",
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  column: {
    flex: "1",
    minWidth: "200px",
    padding: "0 1rem",
    marginBottom: "1rem",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.875rem",
    color: "#fff",
  },
  whatsappContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  whatsappLink: {
    marginLeft: "0.5rem",
    color: "green",
    fontWeight: "bold",
    fontSize: "0.875rem",
  },
  linksContainer: {
    marginTop: "2rem",
    textAlign: "center",
  },
  links: {
    marginTop: "0.5rem",
  },
  link: {
    color: "white",
    margin: "0 0.5rem",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },

  // Styles untuk Box Baru
  newBox: {
    backgroundColor: "#333", // Warna latar belakang baru
    padding: "1rem",
    color: "white",
    textAlign: "center",
 
  },
  newLinks: {
    marginTop: "0.5rem",
  },
  newLink: {
    color: "lightblue",
    margin: "0 0.5rem",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default FootBar;
