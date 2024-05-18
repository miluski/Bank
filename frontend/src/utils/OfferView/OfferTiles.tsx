import { useDispatch } from "react-redux";
import { Tile } from "./Tile";
import "./styles/Tile.css";
import {
	CHANGE_ACCOUNT_OFFER_FIELDS,
	CHANGE_DEPOSIT_OFFER_FIELDS,
} from "../types/ActionTypes";

export default function OfferTiles(props: { tilesData: Tile[] }) {
	const dispatch = useDispatch();
	return (
		<div className='mainTilesDiv'>
			{props.tilesData.map((tile: Tile, index: number) => (
				<div
					className='singleTile'
					key={index}
					style={{ backgroundColor: tile.bgColor }}
					onClick={() => {
						tile.percent
							? dispatch({
									type: CHANGE_DEPOSIT_OFFER_FIELDS,
									newProductType: tile.title,
									newPercent: tile.percent,
									newMinimumAmount: tile.minimumAmount,
									newMaximumAmount: tile.maximumAmount,
									newScale: tile.description,
									newSite: "singleDepositOffer",
							  })
							: dispatch({
									type: CHANGE_ACCOUNT_OFFER_FIELDS,
									newProductType: tile.title,
									newInformationTexts: tile.informationTexts,
									newImageUrl: tile.imageUrl,
									newSite: "singleAccountOffer",
							  });
					}}>
					<text className='title'>{tile.title}</text>
					{tile.percent && <text className='percent'>{tile.percent} %</text>}
					<text className='description'>{tile.description}</text>
				</div>
			))}
		</div>
	);
}
