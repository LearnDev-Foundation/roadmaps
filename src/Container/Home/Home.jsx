import React from "react";
import { Navbar, Blog, Newsletter, Footer } from "../../Components";
import image from "../../assets/images.svg";

import "./Home.scss";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="app__home">
				<div className="app__home_hero">
					<div className="app__home_hero-content">
						<h2>Embark on an Exciting Journey to Tech Mastery with LearnDev Roadmaps</h2>
						<p>LearnDev Roadmaps is your ultimate guide to mastering the technical skills you need to succeed in today&apos;s fast-paced tech industry. With our expertly curated roadmaps, you can embark on a journey to tech mastery and achieve your goals with confidence.</p>
						<a href="#">All Roadmaps</a>
					</div>
					<img src={image} alt="" />
				</div>
				<div className="app__home_roadmaps">
					<div className="app__home_roadmaps-map">
						<div className="text">
							<h4>Front-End Development</h4>
							<p>Master the essentials of modern web development with our comprehensive front-end development roadmap.</p>
						</div>
						<a href="#">See Roadmap</a>
					</div>
					<div className="app__home_roadmaps-map">
						<div className="text">
							<h4>Back-End Development</h4>
							<p>Ready to dive into the world of server-side development? Our Back End Development roadmap has got you covered.</p>
						</div>
						<a href="#">See Roadmap</a>
					</div>
					<div className="app__home_roadmaps-map">
						<div className="text">
							<h4>ML Engineering</h4>
							<p>Explore the intersection of computer science and statistics with our Machine Learning Engineering roadmap.</p>
						</div>
						<a href="#">See Roadmap</a>
					</div>
				</div>
			</div>
			<Blog />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;