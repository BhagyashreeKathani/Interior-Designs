// App.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import Header from "./components/Header";
import Services from "./components/Services";
import Collections from "./components/Collections";
import Explore from "./components/Explore";
import Intro from "./components/Intro";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

const Home = () => {
	return (
		<div className="w-full flex flex-col">
			<Header />
			<Services />
			<Collections />
			<Explore />
			<Intro />
			<Banner />
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/designs" element={<Explore />} />
				<Route path="/about" element={<Intro />} />
				<Route path="/explore" element={<Banner />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
};

export default App;
