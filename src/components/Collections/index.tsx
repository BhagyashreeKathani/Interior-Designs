import classic from "../../assets/images/classic.jpg";
import luxury from "../../assets/images/luxury.jpg";
import surreal from "../../assets/images/surreal.jpg";
import bright from "../../assets/images/bright.jpg";

const Collections = () => {
	const collectionItems = [
		{
			title: "Classic Elegance",
			image: classic,
			desc: "Embrace timeless charm with refined textures, neutral tones, and sophisticated wood finishes that echo heritage and grace.",
		},
		{
			title: "Luxury Living",
			image: luxury,
			desc: "Indulge in opulence with plush fabrics, gold accents, and statement lighting designed for a truly regal experience.",
		},
		{
			title: "Light & Bright",
			image: bright,
			desc: "Bask in airy, sun-kissed interiors filled with soft hues, natural light, and minimalistic elegance to lift every mood.",
		},
		{
			title: "Surreal Spaces",
			image: surreal,
			desc: "Step into a dreamlike ambiance with abstract decor, bold contrasts, and imaginative design that sparks curiosity and wonder.",
		},
	];

	return (
		<div className="w-full lg:px-[150px] px-5 pb-8 flex lg:flex-row flex-col items-center justify-between gap-8 flex-wrap">
			{collectionItems.map((item, index) => (
				<div
					key={index}
					className="w-full lg:w-[45%] h-[600px] bg-center bg-cover relative p-6 cursor-pointer rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
					style={{ backgroundImage: `url(${item.image})` }}
				>
					<div className="absolute inset-0 bg-black opacity-45 z-20"></div>

					<div className="relative z-30 flex flex-col justify-between h-full">
						<div className="mt-4">
							<h3 className="text-white font-bold text-[22px]">{item.title}</h3>
							<p className="text-white font-medium text-[18px]">Collection</p>
						</div>

						<div className="mb-6 flex flex-col gap-4">
							<p className="text-gray-100 leading-6 text-[14px] text-left">
								{item.desc}
							</p>
							<a
								href="#"
								className="text-white font-light text-[16px] underline hover:text-gray-200"
							>
								Read More
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Collections;
