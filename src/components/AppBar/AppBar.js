import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle"; // Icon user untuk tampilan mobile
import MenuIcon from "@mui/icons-material/Menu"; // Icon Menu untuk toggle
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close"; // Icon Close untuk menutup Drawer
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Untuk navigasi ke halaman login

const MyAppBar = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Handphone
	const isMediumScreen = useMediaQuery(theme.breakpoints.between(320, 959)); // Ukuran layar antara 500px dan 959px
	const navigate = useNavigate(); // Untuk navigasi

	// State untuk toggle drawer
	const [drawerOpen, setDrawerOpen] = useState(false);

	// Handler untuk navigasi ke halaman login saat ikon user di klik
	const handleLoginClick = () => {
		navigate("/login");
		setDrawerOpen(false); // Menutup Drawer setelah navigasi ke Login
	};

	// Handler untuk navigasi ke halaman register saat tombol Daftar di klik
	const handleRegisterClick = () => {
		navigate("/register");
		setDrawerOpen(false); // Menutup Drawer setelah navigasi ke Register
	};

	// Handler untuk toggle drawer
	const toggleDrawer = (open) => () => {
		setDrawerOpen(open);
	};

	return (
		<AppBar position="static" style={styles.appBar}>
			<Toolbar style={styles.toolbar}>
				{/* Logo dan keterangan */}
				<div style={styles.logoContainer}>
					<img
						src="https://kartuprakerja.sekolahpintar.com/static/media/Logo_SekolahPintar.fcb3f7a3.png"
						alt="Logo Sekolah Pintar"
						style={{
							...styles.logo,
							width: isSmallScreen || isMediumScreen ? "150px" : "200px", // Logo responsif
						}}
					/>
				</div>

				{/* Input Pencarian untuk layar besar */}
				{!isMediumScreen && (
					<div
						style={{
							...styles.searchContainer,
							width: isSmallScreen ? "70%" : "70%", // Input pencarian responsif
							marginTop: isSmallScreen ? "10px" : "0", // Tambahkan margin pada handphone
						}}
					>
						<SearchIcon style={styles.searchIcon} />
						<InputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
							style={styles.searchInput}
						/>
					</div>
				)}

				{/* Tombol Daftar dan Masuk di layar besar, Icon di handphone */}
				{!isMediumScreen ? (
					<div
						style={{
							...styles.buttonContainer,
							flexDirection: isSmallScreen ? "row" : "row", // Tetap dalam satu baris
							width: isSmallScreen ? "auto" : "auto",
							marginTop: isSmallScreen ? "10px" : "0", // Tambahkan margin pada handphone
						}}
					>
						{isSmallScreen ? (
							// Jika di handphone, tampilkan ikon user
							<IconButton color="inherit" onClick={handleLoginClick}>
								<AccountCircle />
							</IconButton>
						) : (
							// Jika di layar besar, tampilkan tombol Daftar dan Masuk
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
					// Jika ukuran layar medium, tampilkan toggle bar
					<IconButton
						edge="end"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
				)}

				{/* Drawer untuk toggle bar */}
				<Drawer
					anchor="right"
					open={drawerOpen}
					onClose={toggleDrawer(false)}
					PaperProps={{
						style: { width: "100%" }, // Full-width drawer
					}}
				>
					<div style={{ padding: "20px" }} role="presentation">
						{/* Icon Close untuk menutup Drawer */}
						<IconButton
							style={{ position: "absolute", top: 10, right: 10 }} // Posisi di kanan atas
							onClick={toggleDrawer(false)}
						>
							<CloseIcon />
						</IconButton>

						{/* Input Pencarian dalam Drawer */}
						<div style={{ ...styles.drawerSearchContainer, marginTop: "40px" }}>
							<SearchIcon style={styles.searchIcon} />
							<InputBase
								placeholder="Search…"
								inputProps={{ "aria-label": "search" }}
								style={styles.searchInput}
							/>
						</div>

						{/* Tombol Daftar dan Masuk dalam Drawer */}
						<Button
							variant="contained"
							style={{
								...styles.daftarButton,
								width: "100%",
								marginTop: "20px",
							}}
							onClick={handleRegisterClick} // Navigasi ke Register
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
							onClick={handleLoginClick} // Navigasi ke Login
						>
							Masuk
						</Button>
					</div>
				</Drawer>
			</Toolbar>
		</AppBar>
	);
};

// CSS-in-JS Styles
const styles = {
	appBar: {
		background:
			"linear-gradient(90deg, rgba(255,204,0,1) 0%, rgba(255,224,102,1) 100%)", // Gradien lebih smooth
		padding: "10px 0",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexWrap: "nowrap", // Tidak wrap elemen pada layar kecil
		marginRight: "5px",
	},
	logoContainer: {
		display: "flex",
		alignItems: "center",
	},
	logo: {
		marginRight: "10px", // Spasi antara logo dan teks
	},
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
	searchIcon: {
		marginRight: "8px",
		color: "#999",
	},
	searchInput: {
		width: "100%",
		color: "#000",
	},
	buttonContainer: {
		display: "flex",
		gap: "10px", // Jarak antara tombol "Daftar" dan "Masuk"
	},
	daftarButton: {
		backgroundColor: "#9b51e0",
		color: "#fff",
		textTransform: "none", // Agar teks tombol tidak uppercase
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
