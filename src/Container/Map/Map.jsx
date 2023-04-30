import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "../../Components";

import "./Map.scss";

const Map = () => {
	const location = useLocation();
	const { data } = location.state;

	const [roadmap, setRoadmap] = useState("");
	
	useEffect(() => {
		import(`./Roadmaps/${data}.json`).then((map) => {
			setRoadmap(map);
		});
	}, []);

	const mapData = roadmap.roadmap;

	if(!roadmap) {
		return <div>Loading....</div>;
	}

	return (
		<div>
			<Navbar />
			<div className="app__map">
				<div className="app__map_title">
					<h2>{roadmap.name}</h2>
					<p>{roadmap.description}</p>
				</div>
				<ol className="app__map_roadmap">
					{Object.keys(mapData).map((key) => {
						const item = mapData[key];
						if (typeof item === "string") {
							return <li key={key}>{item}</li>;
						} else {
							return (
								<li key={key}>
									<h3>{item.topic}</h3>
									{item.recommendations && (
										<>
											<h4>Recommendations:</h4>
											<ul>
												{item.recommendations.map((rec) => (
													<li key={rec}>{rec}</li>
												))}
											</ul>
										</>
									)}
									{item.articles && (
										<>
											<h4>Articles:</h4>
											<ul>
												{item.articles.map((article) => (
													<li key={article.url}>
														<a href={article.url}>{article.title}</a>
													</li>
												))}
											</ul>
										</>
									)}
								</li>
							);
						}
					})}
				</ol>
			</div>
			<Footer />
		</div>
	);
};

export default Map;