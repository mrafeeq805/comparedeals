import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CompanyCard = ({ data, details }) => {
	const navigate = useNavigate();
	return (
		<div className="bg-secondary rounded-lg p-5 space-y-3 relative">
			<div className="px-3 rounded-md  p-1 w-max">
				<span className="bg-primary p-1 absolute top-0 left-0 rounded-br-lg text-xs font-poppins">
					{data.label}
				</span>
			</div>
			<div className="bg-white p-4 rounded-lg border-2 border-white">
				<img src={data.icon} alt="thumb" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="bg-[#333333] p-2 px-3 w-max rounded-md flex items-center justify-center">
					<span className="text-[#D3D6D8] text-xs font-poppins">
						{data.type}
					</span>
				</div>
				<h1 className="text-white font-poppins text-lg">{data.title}</h1>
				<div className="flex gap-2 items-center text-sm">
					<FaStar className="text-primary" />
					<FaStar className="text-primary" />
					<FaStar className="text-primary" />
					<FaStar className="text-primary" />
					<FaStar className="text-[#D3D6D8]" />
					<span className="text-primary">({data.rating})</span>
				</div>
				<div className="ml-4 mt-3">
					<ul className="space-y-1 list-disc font-poppins text-sm text-gray-600">
						{data.features.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>
				<div className=" flex items-center justify-between mt-3">
					<div className="flex items-start h-full justify-center w-max ">
						<span className="text-xl font-poppins font-medium text-white pt-3">
							$ {data.amount}
						</span>
					</div>

					<button
						onClick={() =>
							navigate("/booking", {
								state: {
									airport: details.airport,
									checkInDate: details.checkInDate,
									checkInTime: details.checkInTime,
									checkOutDate: details.checkOutDate,
									checkOutTime: details.checkOutTime,
									data : data
								},
							})
						}
						className=" bg-primary p-2 px-3 rounded-lg font-poppins text-sm">
						Book Now
					</button>
				</div>
			</div>

			<span></span>
		</div>
	);
};

export default CompanyCard;
