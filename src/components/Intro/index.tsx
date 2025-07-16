// src/components/Intro.jsx
import React from "react";
import aboutBg from "../../assets/images/about.jpg"; 

const Intro = () => {
	return (
		<div
			className="w-full bg-cover bg-center relative text-white"
			style={{ backgroundImage: `url(${aboutBg})` }}
		>
			<div className="absolute inset-0 bg-black opacity-60"></div>
			<div className="relative z-10 lg:px-[150px] px-5 lg:py-24 py-16 flex lg:flex-row flex-col items-start justify-center gap-16">
				<div className="flex flex-col">
					<span className="text-[15px] text-blue-300 font-medium mb-2">About Us</span>
					<h2 className="font-bold text-[36px] lg:text-[42px] max-w-[400px] leading-tight">
						Inspired Interiors. <br /> Tailored to Your Vision.
					</h2>
				</div>

				<div className="flex flex-col gap-3">
					<p className="text-gray-200 text-[17px] leading-7 max-w-[550px]">
						We are a team of passionate interior designers who blend creativity with
						functionality to deliver spaces that reflect your personality and style.
						From concept to completion, we ensure every detail is thoughtfully curated
						for comfort, beauty, and elegance.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Intro;
	