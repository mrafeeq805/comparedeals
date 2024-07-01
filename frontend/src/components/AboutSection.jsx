import React from "react";
import FeatureCard from "./FeatureCard";

const AboutSection = () => {
	return (
		<div className="md:h-[100vh] flex flex-col items-center gap-10 px-6 md:px-24 mt-10 md:mt-0">
			<h1 className="md:text-5xl text-3xl text-white font-poppins md:mt-24">WHO WE ARE</h1>
			<div className="md:flex  md:mt-16 h-full">
				<div className="w-full ">
					<img
						data-aos="fade-right"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="false"
						data-aos-once="true"
						data-aos-anchor-placement="top-bottom"
						className="rounded-3xl md:h-80 object-cover"
						src="../assets/images/parking.jpg"
						alt="about"
					/>
				</div>
				<div
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="true"
					data-aos-anchor-placement="top-bottom"
					className="flex flex-col gap-5
             w-full pt-4 md:pt-0">
					<span className="text-primary tracking-widest">ABOUT US</span>
					<h1 className="text-white font-poppins text-3xl font-semibold">
						Our Commitment to Hassle-Free Airport Parking
					</h1>
					<p className="text-gray-400 text-sm font-poppins ">
						At Parking 4 You, we provide hassle-free airport parking solutions
						across the UK. Our mission is to offer convenience, security, and
						affordability in every service. With years of experience, we
						understand travelers' needs. Our team ensures your vehicle is safe
						and accessible, making the process smooth and efficient. We offer
						Meet and Greet, Park and Ride, and On-site Airport Parking. Enjoy
						transparent pricing with no hidden fees and 24/7 security measures.
						Customer satisfaction is our priority.
					</p>
					<button className=" hover:bg-white transition-colors duration-300 w-max bg-primary px-8 p-2 rounded-full font-poppins">
						Know More
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
