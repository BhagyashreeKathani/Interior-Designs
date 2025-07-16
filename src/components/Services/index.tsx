import { FaPaintBrush, FaCloudRain, FaLeaf, FaMedal } from "react-icons/fa";

const Services = () => {
	const services = [
		{
			title: "Modern Design",
			icon: FaPaintBrush,
			desc: "Our designs embrace contemporary styles with clean lines, open spaces, and a touch of elegance to match your lifestyle.",
		},
		{
			title: "Outdoor Solutions",
			icon: FaCloudRain,
			desc: "Transform your outdoor spaces with smart landscaping, weatherproof furniture, and seamless indoor-outdoor flow.",
		},
		{
			title: "Environment Friendly",
			icon: FaLeaf,
			desc: "We prioritize sustainability using eco-friendly materials and energy-efficient design practices for a greener tomorrow.",
		},
		{
			title: "Top Quality",
			icon: FaMedal,
			desc: "We ensure top-notch craftsmanship and premium materials to deliver interiors that are durable, beautiful, and timeless.",
		},
	];

	return (
		<div className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-center justify-between gap-8">
			{services.map((service) => (
				<div
					key={service.title}
					className="flex flex-col items-center text-center gap-3 bg-white p-4 rounded-md shadow-md max-w-[280px] h-[320px] justify-between"
				>
					<service.icon color="#425e85" size={50} />
					<div>
						<span className="font-semibold text-[20px] block mb-2">{service.title}</span>
						<p className="text-gray-600 text-sm leading-6">{service.desc}</p>
					</div>
					<a href="#" className="text-[#425e85] hover:underline text-sm">
						Read More
					</a>
				</div>
			))}
		</div>
	);
};

export default Services;
