import { Button } from "@mui/material";

// IMAGES
import locationIcon from "../assets/icons/location.svg";
import lightIcon from "../assets/icons/light.svg";
import cloudIcon from "../assets/icons/cloud.svg";
import tickIcon from "../assets/icons/tick.svg";
import clockIcon from "../assets/icons/clock.svg";

export default function Card({
	title,
	picture,
	location,
	categorye,
	cloud,
	type,
	currentBid,
	time,
}) {
	return (
		<div className="w-full h-auto border border-primary rounded-2xl my-4 shadow-xl shadow-primary/40 px-14 py-6 flex gap-14 items-center">
			<img src={picture} alt="image1" className="w-80 h-auto" />
			<div className="flex flex-col justify-between gap-12 flex-1">
				<h2 className="capitalize text-3xl font-semibold">{title}</h2>
				<div className="flex flex-col gap-10 ml-6">
					<div className="flex items-center gap-48">
						<div className="flex gap-2 items-center w-24">
							<img src={locationIcon} alt="location" className="w-7 h-auto" />
							<p className="capitalize text-xl ">{location}</p>
						</div>

						<div className="flex gap-2 items-center">
							<img src={lightIcon} alt="light" className="w-7 h-auto" />
							<p className="capitalize text-xl ">{categorye}</p>
						</div>
					</div>

					<div className="flex items-center gap-48">
						<div className="flex gap-2 items-center w-24">
							<img src={cloudIcon} alt="cloud" className="w-7 h-auto" />
							<p className="uppercase text-xl">{cloud}</p>
						</div>

						<div className="flex gap-2 items-center">
							<img src={tickIcon} alt="location" className="w-7 h-auto" />
							<p className="capitalize text-xl">{type}</p>
						</div>
					</div>
				</div>
				<div className="flex justify-between gap-12">
					<div className="w-[70%] h-full bg-secondary rounded-3xl px-4 py-6 flex items-center justify-between">
						<div className="pl-6 ">
							<p className="capitalize font-semibold text-[#989898] text-lg">
								current bid
							</p>
							<p className="font-bold uppercase text-xl">
								<span className="font-thin mr-1">{currentBid}</span>audt
							</p>
						</div>

						<div className="bg-[#E4FD9C] px-8 py-2 rounded-3xl flex items-center gap-2 justify-center">
							<img src={clockIcon} alt="clock" />
							<p className="font-thin">{time}</p>
						</div>
					</div>

					<div className="flex flex-col justify-between">
						<Button className="font-bold tracking-tight text-base font-rubik rounded-xl normal-case bg-primary hover:bg-green-300 transition-all duration-500 text-black px-10 py-4">
							Place a Bit
						</Button>
						{/* USE LINK TAG HERE */}
						<p className="text-center font-semibold cursor-pointer hover:animate-pulse">
							View detail >>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
