import React from "react";
import { Navbar, Blog, Newsletter, Footer } from "../../Components";
import image from "../../assets/images.svg";
import roadmaps from "../../assets/roadmaps/roadmaps.json";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
	const items = [];

	let count = 0;
	for (const roadmap in roadmaps) {
		// eslint-disable-next-line no-prototype-builtins
		if (roadmaps.hasOwnProperty(roadmap)) {
			const obj = roadmaps[roadmap];
			items.push(
				<div className="app__home_roadmaps-map" key={obj.slug}>
					<div className="text">
						<h4>{obj.name}</h4>
						<p>{obj.description}</p>
					</div>
					<Link to={`/roadmaps/${obj.slug}`} state={{ data: obj.fileLink } }>See Roadmap</Link>
				</div>
			);
			count++;
			if (count === 3) {
				break;
			}
		}
	}

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
				<div className="app__home_roadmaps">{items}</div>
			</div>
			<Blog />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Home;