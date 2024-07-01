import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const HowWorkCard = ({ num,data }) => {
	useGSAP(() => {});
	return (
		<div>
			<div
				className={`md:flex ${
					num % 2 === 0 ? "flex-row-reverse" : "flex-row"
				} items-center gap-32 px-8 space-y-8 md:space-y-0`}>
				<div
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="true"
					data-aos-anchor-placement="top-bottom"
					className={`flex flex-col gap-5 w-full left-${num}`}>
					<h1 className="text-white font-poppins md:text-3xl text-xl font-semibold">
						{data.title}
					</h1>
					<p className="text-gray-400 font-poppins md:w-4/5 text-sm">
						{data.description}
					</p>
				</div>
				<div
					data-aos="fade-"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="false"
					data-aos-once="true"
					data-aos-anchor-placement="top-bottom"
					className={`w-full right-${num}`}>
					<img
						className="rounded-3xl "
						src={data.icon}
						alt="about"
					/>
				</div>
			</div>
		</div>
	);
};

export default HowWorkCard;
