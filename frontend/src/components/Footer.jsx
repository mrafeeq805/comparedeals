import React from "react";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<div
			className="md:flex p-12 bg-secondary w-full py-12 md:py-24 gap-16
    ">
			<div className="space-y-4">
				<div className="space-x-2">
					<span className="text-primary text-xl font-medium">COMPARE</span>
					<span className="text-white text-xl font-medium">DEALS</span>
				</div>
				<p className="text-white font-poppins">
					Parking system with premium service
				</p>
				<div className="flex gap-4">
					<button className="rounded-full md:h-12 md:w-12 h-10 w-10 bg-[#333333] flex items-center justify-center">
						<FaGoogle className="md:text-2xl text-[#D3D6D8]" />
					</button>
					<button className="rounded-full md:h-12 md:w-12 h-10 w-10 bg-[#333333] flex items-center justify-center">
						<FaInstagram className="md:text-2xl text-[#D3D6D8]" />
					</button>
					<button className="rounded-full md:h-12 md:w-12 h-10 w-10 bg-[#333333] flex items-center justify-center">
						<FaLinkedin className="md:text-2xl text-[#D3D6D8]" />
					</button>
					<button className="rounded-full md:h-12 md:w-12 h-10 w-10 bg-[#333333] flex items-center justify-center">
						<FaTwitter className="md:text-2xl text-[#D3D6D8]" />
					</button>
				</div>
			</div>
			<div className="grid md:grid-cols-4 grid-cols-2 gap-5 mt-6">
				<div className="space-y-6">
					<h1 className="text-white font-medium md:text-xl text-lg font-poppins">
						Plan
					</h1>
					<ul className="text-[#D3D6D8] space-y-3 font-poppins md:text-lg ">
						<li>Regular</li>
						<li>Premium</li>
						<li>Golden</li>
						<li>Luxury</li>
					</ul>
				</div>
				<div className="space-y-6">
					<h1 className="text-white font-medium md:text-xl text-lg font-poppins">
						Services
					</h1>
					<ul className="text-[#D3D6D8] space-y-3 font-poppins md:text-lg ">
						<li>Spacious Parking</li>
						<li>Valet Service</li>
					</ul>
				</div>
				<div className="space-y-6">
					<h1 className="text-white font-medium md:text-xl text-lg font-poppins">
						Company
					</h1>
					<ul className="text-[#D3D6D8] space-y-3 font-poppins md:text-lg ">
						<li>About</li>
						<li>Terms</li>
						<li>Privacy Policy</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="space-y-6">
					<h1 className="text-white font-medium md:text-xl text-lg font-poppins">
						More
					</h1>
					<ul className="text-[#D3D6D8] space-y-3 font-poppins md:text-lg ">
						<li>Documentation</li>
						<li>Licence</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
