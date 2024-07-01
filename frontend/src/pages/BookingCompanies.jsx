import React, { useState } from "react";
import CompanyCard from "../components/CompanyCard";
import Header from "../components/Header";
import BookingCard from "../components/BookingCard";
import ModifyBookingCard from "../components/ModifyBookingCard";
import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { companies } from "../utils/data";
import NoData from "../components/NoData";

const BookingCompanies = () => {
	const [loading,setLoading] = useState(true)
	setTimeout(() => {
		setLoading(false)
	}, 2000);
	const location = useLocation()
	const data = location?.state
	const navigate = useNavigate();
	const [showModify, setShowModify] = useState(false);
	const [companyList,setCompanyList] = useState(companies.filter((company) => company?.airport === data?.airport))
	return (
		<div className="bg-black space-y-8">
			<Header layout={"secondary"} />

			<div className="px-6 md:px-24 space-y-5">
				<div className="bg-secondary w-full md:flex md:px-8 p-6 gap-4 items-center space-y-5 md:space-y-0">
					<button
						onClick={() => navigate("/")}
						className="flex items-center gap-4 text-white ">
						<IoChevronBackCircle className="text-3xl" />
						<span>Go Back</span>
					</button>

					<span className="text-white font-poppins text-lg">
						you have searched : {data?.airport} from: {data?.checkInDate} - {data?.checkInTime} to:
						{data?.checkOutDate} - {data?.checkOutTime}
					</span>
					<button
						onClick={() => setShowModify(!showModify)}
						className=" bg-[#333333] px-6 p-3 rounded-lg text-[#D3D6D8]">
						Modify Search
					</button>
				</div>
				{showModify && <ModifyBookingCard setShowModify={setShowModify} setCompanyList={setCompanyList} data={data} />}
				{loading && <Loader/>}
				{!companyList.length > 0 && !loading && <NoData/>}
				{!loading && companyList.length > 0 && (<div className="grid md:grid-cols-4 gap-6">
					{companyList?.map((item) => <CompanyCard details={data} data={item} />)}
				</div>)}
			</div>
            <Footer/>
		</div>
	);
};

export default BookingCompanies;
