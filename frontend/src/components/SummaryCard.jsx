import React from "react";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";

const SummaryCard = ({data}) => {
	return (
		<div className="bg-secondary rounded-lg p-5 space-y-3 relative mt-8">
            <h1 className="text-white text-2xl font-poppins ">Booking Summary</h1>
			<div className="bg-white p-4 md:w-96 rounded-lg border-2 border-white">
				<img src={data?.data?.icon} alt="thumb" />
			</div>
			<div className="flex flex-col gap-1">
				<div className="bg-[#333333] p-2 px-3 w-max rounded-md flex items-center justify-center">
					<span className="text-[#D3D6D8] text-xs font-poppins">
						{data?.data?.type}
					</span>
				</div>
				<h1 className="text-white font-poppins text-lg">
				{data?.data?.title}
				</h1>
				<div className="grid grid-cols-2 gap-3">
					<div className="flex flex-col">
						<div className="flex gap-3 text-primary items-center font-poppins text-sm">
							<LiaTruckPickupSolid />
							<span>Pick Up</span>
						</div>
						<span className="text-white font-poppins">{data?.checkInDate} AT {data?.checkInTime}</span>
					</div>
                    <div>
						<div className="flex gap-3 text-primary items-center font-poppins text-sm">
							<CiLocationOn />
							<span>Drop Off</span>
						</div>
						<span className="text-white font-poppins">{data?.checkOutDate} AT {data?.checkOutTime}</span>
					</div>
                    <div>
						<div className="flex gap-3 text-primary items-center font-poppins text-sm">
							<IoAirplaneOutline />
							<span>Airport</span>
						</div>
					<span className="text-white font-poppins">{data?.airport}</span>
					</div>
				</div>
                <hr className="w-full h-2 my-2" />
				<div className="space-y-1">
					<div className="flex justify-between font-poppins text-gray-400">
						<span>Quoata Charge</span>
						<span>$84.99</span>
					</div>
					<div className="flex justify-between font-poppins text-gray-400">
						<span>Discount Amount</span>
						<span>-$0.00</span>
					</div>
					<div className="flex justify-between font-poppins text-gray-400">
						<span>Booking Charge</span>
						<span>$4.99</span>
					</div>
					<div className="flex justify-between font-poppins text-gray-400">
						<span>Cancellations Charge</span>
						<span>$0.00</span>
					</div>
					<div className="flex justify-between font-poppins text-gray-400">
						<span>SMS Charge</span>
						<span>$0.00</span>
					</div>
				</div>
                <hr className="w-full h-2 my-2" />
				<div className="flex justify-between text-xl font-medium font-poppins text-gray-400">
					<span>Total</span>
					<span>$84.99</span>
				</div>
			</div>

			<span></span>
		</div>
	);
};

export default SummaryCard;
