import { Tile } from "./Tile";
import "./styles/AccountTilesStyles.css";

const tilesData = [
	{
		title: "Konto dla młodych",
		description: "Wsparcie w zarządzaniu środkami osobistymi",
		bgColor: "#FFB532",
	},
	{
		title: "Konto indywidualne",
		description:
			"Wygodne zarządzanie finansami, karty debetowe i dostęp do bankomatów",
		bgColor: "#FFC920",
	},
	{
		title: "Konto walutowe",
		description: "Brak jakichkolwiek opłat za transakcje w obcych walutach",
		bgColor: "#E4AB3B",
	},
	{
		title: "Konto student",
		description: "Dopisanie 0.5% od każdego wpływu na konto powyżej 1000 PLN",
		bgColor: "#C49C73",
	},
];

export default function AccountsTiles() {
	return (
		<div className="mainTilesDiv">
			{tilesData.map((tile: Tile, index: number) => (
				<div
					className='singleTile'
					key={index}
					style={{ backgroundColor: tile.bgColor }}>
                        <text className="title">{tile.title}</text>
                        <text className="description">{tile.description}</text>
                    </div>
			))}
		</div>
	);
}
