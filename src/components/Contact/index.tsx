import React from "react";

const Contact = () => {
	return (
		<div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#F7F7F7] px-5 lg:px-[150px] py-10">
			{/* Header */}
			<div className="text-center mb-8">
				<h2 className="text-[#425e85] text-sm uppercase tracking-widest font-medium mb-2">
					Contact Us
				</h2>
				<h1 className="text-3xl font-semibold">
					Let’s Build Your Dream Interior Together
				</h1>
				<p className="text-gray-600 mt-2 max-w-[600px] mx-auto text-sm">
					We’d love to hear from you — whether you have a question or want to start a project.
				</p>
			</div>

			{/* Form & Info */}
			<div className="w-full flex flex-col lg:flex-row gap-8">
				{/* Contact Form */}
				<form className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
					<h3 className="text-lg font-semibold text-[#425e85] mb-2">Send Us a Message</h3>
					<input
						type="text"
						placeholder="Your Name"
						maxLength={50}
						className="border border-gray-300 p-3 rounded-md"
					/>
					<input
						type="email"
						placeholder="Your Email"
						maxLength={100}
						className="border border-gray-300 p-3 rounded-md"
					/>
					<textarea
						rows={4}
						placeholder="Your Message"
						maxLength={500}
						className="border border-gray-300 p-3 rounded-md resize-none"
					/>
					<button
						type="submit"
						className="bg-[#425e85] text-white py-3 rounded-md font-medium hover:bg-[#334766] transition"
					>
						Send Message
					</button>
				</form>

				{/* Contact Info */}
				<div className="w-full lg:w-1/3 flex flex-col gap-4">
					{/* Visit Us (Map Inside) */}
					<div className="bg-white p-5 rounded-lg shadow-md">
						<div className="w-full h-[200px] rounded overflow-hidden mb-3">
							<iframe
								title="Map to Interior Studio"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.243437604519!2d77.5850282151109!3d12.909496891899241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15104d5d5f0f%3A0x90ec7a2c2f1b3f94!2sJP%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1629376397000!5m2!1sen!2sin"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-full"
							></iframe>
						</div>
						<h4 className="text-[#425e85] font-semibold mb-1">Visit Us</h4>
						<p className="text-sm text-gray-700">
							Interior Studio, 4th Cross, JP Nagar, Bangalore – 560078
						</p>
					</div>

					{/* Call Us */}
					<div className="bg-white p-5 rounded-lg shadow-md">
						<h4 className="text-[#425e85] font-semibold mb-1">Call Us</h4>
						<p className="text-sm text-gray-700">+91 98765 43210</p>
					</div>

					{/* Email Us */}
					<div className="bg-white p-5 rounded-lg shadow-md">
						<h4 className="text-[#425e85] font-semibold mb-1">Email Us</h4>
						<p className="text-sm text-gray-700">hello@interiorstudio.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
