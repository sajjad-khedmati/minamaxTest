import { Pagination } from "@mui/material";
import cardData from "../data/cardItem";

// COMPONENTS
import Card from "./Card";


export default function Main() {
	return (
		<main className="container py-8">
			{/* card */}
			<div className="flex flex-col gap-8">
				{cardData.map((item) => (
					<Card
						key={item.id}
						title={item.title}
						picture={item.picture}
						location={item.location}
						categorye={item.categorye}
						cloud={item.cloud}
						type={item.type}
						currentBid={item.currentBid}
						time={item.time}
					/>
				))}
			</div>

			<div className="w-full mt-20">
				<Pagination
					className="mx-auto w-max"
					count={10}
					variant="outlined"
					shape="rounded"
				/>
			</div>
		</main>
	);
}
