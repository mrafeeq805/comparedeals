import React from "react";

const FeatureCard = ({data}) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-offset="200"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="false"
			data-aos-once="true"
			data-aos-anchor-placement="top-bottom"
			className="bg-secondary flex flex-col gap-3 p-5 rounded-lg h-max">
			<div className="rounded-full h-20 w-20 p-5 flex items-center justify-center bg-[#35332C]">
				<img
					className="h-full"
					src={data.icon}
					alt="icon"
				/>
			</div>
			<h1 className="text-white font-poppins text-lg">{data.title}</h1>
			<p className="text-gray-400 font-poppins text-sm ">
				{data.description}
			</p>
		</div>
	);
};

export default FeatureCard;
