import React from "react";

const ContactDetails = () => {
	return (
		<div className="border-[1px] rounded-md border-white p-8">
			<h1 className="text-white text-2xl font-poppins ">Contact Details</h1>

			<div className="mt-4 ">
				<form className="w-full space-y-2" action="">
					<div className="md:flex w-full gap-5">
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Title *
							</label>
							<select className="p-2" name="" id="">
								<option value="Mr">Mr</option>
							</select>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								First Name *
							</label>
							<input
								className="p-2"
								type="text"
								placeholder="Enter First Name"
							/>
						</div>
					</div>
					<div className="md:flex w-full gap-5">
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Last Name *
							</label>
							<input
								className="p-2"
								type="text"
								placeholder="Enter Last Name"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Email *
							</label>
							<input className="p-2" type="email" placeholder="Enter Email ID" />
						</div>
					</div>
					<div className="md:flex w-full gap-5">
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Contact Number *
							</label>
							<input
								className="p-2"
								type="phone"
								placeholder="Enter Contact Number"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Number Of Peoples *
							</label>
							<select className="p-2" name="" id="">
								<option value="1">1</option>
							</select>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactDetails;
