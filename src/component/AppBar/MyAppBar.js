import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { InputBase, Skeleton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle"; 
import MenuIcon from "@mui/icons-material/Menu"; 
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close"; 
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; 

const MyAppBar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(320, 959)); 
  const navigate = useNavigate(); 

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Tambahkan loading state

  // Simulasi delay untuk menampilkan skeleton
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading ke false setelah data "dimuat"
    }, 2000); // Simulasi delay 2 detik
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
    setDrawerOpen(false);
  };

  const handleRegisterClick = () => {
    navigate("/register");
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" style={styles.appBar}>
      <Toolbar style={styles.toolbar}>
        <div style={styles.logoContainer}>
          {loading ? (
            <Skeleton variant="rectangular" width={isSmallScreen || isMediumScreen ? 150 : 200} height={40} />
          ) : (
            <img
              src="https://kartuprakerja.sekolahpintar.com/static/media/Logo_SekolahPintar.fcb3f7a3.png"
              alt="Logo Sekolah Pintar"
              style={{
                ...styles.logo,
                width: isSmallScreen || isMediumScreen ? "150px" : "200px",
              }}
            />
          )}
        </div>

        {!isMediumScreen && (
          <div
            style={{
              ...styles.searchContainer,
              width: isSmallScreen ? "70%" : "70%",
              marginTop: isSmallScreen ? "10px" : "0",
            }}
          >
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={40} />
            ) : (
              <>
                <SearchIcon style={styles.searchIcon} />
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  style={styles.searchInput}
                />
              </>
            )}
          </div>
        )}

        {!isMediumScreen ? (
          <div
            style={{
              ...styles.buttonContainer,
              flexDirection: isSmallScreen ? "row" : "row",
              width: isSmallScreen ? "auto" : "auto",
              marginTop: isSmallScreen ? "10px" : "0",
            }}
          >
            {loading ? (
              <Skeleton variant="rectangular" width={isSmallScreen ? 50 : 100} height={40} />
            ) : isSmallScreen ? (
              <IconButton color="inherit" onClick={handleLoginClick}>
                <AccountCircle />
              </IconButton>
            ) : (
              <>
                <Button
                  variant="contained"
                  style={styles.daftarButton}
                  onClick={handleRegisterClick}
                >
                  Daftar
                </Button>
                <Button
                  variant="contained"
                  style={styles.masukButton}
                  onClick={handleLoginClick}
                >
                  Masuk
                </Button>
              </>
            )}
          </div>
        ) : (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ style: { width: "100%" } }}
        >
          <div style={{ padding: "20px" }} role="presentation">
            <IconButton
              style={{ position: "absolute", top: 10, right: 10 }}
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>

            <div style={{ ...styles.drawerSearchContainer, marginTop: "40px" }}>
              <SearchIcon style={styles.searchIcon} />
              <InputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                style={styles.searchInput}
              />
            </div>

            <Button
              variant="contained"
              style={{
                ...styles.daftarButton,
                width: "100%",
                marginTop: "20px",
              }}
              onClick={handleRegisterClick}
            >
              Daftar
            </Button>
            <Button
              variant="contained"
              style={{
                ...styles.masukButton,
                width: "100%",
                marginTop: "10px",
              }}
              onClick={handleLoginClick}
            >
              Masuk
            </Button>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  appBar: {
    background: "linear-gradient(90deg, rgba(255,204,0,1) 0%, rgba(255,224,102,1) 100%)",
    padding: "10px 0",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    marginRight: "5px",
  },
  logoContainer: { display: "flex", alignItems: "center" },
  logo: { marginRight: "10px" },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "5px 10px",
    borderRadius: "25px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  drawerSearchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "5px 10px",
    borderRadius: "25px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  },
  searchIcon: { marginRight: "8px", color: "#999" },
  searchInput: { width: "100%", color: "#000" },
  buttonContainer: { display: "flex", gap: "10px" },
  daftarButton: {
    backgroundColor: "#9b51e0",
    color: "#fff",
    textTransform: "none",
    borderRadius: "20px",
    padding: "8px 20px",
  },
  masukButton: {
    backgroundColor: "#2d9cdb",
    color: "#fff",
    textTransform: "none",
    borderRadius: "20px",
    padding: "8px 20px",
  },
};

export default MyAppBar;
