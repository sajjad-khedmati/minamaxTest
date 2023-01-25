// IMAGES
import searchIcon from "../assets/search.svg";

export default function SearchField() {
	return (
		<div className="relative custom-shadow bg-inherit rounded-full">
			<img
				src={searchIcon}
				alt="search"
				className="absolute inset-y-1/2 -translate-y-1/2 left-3"
			/>
			<input
				type="search"
				className="py-3 text-sm text-black rounded-full border pl-12 pr-7 outline-none focus:border-primary focus:pr-10 transition-all duration-300 focus:bg-white focus:text-gray-900 placeholder:text-[#0A122A]"
				placeholder="Search Auction"
				autocomplete="off"
			/>
		</div>
	);
}
