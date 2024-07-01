import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Sidebar = () => {
	return (
		<motion.div
			className="sidebar fixed bg-secondary top-16 bottom-0 left-0 right-0 p-8 flex flex-col gap-24"
			initial={{ x: "-100%" }}
			animate={{ x: 0 }}
			transition={{ type: "sprin", stiffness: 80 }}>
			<ul className="text-white font-poppins space-y-4 hover:text-[#333333]">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="flex gap-4">
				<button className="rounded-full h-12 w-12 bg-[#333333] flex items-center justify-center">
					<FaGoogle className="text-2xl text-[#D3D6D8]" />
				</button>
				<button className="rounded-full h-12 w-12 bg-[#333333] flex items-center justify-center">
					<FaInstagram className="text-2xl text-[#D3D6D8]" />
				</button>
				<button className="rounded-full h-12 w-12 bg-[#333333] flex items-center justify-center">
					<FaLinkedin className="text-2xl text-[#D3D6D8]" />
				</button>
				<button className="rounded-full h-12 w-12 bg-[#333333] flex items-center justify-center">
					<FaTwitter className="text-2xl text-[#D3D6D8]" />
				</button>
			</div>
		</motion.div>
	);
};

export default Sidebar;
