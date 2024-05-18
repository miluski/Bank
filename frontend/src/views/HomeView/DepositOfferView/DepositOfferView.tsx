import OfferTiles from "../../../utils/OfferView/OfferTiles";
import OfferView from "../../../utils/OfferView/OfferView";
import { depositOfferTiles } from "./DepositOfferTiles";

export default function DepositOfferView() {
	return (
		<div className='offerDiv'>
			<OfferView
				advertisementsTexts={{
					accountsOfferText: "Oferta lokat",
					advertismentUpperText:
						"Lokaty w naszym banku mają najkorzystniejsze oprocentowanie na rynku.",
					advertismentLowerText: "Sprawdź naszą ofertę już dziś!",
				}}
				imageUrl={
					"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTKscQ6P1t85Jibdx52gQ7_blrkvqUXC4kgQLYy1Jq_xDucybRW"
				}
			/>
			<OfferTiles tilesData={depositOfferTiles} />
		</div>
	);
}
