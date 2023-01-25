import { IconButton } from "@mui/material";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
const GoTop = ({ scrollUp }) => {
	return (
		<>
			<IconButton
				className="fixed bg-primary w-12 h-12 bottom-4 right-4 rounded-2xl cursor-pointer z-50 animate-bounce"
				onClick={scrollUp}
			>
				<PanToolAltIcon className="text-gray-900" />
			</IconButton>
		</>
	);
};
export default GoTop;
