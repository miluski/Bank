import { Button, Form, Select, Tooltip } from "antd";
import { useNavigate } from "react-router";
import { accountOfferTiles } from "../HomeView/AccountOfferView/AccountOfferTiles";
import { Tile } from "../../utils/OfferView/Tile";
import { useDispatch, useSelector } from "react-redux";
import { SiteState, UserState } from "../../utils/types/State";
import {
	CHANGE_ACCOUNT_TYPE,
	CHANGE_CURRENCY,
	CHANGE_SELECTED_ACCOUNT_TYPE,
} from "../../utils/types/ActionTypes";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { generateBankAccountNumber } from "../../utils/generateBankAccountNumber";

export default function ChooseAccountTypeView() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { selectedAccountTypeIndex } = useSelector(
		(state: SiteState) => state.siteReducer
	);
	const {
		email,
		name,
		surname,
		phoneNumber,
		documentType,
		documentId,
		pesel,
		birthday,
		motherSurname,
		country,
		postCode,
		city,
		street,
		houseNumber,
		apartmentNumber,
		accountType,
		currency,
	} = useSelector((state: UserState) => state.user);
	
	return (
		<>
			<text className='loginText'>Wybór typu konta</text>
			<div className='mainChooseTilesDiv'>
				{accountOfferTiles.map((tile: Tile, index: number) => (
					<div
						className='singleChooseTile'
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
							dispatch({
								type: CHANGE_ACCOUNT_TYPE,
								newAccountType: tile.title,
							});
						}}>
						<text className='title'>{tile.title}</text>
						<text className='description'>{tile.description}</text>
						{index !== 2 ? (
							<Tooltip
								className='customTooltip'
								title='Walutą podstawową wskazanego konta to PLN.'>
								<QuestionCircleOutlined />
							</Tooltip>
						) : (
							<Tooltip
								className='customTooltip'
								title='Dostępnymi walutami dla tego konta są: PLN, GBP, EUR.'>
								<QuestionCircleOutlined />
							</Tooltip>
						)}
					</div>
				))}
			</div>
			{selectedAccountTypeIndex === 2 && (
				<>
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
									{ value: "PLN", label: "PLN" },
									{ value: "EUR", label: "EUR" },
									{ value: "GBP", label: "GBP" },
								]}
								placeholder='PLN'
								onChange={(CONIECHCESZNAPRZYKLADTEN) => {
									console.log(CONIECHCESZNAPRZYKLADTEN);
									dispatch({
										type: CHANGE_CURRENCY,
										newCurrency: CONIECHCESZNAPRZYKLADTEN,
									});
								}}
							/>
						</Form.Item>
					</Form>
				</>
			)}
			<Button
				className='nextButton'
				onClick={async () => {
					const endCurrency = currency !== null ? currency : "PLN";
					const bankAccountNumber = generateBankAccountNumber();
					const endpoint = "http://localhost:2137/register";
					const odpowiedz = await fetch(endpoint, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: email,
							name: name,
							surname: surname,
							phoneNumber: phoneNumber,
							documentType: documentType,
							documentId: documentId,
							pesel: pesel,
							birthday: birthday,
							motherSurname: motherSurname,
							country: country,
							postCode: postCode,
							city: city,
							street: street,
							houseNumber: houseNumber,
							apartmentNumber: apartmentNumber,
							accountsArray: [
								{
									type: accountType,
									number: bankAccountNumber,
									money: 1000,
									currency: endCurrency,
								},
							],
							transactionsArray: [
								{
									date: new Date().toLocaleDateString("en-GB", {
										day: "2-digit",
										month: "2-digit",
										year: "numeric",
									}),
									type: "Wpływy",
									title: "Utworzenie konta",
									amount: `1000 ${endCurrency}`,
								},
							],
						}),
					});
					const inaczej = await odpowiedz.json();
					console.log(inaczej.generatedPassword);
					navigate("/login");
				}}>
				Złóż wniosek
			</Button>
		</>
	);
}
