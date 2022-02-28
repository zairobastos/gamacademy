import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/home/index";
import Contacts from "./views/Contacts/index";

const src: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/Contato" element={<Contacts/>}/>
			</Routes>
		</BrowserRouter>
	);
};

export default src;
