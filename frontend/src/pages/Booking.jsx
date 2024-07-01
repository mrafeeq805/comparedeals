import React from "react";
import SummaryCard from "../components/SummaryCard";
import VehicleCard from "../components/VehicleCard";
import ContactDetails from "../components/ContactDetails";
import Header from "../components/Header";
import { IoChevronBackCircle } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Booking = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const data = location.state
	return (
		<div>
			
			<Header layout={"secondary"} />
			
			<div className="flex gap-3 py-8 items-center text-white px-6 md:px-24 bg-black">
				<button onClick={() => navigate('/companies')} className="flex items-center gap-4">
					<IoChevronBackCircle className="text-3xl" />
					<span>Go Back</span>
				</button>
			</div>
			<div className="md:flex bg-black pb-24 px-6 md:px-24 gap-24 w-full">
				<div className="md:w-9/12 flex flex-col gap-3">
					{/* contact details */}
					<ContactDetails />
					{/* vehicle details */}
					<VehicleCard />
					<div className="border-[1px] rounded-md border-white p-8">
						<div className="space-x-3">
							<input type="checkbox" />
							<span className="text-white font-poppins">
								Text Message Confirmation - (UK mobiles only) £0.99
							</span>
						</div>
						<div className="space-x-3">
							<input type="checkbox" />
							<span className="text-white font-poppins">
								Cancellation Cover - Protect your booking if you need to cancel
								or amend in future £2.00
							</span>
						</div>
					</div>
				</div>

				<div className="w-">
					<SummaryCard data={data} />
					<div className="mt-8">
						<div className="space-x-2">
							<input type="checkbox" />
							<span className="text-white font-poppins">
								I agree to the terms & conditions!
							</span>
						</div>
					</div>
					<button className="w-full bg-primary p-2.5 mt-4 font-poppins rounded-lg">
						Pay Now
					</button>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Booking;
