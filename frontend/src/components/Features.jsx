import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "../utils/data";

const Features = () => {
	return (
		<div
			data-aos="fade-right"
			data-aos-offset="200"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-bottom"
			className="md:h-[100vh] flex flex-col items-center px-6 md:px-24 my-10 mb-6">
			<h1 className="md:text-5xl text-3xl text-white font-poppins mb-6">WHAT WE DO</h1>
			<div className="md:flex items-center h-full space-y-6">
				<div
					className="md:flex flex-col gap-5
             w-full space-y-4">
					<span className="text-primary tracking-widest">FEATURES</span>
					<h1 className="text-white font-poppins text-3xl">
						The blocks of a powerful platform
					</h1>
					<p className="text-gray-400 font-poppins md:w-4/5 text-sm">
						At Parking 4 You, we understand the importance of a hassle-free
						travel experience. That’s why we offer a range of top-notch parking
						services designed to meet your needs. Whether you're looking for
						convenience, security, or affordability, we have you covered.
						Discover the features that set us apart and make your airport
						parking experience smooth and stress-free.
					</p>
					<button className="hover:bg-white transition-colors duration-300 w-max bg-primary px-8 p-2 rounded-full font-poppins">
						Book Now
					</button>
				</div>
				<div className="w-full grid md:grid-cols-2 gap-8">
					{features.map((item)=> <FeatureCard data={item} />)}
					
				</div>
			</div>
		</div>
	);
};

export default Features;
