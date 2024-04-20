import OfferTiles from "../../../utils/OfferView/OfferTiles";
import OfferView from "../../../utils/OfferView/OfferView";
import { accountOfferTiles } from "./AccountOfferTiles";

export default function AccountOfferView() {
	return (
		<div className='offerDiv'>
			<OfferView
				advertisementsTexts={{
					accountsOfferText: "Oferta kont bankowych",
					advertismentUpperText:
						"Chcesz uwolnić się od opłat za użytkowanie konta bankowego?",
					advertismentLowerText: "Załóż już dzisiaj konto w naszym banku!",
				}}
				imageUrl={
					"https://www.bspilzno.pl/wp-content/uploads/2022/11/ubezpieczenia-tur.jpeg.webp"
				}
			/>
			<OfferTiles tilesData={accountOfferTiles} />
		</div>
	);
}
