// src/components/Header.jsx
import React from "react";
import bg from "../../assets/images/bg.jpg";
import { FaChevronDown, FaInstagram } from "react-icons/fa";
import { FaCartFlatbed, FaPerson } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const navItems = [
		{ path: "/", title: "Home" },
		{ path: "/designs", title: "Designs" },
		{ path: "/explore", title: "Explore" }, 
		{ path: "/about", title: "About" },
		{ path: "/contact", title: "Contact" },
	];

	const handleInstagramClick = () => {
		window.open("https://www.instagram.com", "_blank");
	};

	return (
		<div
			className="w-full h-screen relative bg-cover bg-center flex items-center justify-center"
			style={{ backgroundImage: `url(${bg})` }}
		>
			{/* Navigation Bar */}
			{/* <div className="flex items-center justify-between absolute top-5 z-50 w-full md:px-[150px] px-5">
				<div className="text-white font-bold text-[30px] tracking-wide">Interior.</div>

				<div className="items-center lg:flex hidden gap-6">
					{navItems.map((item) => (
						<Link
							to={item.path}
							key={item.title}
							className="text-white font-light hover:underline hover:text-gray-300 transition"
						>
							{item.title}
						</Link>
					))}
				</div>

				<div className="flex items-center gap-5">
					<FaPerson color="white" className="cursor-pointer" />
					<FaCartFlatbed color="white" className="cursor-pointer" />
					<FaInstagram
						color="white"
						className="cursor-pointer"
						onClick={handleInstagramClick}
					/>
				</div>
			</div> */}

			{/* Overlay */}
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20"></div>
			<div className="flex flex-col gap-4 items-center text-center z-50 px-4">
				<h1 className="text-white text-[40px] lg:text-[60px] font-bold leading-tight">
					Design Spaces That Reflect Your Style
				</h1>
				<p className="text-gray-300 text-[15px] max-w-[700px] leading-relaxed">
					From cozy living rooms to luxury kitchens, we bring elegance, functionality, and creativity together to transform your house into a dream home.
				</p>
				<button
					className="text-[#333] rounded-full bg-white font-medium px-6 py-3 mt-5 hover:bg-gray-200 transition"
					onClick={() => navigate("/explore")}
				>
					Explore Our Designs
				</button>
			</div>
			<div className="absolute bottom-5 w-full px-[150px] z-50 flex items-center justify-center">
				<FaChevronDown color="white" size={30} />
			</div>
		</div>
	);
};

export default Header;
