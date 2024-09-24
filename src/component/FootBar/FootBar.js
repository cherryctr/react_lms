import React from "react";

const FootBar = () => {
	// Definisi inline styles
	const styles = {
		footer: {
			backgroundColor: "#333",
			color: "white",
			padding: "1rem",
			textAlign: "center",
			position: "relative",
			bottom: 0,
			width: "100%",
		},
		container: {
			maxWidth: "1200px",
			margin: "0 auto",
		},
		links: {
			marginTop: "1rem",
		},
		link: {
			color: "white",
			margin: "0 0.5rem",
			textDecoration: "none",
		},
		linkHover: {
			textDecoration: "underline",
		},
	};

	return (
		<footer style={styles.footer}>
			<div style={styles.container}>
				<p>© 2024 MyLMS. All rights reserved.</p>
				<div style={styles.links}>
					<a href="/privacy" style={styles.link}>
						Privacy Policy
					</a>{" "}
					|{" "}
					<a href="/terms" style={styles.link}>
						Terms of Service
					</a>
				</div>
			</div>
		</footer>
	);
};

export default FootBar;
