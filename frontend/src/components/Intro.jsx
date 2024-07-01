import React from "react";
import Header from "./Header";
import BookingCard from "./BookingCard";

const Intro = () => {
	return (
		<div className=" md:h-[100vh] bg-hero bg-no-repeat bg-cover ">
			<div className="bg-gradient-to-r from-black md:h-[100vh] ">
				<Header />

				<div className=" mt-12 px-8 flex flex-col gap-6 ">
					<div className=" space-y-8 md:w-1/2 ">
						<span className="text-primary tracking-widest">WELCOME TO</span>
						<h1 className="text-white font-poppins text-3xl md:text-5xl">
							The blocks of a powerful platform
						</h1>
						<p className="text-white font-poppins ">
							At Parking 4 You, we understand the importance of a hassle-free
							travel experience. That’s why we offer a range of top-notch
							parking services designed to meet your needs. Whether you're
							looking for convenience, security, or affordability, we have you
							covered. Discover the features that set us apart and make your
							airport parking experience smooth and stress-free.
						</p>
					</div>
					<BookingCard />
				</div>
			</div>
		</div>
	);
};

export default Intro;
