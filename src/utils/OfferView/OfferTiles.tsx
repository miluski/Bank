import { Tile } from "./Tile";
import "./styles/Tile.css";

export default function OfferTiles(props: { tilesData: Tile[] }) {
	return (
		<div className='mainTilesDiv'>
			{props.tilesData.map((tile: Tile, index: number) => (
				<div
					className='singleTile'
					key={index}
					style={{ backgroundColor: tile.bgColor }}>
					<text className='title'>{tile.title}</text>
					{tile.percent && <text className='percent'>{tile.percent}</text>}
					<text className='description'>{tile.description}</text>
				</div>
			))}
		</div>
	);
}
