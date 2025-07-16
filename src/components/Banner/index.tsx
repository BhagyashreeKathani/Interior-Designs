import banner from "../../assets/images/banner.jpg";

const Banner = () => {
	return (
		<div className="w-full lg:px-[150px] px-5 md:py-10 py-8 h-[700px]">
			<div
				className="w-full h-full bg-center bg-cover flex items-center justify-center rounded-lg"
				style={{ backgroundImage: `url(${banner})` }}
			>
				<div className="w-full bg-[#000000c2] lg:w-1/2 h-full flex items-center justify-center rounded-tl-lg rounded-bl-lg px-10">
					<div className="flex flex-col items-center text-center">
						<span className="text-white text-[15px] mb-2">Our Mission</span>
						<h2 className="font-semibold text-[40px] md:text-[50px] text-white leading-tight">
							We Care About Top Quality
						</h2>
						<p className="mt-4 text-gray-200 max-w-[500px] leading-7">
							We are committed to crafting spaces that reflect excellence in design, materials, and craftsmanship. Your vision, our expertise.
						</p>
						<button className="text-[#333] bg-white font-medium px-6 py-3 rounded-full mt-6 hover:bg-gray-200 transition">
							Explore Our Designs
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
