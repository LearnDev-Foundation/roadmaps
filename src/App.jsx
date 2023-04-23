import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Search } from "./Container";

import "./App.scss";

const App = () => {
	return (
		<div className='app'>
			<HashRouter>
				<Routes>
					<Route element={<Home />} path="/" exact />
					<Route element={<Search />} path="/search" />
				</Routes>
			</HashRouter>
		</div>
	);
};

export default App;