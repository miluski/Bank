import { State } from "../State";
import { Tile } from "./Tile";
import { Button } from "antd";
import { useSelector } from "react-redux";
import "./styles/BudgetViewStyles.css";

export default function BudgetView(props: { tiles: Tile[] }) {
	const { site } = useSelector((state: State) => state);
	const buttonText =
		site === "my-account"
			? "Wysyłanie przelewu ->"
			: site === "savings"
			? "Tworzenie lokaty ->"
			: null;
	const buttonColor =
		site === "my-account"
			? "#FFC920"
			: site === "savings"
			? "#E4AB3B"
			: "#FFC920";
	const colors = ["#F98B07", "#FFC920", "#E4AB3B"];
	return (
		<div className='mainBudgetDiv'>
			{props.tiles.map((singleTile: Tile, index: number) => (
				<div
					className='mainTileDiv'
					style={{ backgroundColor: colors[index % colors.length] }}
					key={index}>
					<div className='leftContentDiv'>
						<text className='headerTexts'>{singleTile.type}</text>
						{(singleTile.endDate && (
							<text className='informationTexts'>{singleTile.endDate}</text>
						)) || <text></text>}
						<text className='informationTexts'>{singleTile.number}</text>
					</div>
					<div className='rightContentDiv'>
						{singleTile.percent && (
							<text className='percentText'>{singleTile.percent}</text>
						)}
						<text className='moneyText'>{singleTile.money}</text>
						<text className='currencyText'>{singleTile.currency}</text>
					</div>
				</div>
			))}
			<Button
				className='budgetOperationButton'
				style={{ backgroundColor: buttonColor }}
                type="primary">
				{buttonText}
			</Button>
		</div>
	);
}
