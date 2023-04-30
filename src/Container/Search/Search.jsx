import React from "react";
import { Navbar } from "../../Components";
import { useLocation } from "react-router-dom";
import roadmaps from "../../assets/roadmaps/roadmaps.json";
import { Link } from "react-router-dom";

import "./Search.scss";

const Search = () => {
	const location = useLocation();

	const searchTerm = location.search.slice(8).replace(/%20/g, " ");

	return (
		<div>
			<Navbar />
			<div className="app__search">
				<div className="app__search_title">
					<h2>You Searched: {searchTerm}</h2>
				</div>
				<div className="app__search_result">
					{
						Object.keys(roadmaps).filter(key => 
							roadmaps[key].name.toLowerCase().includes(searchTerm.toLowerCase()) || roadmaps[key].description.toLowerCase().includes(searchTerm.toLowerCase())
						).map(key => (
							<div className="app__search_result-map" key={key}>
								<div className="text">
									<h4>{roadmaps[key].name}</h4>
									<p>{roadmaps[key].description}</p>
								</div>
								<Link to={`/roadmaps/${roadmaps[key].slug}`} state={{ data: roadmaps[key].fileLink }}>See Roadmap</Link>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Search;