import { IconButton } from "@mui/material";
//? ICONS SVG
import linkedIn from "../assets/icons/linkedin.svg";
import m from "../assets/icons/m.svg";
import github from "../assets/icons/github.svg";
import discord from "../assets/icons/discord.svg";

// this function return an jsx for each icons
const CustomIconButton = ({ src }) => {
	return (
		<IconButton className="p-1 w-16 h-16 scale__hover cursor-pointer">
			<img className="w-full h-full" src={src} alt="linkedin" />
		</IconButton>
	);
};

export default function Footer() {
	return (
		<footer className="container py-12 bg-[#A1AAA5] flex justify-between">
			<div className="w-1/3">
				<h2 className="font-changa text-5xl mb-6 capitalize">mina max</h2>
				<p className="text-justify text-sm font-semibold">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
					tempore, unde mollitia cum molestias earum, nemo qui atque quia dicta
					possimus, eius esse est .
				</p>
			</div>
			<div className="w-1/3 flex flex-col gap-2 items-center justify-center">
				<p className="capitalize text-2xl font-bold">join us</p>
				<div className="flex justify-center gap-1 items-center">
					{[linkedIn, m, github, discord].map((src) => (
						<CustomIconButton src={src} />
					))}
				</div>
			</div>
		</footer>
	);
}
