import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Container";

import "./App.scss";

const App = () => {
	return (
		<div className='app'>
			<HashRouter>
				<Routes>
					<Route element={<Home />} path="/" exact />
				</Routes>
			</HashRouter>
		</div>
	);
};

export default App;