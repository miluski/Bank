import { Button, Form, Select } from "antd";
import { useNavigate } from "react-router";
import { accountOfferTiles } from "../HomeView/AccountOfferView/AccountOfferTiles";
import { Tile } from "../../utils/OfferView/Tile";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../utils/State";
import { CHANGE_SELECTED_ACCOUNT_TYPE } from "../../utils/ActionTypes";

export default function ChooseAccountTypeView() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { selectedAccountTypeIndex } = useSelector((state: State) => state);
	return (
		<>
			<text className='loginText'>Wybór typu konta</text>
			<div className='mainTilesDiv'>
				{accountOfferTiles.map((tile: Tile, index: number) => (
					<div
						className='singleTile'
						key={index}
						style={{
							backgroundColor:
								index === selectedAccountTypeIndex ? "#FFC920" : "#F98B07",
						}}
						onClick={() => {
							dispatch({
								type: CHANGE_SELECTED_ACCOUNT_TYPE,
								newSelectedAccountTypeIndex: index,
							});
						}}>
						<text className='title'>{tile.title}</text>
						<text className='description'>{tile.description}</text>
					</div>
				))}
			</div>
			{selectedAccountTypeIndex === 2 && (
				<Form layout='vertical' autoComplete='off'>
					<Form.Item
						hasFeedback
						label='Waluta konta'
						name='documentType'
						validateTrigger='onBlur'
						required={false}
						className='formChooseItem'>
						<Select
							options={[
								{ value: "pln", label: "PLN" },
								{ value: "eur", label: "EUR" },
								{ value: "gbp", label: "GBP" },
							]}
							placeholder='PLN'
						/>
					</Form.Item>
				</Form>
			)}
			<Button
				className='nextButton'
				onClick={() => {
					navigate("/login");
				}}>
				Złóż wniosek
			</Button>
		</>
	);
}
