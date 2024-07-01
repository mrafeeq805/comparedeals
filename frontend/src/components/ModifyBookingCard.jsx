import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { companies } from "../utils/data";

const ModifyBookingCard = ({ data, setCompanyList, setShowModify }) => {
	const navigate = useNavigate();
	const [airport, setAirport] = useState(data?.airport);
	const checkInDate = useRef();
	const [checkindate, setCheckindate] = useState("");
	const checkOutDate = useRef();
	const [checkintime, setCheckintime] = useState("");
	const checkInTime = useRef();
	const [checkoutdate, setCheckoutdate] = useState("");
	const checkOutTime = useRef();
	const [checkouttime, setCheckouttime] = useState("");

	return (
		<div className="bg-secondary w-full rounded-lg p-3 md:p-8 md:flex flex-col items-center justify-center">
			<span className="font-poppins text-primary text-2xl">
				{" "}
				Modify Details
			</span>
			<div className="md:flex flex-col md:flex-row w-full gap-8 items-end space-y-3 mt-4">
				<div className="space-y-3">
					<span className="text-primary font-poppins">SELECT LOCATION</span>
					<div>
						<select
							onChange={(e) => setAirport(e.target.value)}
							className="bg-black text-white font-poppins p-3 px-5"
							name=""
							id=""
							value={airport}>
							<option className="" value="Los Angeles">
								Los Angeles
							</option>
							<option className="" value="Bristol">
								Bristol
							</option>
						</select>
					</div>
				</div>
				<div className="md:flex flex-col space-y-3">
					<span className="text-white font-poppins">CHECK IN</span>
					<div className="flex space-x-5">
						<input
							className="p-3 bg-black text-white"
							type="date"
							defaultValue={data?.checkInDate}
							onChange={(e) => setCheckindate(e.target.value)}
						/>
						<input
							className="p-3 bg-black text-white"
							type="time"
							defaultValue={data?.checkInTime}
						/>
					</div>
				</div>
				<div className="md:flex flex-col space-y-3">
					<span className="text-white font-poppins">CHECK OUT</span>
					<div className="flex space-x-5">
						<input
							className="p-3 bg-black text-white"
							type="date"
							defaultValue={data?.checkOutDate}
						/>
						<input
							className="p-3 bg-black text-white"
							type="time"
							defaultValue={data?.checkOutTime}
						/>
					</div>
				</div>
				<button
					onClick={() => {
						setCompanyList(
							companies.filter((company) => company?.airport === airport)
						);
						setShowModify(false);
					}}
					className="md:ml-8 bg-primary rounded-lg px-5 h-max p-3 font-poppins w-full">
					UPDATE
				</button>
			</div>
		</div>
	);
};

export default ModifyBookingCard;
