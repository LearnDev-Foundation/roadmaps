import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Map = () => {
	const location = useLocation();
	const { data } = location.state;

	const [roadmap, setRoadmap] = useState(null);
	import(`./Roadmaps/${data}.json`).then((map) => {
		setRoadmap(map.default);
	});
	console.log(roadmap);

	return (
		<div>Map</div>
	);
};

export default Map;