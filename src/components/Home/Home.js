import React from "react";
import BannerApp from "../../components/BannerApp/BannerApp";
import CourseList from "../../components/CourseList/CourseList"; // Assuming you created this component

const Home = () => {
	const courses = [
		{
			image: "https://via.placeholder.com/250",
			title: "Membuat Presentasi yang Baik dengan PowerPoint",
			videos: 20,
			price: 500000,
		},
		{
			image: "https://via.placeholder.com/250",
			title: "Pemrograman Berorientasi Objek",
			videos: 90,
			price: 500000,
		},
		{
			image: "https://via.placeholder.com/250",
			title: "Website E-Commerce dengan CodeIgniter",
			videos: 35,
			price: 500000,
		},
		{
			image: "https://via.placeholder.com/250",
			title: "Search Engine Optimization (SEO)",
			videos: 33,
			price: 500000,
		},
	];

	return (
		<div>
			<BannerApp />
			<div style={styles.container}>
				<h2 style={styles.heading}>Popular Courses</h2>
				<div style={styles.courseList}>
					{courses.map((course, index) => (
						<CourseList
							key={index}
							image={course.image}
							title={course.title}
							videos={course.videos}
							price={course.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const styles = {
	container: {
		padding: "20px",
	},
	heading: {
		fontSize: "2rem",
		textAlign: "center",
		marginBottom: "20px",
	},
	courseList: {
		display: "flex",
		justifyContent: "space-around",
		flexWrap: "wrap",
	},
};

export default Home;
