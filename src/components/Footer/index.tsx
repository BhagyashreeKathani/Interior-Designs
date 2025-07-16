const Footer = () => {
	return (
		<footer className="w-full bg-[#F7F7F7] pt-20 lg:px-[150px] px-8 pb-10 mt-[120px] text-[#333]">
			<div className="w-full flex flex-col lg:flex-row justify-between gap-10">
				{/* Brand & Description */}
				<div className="flex flex-col gap-5 max-w-[320px]">
					<h2 className="text-3xl font-bold text-[#425e85]">Interior.</h2>
					<p className="text-sm leading-7">
						Crafting elegant, functional, and personalized spaces that turn your vision into a reality. We specialize in interiors that inspire.
					</p>
				</div>

				{/* Services */}
				<div className="flex flex-col">
					<h3 className="text-[#425e85] font-semibold text-lg mb-4">Services</h3>
					<ul className="flex flex-col gap-3 text-sm">
						<li><a href="#" className="hover:underline">Interior Design</a></li>
						<li><a href="#" className="hover:underline">Home Renovation</a></li>
						<li><a href="#" className="hover:underline">Outdoor Solutions</a></li>
					</ul>
				</div>

				{/* Collections */}
				<div className="flex flex-col">
					<h3 className="text-[#425e85] font-semibold text-lg mb-4">Collections</h3>
					<ul className="flex flex-col gap-3 text-sm">
						<li><a href="#" className="hover:underline">Modern Minimalist</a></li>
						<li><a href="#" className="hover:underline">Luxury Living</a></li>
						<li><a href="#" className="hover:underline">Eco-Friendly</a></li>
					</ul>
				</div>

				{/* Social Links */}
				<div className="flex flex-col">
					<h3 className="text-[#425e85] font-semibold text-lg mb-4">Follow Us</h3>
					<ul className="flex flex-col gap-3 text-sm">
						<li><a href="#" className="hover:underline">Instagram</a></li>
						<li><a href="#" className="hover:underline">Pinterest</a></li>
						<li><a href="#" className="hover:underline">Facebook</a></li>
					</ul>
				</div>
			</div>

			{/* Divider & Copyright */}
			<div className="border-t mt-10 pt-6 text-sm text-center text-gray-500">
				 {new Date().getFullYear()} Interior. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
