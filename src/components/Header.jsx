import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";

// COMPONENTS
import SearchField from "../components/SearchField";

export default function Header() {
	return (
		<header className="container mt-[45px] mb-[30px] font-rubik flex items-center">
			<h1 className="font-changa text-5xl mr-36 -mt-2">Mina Max</h1>

			<nav className="flex items-center justify-between grow">
				<ul className="flex items-center gap-24">
					<Button className="font-semibold text-black normal-case text-lg font-rubik hover:bg-secondary transition-all duration-300 cursor-pointer rounded-full px-4 py-2">
						Auctions
					</Button>
					<Button className="font-bold text-black normal-case font-rubik text-lg hover:bg-secondary transition-all duration-300 cursor-pointer rounded-full px-4 py-2">
						Register
					</Button>
				</ul>
				<div className="flex items-center gap-8">
					<SearchField />

					<Button
						endIcon={<Add />}
						className="bg-gradient-to-tr font-[900] capitalize from-primary via-[#D9FFFC] to-[#D9FFFC]/50
       hover:scale-105 hover:via-primary hover:to-[#D9FFFC]  text-black rounded-full py-3 pl-8 pr-12 transition-all duration-500"
					>
						Connect Wallet
					</Button>
				</div>
			</nav>
		</header>
	);
}
