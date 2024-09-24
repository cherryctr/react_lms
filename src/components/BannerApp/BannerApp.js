import React, { useState } from "react";

const BannerApp = () => {
	// State untuk melacak apakah gambar asli sudah dimuat
	const [imageLoaded, setImageLoaded] = useState(false);

	// URL gambar placeholder (dari layanan image dummy)
	const placeholderImage = "https://via.placeholder.com/1920x300"; // Gambar dummy sementara
	const originalImage = "https://picsum.photos/1920/300"; // Gambar asli (bisa diganti dengan gambar yang diinginkan)

	// Fungsi untuk menangani event ketika gambar asli selesai dimuat
	const handleImageLoad = () => {
		setImageLoaded(true); // Gambar asli selesai dimuat
	};

	return (
		<div
			style={{
				...styles.banner,
				backgroundImage: `url(${
					imageLoaded ? originalImage : placeholderImage
				})`,
			}}
		>
			<img
				src={originalImage}
				alt="Banner"
				style={{ display: "none" }} // Sembunyikan gambar asli, hanya untuk event onLoad
				onLoad={handleImageLoad}
			/>
			<div style={styles.bannerContent}>
				<h1 style={styles.bannerTitle}>Welcome to MyLMS</h1>
				<p style={styles.bannerSubtitle}>
					Learn new skills and advance your career with top online courses!
				</p>
				<button style={styles.bannerButton}>Get Started</button>
			</div>
		</div>
	);
};

// CSS-in-JS Styles
const styles = {
	banner: {
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "300px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		transition: "background-image 0.3s ease-in-out", // Transisi yang halus ketika gambar asli muncul
	},
	bannerContent: {
		textAlign: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)", // Background transparan untuk meningkatkan keterbacaan teks
		padding: "20px",
		borderRadius: "10px",
	},
	bannerTitle: {
		fontSize: "2.5rem",
		fontWeight: "bold",
		margin: "0 0 10px 0",
	},
	bannerSubtitle: {
		fontSize: "1.2rem",
		margin: "0 0 20px 0",
	},
	bannerButton: {
		backgroundColor: "#ff9800",
		color: "#fff",
		padding: "10px 20px",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "1rem",
		fontWeight: "bold",
		transition: "background-color 0.3s",
	},
	bannerButtonHover: {
		backgroundColor: "#e68900",
	},
};

export default BannerApp;
