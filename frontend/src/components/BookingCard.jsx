import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingCard = () => {
	const navigate = useNavigate();
	const airport = useRef();
	const checkInDate = useRef()
	const [checkindate,setCheckindate] = useState('')
	const checkOutDate = useRef()
	const [checkintime,setCheckintime] = useState('')
	const checkInTime = useRef()
	const [checkoutdate,setCheckoutdate] = useState('')
	const checkOutTime = useRef()
	const [checkouttime,setCheckouttime] = useState('')
	useEffect(()=> {
		const defaultDate = new Date().toISOString().slice(0, 10);
		const defaultTime = new Date().toTimeString().slice(0, 5);
		setCheckindate(defaultDate);
		setCheckoutdate(defaultDate);
		setCheckintime(defaultTime);
		setCheckouttime(defaultTime);
		checkInDate.current.value = defaultDate;
		  checkOutDate.current.value = defaultDate;
		  checkInTime.current.value = defaultTime
		  checkOutTime.current.value = defaultTime
		if (checkInDate.current) {
		  
		}
	},[])
	return (
		<div className="bg-gray-800 bg-opacity-40 w-full rounded-lg p-3 md:p-8 md:flex flex-col items-center justify-center">
			<span className="font-poppins text-primary text-2xl"> Book Now</span>
			<div className="md:flex flex-col md:flex-row w-full gap-8 items-end space-y-3 mt-4">
				<div className="space-y-3">
					<span className="text-primary font-poppins">SELECT LOCATION</span>
					<div>
						<select
							ref={airport}
							className="bg-black text-white font-poppins p-3 px-5"
							name=""
							id="">
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
							ref={checkInDate}
							className="p-3 bg-black text-white"
							type="date"
							defaultValue={checkindate}
							onChange={(e)=>setCheckindate(e.target.value)}
						/>
						<input
							ref={checkInTime}
							className="p-3 bg-black text-white"
							type="time"
							defaultValue={checkintime}
							onChange={(e)=>setCheckintime(e.target.value)}
						/>
					</div>
				</div>
				<div className="md:flex flex-col space-y-3">
					<span className="text-white font-poppins">CHECK OUT</span>
					<div className="flex space-x-5">
						<input
							ref={checkOutDate}
							className="p-3 bg-black text-white"
							type="date"
							defaultValue={checkoutdate}
							onChange={(e)=>setCheckoutdate(e.target.value)}
						/>
						<input
							ref={checkOutTime}
							className="p-3 bg-black text-white"
							type="time"
							defaultValue={checkouttime}
							onChange={(e)=>setCheckouttime(e.target.value)}
							
						/>
					</div>
				</div>
				<button
					onClick={() =>
						navigate("/companies", {
							state: {
								airport: airport.current.value,
								checkInDate: checkInDate.current.value,
								checkInTime : checkInTime.current.value,
								checkOutDate: checkOutDate.current.value,
								checkOutTime : checkOutTime.current.value,
							},
						})
					}
					className="md:ml-8 bg-primary rounded-lg px-5 h-max p-3 font-poppins w-full md:w-max md:px-10">
					BOOK NOW
				</button>
			</div>
		</div>
	);
};

export default BookingCard;
