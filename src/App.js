import { useEffect, useRef, useState } from "react";

// COMPONENTS
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GoTop from "./components/GoTop";

// IMAGES
import banner from "./assets/banner.svg";

function App() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [showGoTop, setShowGoTop] = useState(false);

	//? handle the display 'go to top' component
	const handleVisibleButton = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);

		if (scrollPosition > 250) {
			return setShowGoTop(true);
		} else if (scrollPosition < 50) {
			return setShowGoTop(false);
		}
	};

	//* scroll listener
	useEffect(() => {
		window.addEventListener("scroll", handleVisibleButton);
	});

	//? create an ref to top of page and use it to back scroll
	const refScrollUp = useRef();
	const handleScrollUp = () => {
		refScrollUp.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<div className="absolute top-0" ref={refScrollUp}></div>
			<Header />
			<div className="container relative">
				<img src={banner} alt="banner" />
				<p className="text-white absolute bottom-24 left-32 text-5xl font-bold">
					Auctions
				</p>
			</div>
			<Main />

			<Footer />
			{showGoTop && <GoTop scrollUp={handleScrollUp} />}
		</>
	);
}

export default App;
