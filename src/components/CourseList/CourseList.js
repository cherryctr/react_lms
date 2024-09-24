import React from "react";

const CourseList = () => {
	// Data kursus statis
	const courses = [
		{
			id: 1,
			title: "Membuat Presentasi yang baik dengan Microsoft PowerPoint",
			description: "20 video",
			price: "Rp 500.000",
			image: "/path/to/powerpoint.png", // Ganti dengan URL gambar
			rating: 5,
		},
		{
			id: 2,
			title: "Mengimplementasikan Pemrograman Terstruktur Berorientasi Objek",
			description: "90 video",
			price: "Rp 500.000",
			image: "/path/to/phpmysql.png", // Ganti dengan URL gambar
			rating: 5,
		},
		{
			id: 3,
			title: "Membuat Website E Commerce Sederhana dengan CodeIgniter",
			description: "35 video",
			price: "Rp 500.000",
			image: "/path/to/codeigniter.png", // Ganti dengan URL gambar
			rating: 5,
		},
		{
			id: 4,
			title: "Search Engine Optimization (SEO)",
			description: "33 video",
			price: "Rp 500.000",
			image: "/path/to/seo.png", // Ganti dengan URL gambar
			rating: 5,
		},
	];

	return (
		<div style={styles.courseList}>
			{courses.map((course) => (
				<div key={course.id} style={styles.courseCard}>
					<img
						src={course.image}
						alt={course.title}
						style={styles.courseImage}
					/>
					<h3 style={styles.courseTitle}>{course.title}</h3>
					<div style={styles.courseRating}>
						{"★".repeat(course.rating)}{" "}
						{/* Menampilkan rating sebagai bintang */}
						<span style={styles.courseRatingValue}>
							{course.rating.toFixed(1)}
						</span>
					</div>
					<p style={styles.courseDescription}>{course.description}</p>
					<p style={styles.coursePrice}>{course.price}</p>
					<button style={styles.previewButton}>See Preview</button>
				</div>
			))}
		</div>
	);
};

// CSS-in-JS
const styles = {
	courseList: {
		display: "flex",
		gap: "20px",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	courseCard: {
		border: "1px solid #ddd",
		borderRadius: "8px",
		backgroundColor: "#fff",
		width: "250px",
		padding: "15px",
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
		textAlign: "center",
	},
	courseImage: {
		width: "100%",
		height: "150px",
		objectFit: "cover",
		marginBottom: "10px",
		borderRadius: "5px",
	},
	courseTitle: {
		fontSize: "1.2rem",
		fontWeight: "bold",
		color: "#333",
		margin: "10px 0",
	},
	courseRating: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "#ff9800", // Warna bintang (rating)
		marginBottom: "5px",
	},
	courseRatingValue: {
		marginLeft: "5px",
		fontSize: "0.9rem",
		color: "#333",
	},
	courseDescription: {
		fontSize: "0.9rem",
		color: "#555",
		marginBottom: "10px",
	},
	coursePrice: {
		fontWeight: "bold",
		color: "#333",
		marginBottom: "15px",
	},
	previewButton: {
		backgroundColor: "#e0e0e0",
		color: "#555",
		border: "none",
		padding: "10px 15px",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "0.9rem",
		fontWeight: "bold",
	},
	previewButtonHover: {
		backgroundColor: "#ccc",
	},
};

export default CourseList;
