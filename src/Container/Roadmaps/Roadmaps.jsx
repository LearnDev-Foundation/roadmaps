import React from "react";
import { Navbar, Footer, Newsletter} from "../../Components";
import roadmaps from "../../assets/roadmaps/roadmaps.json";
import { Link } from "react-router-dom";

import "./Roadmaps.scss";

const Roadmaps = () => {
	return (
		<div>
			<Navbar />
			<div className="app__roadmaps">
				<div className="app__roadmaps-title">
					<h2>Roadmaps</h2>
				</div>
				<div className="app__roadmaps_roadmap">
					{Object.keys(roadmaps).map(key => (
						<div className="app__roadmaps_roadmap-map" key={key}>
							<div className="text">
								<h4>{roadmaps[key].name}</h4>
								<p>{roadmaps[key].description}</p>
							</div>
							<Link to={`/roadmaps/${roadmaps[key].slug}`} state={{ data: roadmaps[key].fileLink }}>See Roadmap</Link>
						</div>
					))}
				</div>
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Roadmaps;