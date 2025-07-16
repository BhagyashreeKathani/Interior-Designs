import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const navItems = [
	{ path: "/", title: "Home" },
	{ path: "/designs", title: "Designs" },
	{ path: "/explore", title: "Explore" },
	{ path: "/about", title: "About" },
	{ path: "/contact", title: "Contact" },
];

const MainLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-[#222] py-4">
				<div className="max-w-7xl mx-auto px-6 flex items-center relative">
					<div className="text-white font-bold text-2xl z-10">MyInterior</div>

					<nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
						{navItems.map((item) => (
							<Link
								to={item.path}
								key={item.title}
								className="text-white font-light hover:underline hover:text-gray-300 transition"
							>
								{item.title}
							</Link>
						))}
					</nav>
				</div>
			</header>

			{/* Main page content */}
			<main className="flex-grow max-w-7xl mx-auto px-6 py-6 w-full">
				<Outlet />
			</main>

			{/* Footer section */}
			<Footer />
		</div>
	);
};

export default MainLayout;
