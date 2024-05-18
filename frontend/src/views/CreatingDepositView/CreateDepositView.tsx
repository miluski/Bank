import { Button, Form, Input, Layout, Select } from "antd";
import { Content } from "antd/es/layout/layout";
import FooterView from "../../utils/Footer/Footer";
import HeaderView from "../../utils/Header/Header";
import { depositOfferTiles } from "../HomeView/DepositOfferView/DepositOfferTiles";
import { Tile } from "../../utils/OfferView/Tile";
import { useDispatch, useSelector } from "react-redux";
import {
	CHANGE_DEPOSIT_CREDENTIALS,
	CHANGE_SELECTED_ACCOUNT_TYPE,
	CHANGE_SITE,
} from "../../utils/types/ActionTypes";
import { DepositState, SiteState, UserState } from "../../utils/types/State";
import "./styles/CreateDepositViewStyles.css";
import { Account } from "../../utils/types/Account";
import { generateBankAccountNumber } from "../../utils/generateBankAccountNumber";
import { useState } from "react";
import { useNavigate } from "react-router";

const { Option } = Select;

export default function CreateDepositView() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { selectedAccountTypeIndex, amount } = useSelector(
		(state: SiteState) => state.siteReducer
	);
	const {
		accountsArray,
		currency,
		depositsArray,
		transactionsArray,
		accountId,
	} = useSelector((state: UserState) => state.user);
	const { type, endDate, percent } = useSelector(
		(state: DepositState) => state.depositReducer
	);
	const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'>
						<div className='sendingTransferDiv'>
							<text className='transferText'>Zakładanie lokaty</text>
							<Form layout='vertical' autoComplete='off'>
								<Form.Item
									hasFeedback
									label='Konto bankowe'
									name='accountBank'
									required={false}
									className='sendingFormItem'>
									<Select
										defaultValue={0}
										onChange={(selectedValue) => {
											setSelectedAccountIndex(selectedValue);
										}}>
										{accountsArray.map((account: Account, index: number) => (
											<Option value={index}>
												Konto {index + 1}, {account.number.substring(2, 4)}
												.......{account.number.substring(29)}, {account.money}{" "}
												{account.currency}
											</Option>
										))}
									</Select>
								</Form.Item>
							</Form>
							<text
								style={{
									fontFamily: "Roboto Flex",
									fontWeight: "100",
									fontSize: "24px",
								}}>
								Kwota
							</text>
							<Input
								disabled={true}
								value={String(amount) + " " + currency}
								style={{ display: "flex", width: "20%", marginBottom: "20px" }}
							/>
							<text className='depositType'>Typ lokaty</text>
							<div className='mainChooseTilesDiv'>
								{depositOfferTiles.map((tile: Tile, index: number) => (
									<div
										className='singleChooseTile'
										key={index}
										style={{
											backgroundColor:
												index === selectedAccountTypeIndex
													? "#FFC920"
													: "#F98B07",
										}}
										onClick={() => {
											let date = new Date();
											tile.monthsNumber !== undefined
												? date.setMonth(date.getMonth() + tile.monthsNumber)
												: null;
											dispatch({
												type: CHANGE_SELECTED_ACCOUNT_TYPE,
												newSelectedAccountTypeIndex: index,
												newAmount: tile.minimumAmount,
											});
											dispatch({
												type: CHANGE_DEPOSIT_CREDENTIALS,
												newDepositType: tile.title,
												newDepositEndDate: date,
												newDepositPercent: tile.percent,
											});
										}}>
										<text className='title'>{tile.title}</text>
										<text className='percent'>{tile.percent} %</text>
										<text className='description'>{tile.description}</text>
									</div>
								))}
							</div>
							<Button
								type='primary'
								className='loginHeaderButton'
								onClick={async () => {
									if (accountsArray[selectedAccountIndex].money >= amount) {
										const depositNumber = generateBankAccountNumber();
										depositsArray.push({
											type: type,
											endDate: endDate.toLocaleDateString("en-GB", {
												day: "2-digit",
												month: "2-digit",
												year: "numeric",
											}),
											number: depositNumber,
											percent: String(percent) + " %",
											money: amount,
											currency: "PLN",
										});
										accountsArray[selectedAccountIndex].money -= amount;
										const endpoint = "http://localhost:2137/create-deposit";
										const response = await fetch(endpoint, {
											method: "POST",
											headers: {
												"Content-Type": "application/json",
											},
											body: JSON.stringify({
												accountId: accountId,
												depositsArray: depositsArray,
											}),
										});
										if (response.status === 200) {
											const accountEndpoint =
												"http://localhost:2137/update-user-account-money";
											const accountResponse = await fetch(accountEndpoint, {
												method: "POST",
												headers: {
													"Content-Type": "application/json",
												},
												body: JSON.stringify({
													accountId: accountId,
													accountsArray: accountsArray,
												}),
											});
											if (accountResponse.status === 200) {
												const transactionEndpoint =
													"http://localhost:2137/save-transaction";
												transactionsArray.push({
													date: new Date().toLocaleDateString("en-GB", {
														day: "2-digit",
														month: "2-digit",
														year: "numeric",
													}),
													type: "Wydatki",
													title: "Utworzenie lokaty",
													amount: String(amount) + " " + currency,
												});
												const transactionResponse = await fetch(
													transactionEndpoint,
													{
														method: "POST",
														headers: {
															"Content-Type": "application/json",
														},
														body: JSON.stringify({
															accountId: accountId,
															transactionsArray: transactionsArray,
														}),
													}
												);
												if (transactionResponse.status === 200) {
													alert("Pomyślnie załozono lokatę!");
													dispatch({
														type: CHANGE_SITE,
														newSite: "my-account",
													});
													navigate("/dashboard");
												} else alert("Wystąpił błąd!");
											}
										}
									} else
										alert(
											"Środki na koncie są niewystarczające do założenia wskazanej lokaty!"
										);
								}}>
								Załóż lokatę
							</Button>
						</div>
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
