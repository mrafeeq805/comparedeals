import React from "react";

const VehicleCard = () => {
	return (
		<div className="border-[1px] rounded-md border-white p-8">
			<h1 className="text-white text-2xl font-poppins ">Vehicle Details</h1>

			<div className="mt-3 w-full">
				<form className="w-full space-y-2" action="">
					<div className="md:flex w-full gap-5">
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Make *
							</label>
							<input
								className="p-2"
								type="text"
								placeholder="Enter Make"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Model *
							</label>
							<input
								className="p-2"
								type="text"
								placeholder="Enter Model"
							/>
						</div>
					</div>
					<div className="md:flex w-full gap-5">
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Color *
							</label>
							<input
								className="p-2"
								type="text"
								placeholder="Enter Color"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full">
							<label className="text-white font-poppins" htmlFor="">
								Reg No *
							</label>
							<input className="p-2" type="text" placeholder="Enter Reg No" />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default VehicleCard;
