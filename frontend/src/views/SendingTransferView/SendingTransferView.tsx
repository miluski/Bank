import {
	Button,
	Form,
	Input,
	Layout,
	Radio,
	RadioChangeEvent,
	Select,
} from "antd";
import { Content } from "antd/es/layout/layout";
import FooterView from "../../utils/Footer/Footer";
import HeaderView from "../../utils/Header/Header";
import "./styles/SendingTransferViewStyles.css";
import { Account } from "../../utils/types/Account";
import { useDispatch, useSelector } from "react-redux";
import { TransferState, UserState } from "../../utils/types/State";
import { useEffect, useState } from "react";
import { AccountNumber } from "./AccountNumber";
import {
	CHANGE_RECEIVER_ACCOUNT_OBJECT,
	CHANGE_SITE,
	CHANGE_TITLE,
	CHANGE_TRANSFER_AMOUNT,
	CHANGE_TYPE,
} from "../../utils/types/ActionTypes";
import { useNavigate } from "react-router";

const { Option } = Select;

export default function SendingTransferView() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { accountsArray, accountId, transactionsArray } = useSelector(
		(state: UserState) => state.user
	);
	const { title, receiverAccountObject, transferAmount, type } = useSelector(
		(state: TransferState) => state.transferReducer
	);
	const [allAccountsArray, setAllAccountsArray] = useState<
		undefined | AccountNumber
	>(undefined);
	const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);
	useEffect(() => {
		(async () => {
			const endpoint = "http://localhost:2137/all-accounts";
			const response = await fetch(endpoint);
			const data = await response.json();
			dispatch({
				type: CHANGE_RECEIVER_ACCOUNT_OBJECT,
				newReceiverAccountObject: JSON.parse(
					JSON.stringify({
						accountId: data[0].userId,
						accountNumber: data[0].accounts[0].number,
					})
				),
			});
			setAllAccountsArray(data);
		})();
	}, []);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'>
						<div className='sendingTransferDiv'>
							<text className='transferText'>Przelew bankowy</text>
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
												......{account.number.substring(29)}, {account.money}{" "}
												{account.currency}
											</Option>
										))}
									</Select>
								</Form.Item>
								<Form.Item
									hasFeedback
									label='Tytuł'
									name='title'
									validateTrigger='onBlur'
									rules={[
										{
											min: 6,
											message: "Tytuł musi mieć co najmniej 6 znaków!",
										},
										{
											max: 25,
											message: "Tytuł może mieć maksymalnie 25 znaków!",
										},
										{
											required: true,
											message: "Proszę wprowadzić tytuł!",
										},
									]}
									required={false}
									className='sendingFormItem'>
									<Input
										onChange={(event) => {
											dispatch({
												type: CHANGE_TITLE,
												newTitle: event.target.value,
											});
										}}
									/>
								</Form.Item>
								<Form.Item
									hasFeedback
									label='Numer konta odbiorcy'
									name='receiverNumber'
									validateTrigger='onBlur'
									required={false}
									className='sendingFormItem'>
									{allAccountsArray !== undefined && (
										<Select
											defaultValue={JSON.stringify({
												accountId: allAccountsArray[0].userId,
												accountNumber: allAccountsArray[0].accounts[0].number,
											})}
											onChange={(selectedValue) => {
												dispatch({
													type: CHANGE_RECEIVER_ACCOUNT_OBJECT,
													newReceiverAccountObject: JSON.parse(selectedValue),
												});
											}}>
											{allAccountsArray !== undefined &&
												allAccountsArray.map(
													(accountArray: any, index: number) =>
														accountArray.accounts
															.filter(
																(account: Account, _index: number) =>
																	!accountsArray.some(
																		(accountFromArr: Account) =>
																			account.number === accountFromArr.number
																	)
															)
															.map((account: Account, _lowerIndex: number) => (
																<Option
																	value={JSON.stringify({
																		accountId: accountArray.userId,
																		accountNumber: account.number,
																	})}>
																	Konto {index + 1},{" "}
																	{account.number.substring(2, 4)}
																	......{account.number.substring(29)}
																</Option>
															))
												)}
										</Select>
									)}
								</Form.Item>
								<Form.Item
									hasFeedback
									label='Kwota'
									name='amount'
									validateTrigger='onBlur'
									rules={[
										{
											min: 1,
											message: "Kwota musi mieć co najmniej 1 znak!",
										},
										{
											max: 10,
											message: "Kwota może mieć maksymalnie 10 znaków!",
										},
										{ required: true, message: "Proszę wprowadzić kwotę!" },
									]}
									required={false}
									className='sendingFormItem'>
									<Input
										onChange={(event) => {
											dispatch({
												type: CHANGE_TRANSFER_AMOUNT,
												newAmount: event.target.value,
											});
										}}
									/>
								</Form.Item>
								<Form.Item
									hasFeedback
									label='Typ przelewu'
									name='transferType'
									className='sendingFormItem'>
									<Radio.Group
										defaultValue={"Zwyczajny"}
										onChange={(e: RadioChangeEvent) =>
											dispatch({ type: CHANGE_TYPE, newType: e.target.value })
										}>
										<Radio value={"Zwyczajny"}>Zwyczajny</Radio>
										<Radio value={"Ekspresowy"}>Ekspresowy</Radio>
									</Radio.Group>
								</Form.Item>
							</Form>
							<Button
								type='primary'
								className='registerButton'
								onClick={async () => {
									if (
										accountsArray[selectedAccountIndex].money >=
											transferAmount &&
										title.length >= 3 &&
										transferAmount >= 1
									) {
										const endpoint = `http://localhost:2137/user/data/${receiverAccountObject.accountId}`;
										const transferEndpoint =
											"http://localhost:2137/update-user-account-money";
										const transactionsEndpoint =
											"http://localhost:2137/save-transaction";
										const response = await fetch(endpoint);
										const receiver = await response.json();
										accountsArray[selectedAccountIndex].money -= transferAmount;
										transactionsArray.push({
											date: new Date().toLocaleDateString("en-GB", {
												day: "2-digit",
												month: "2-digit",
												year: "numeric",
											}),
											type: "Wydatki",
											title: title,
											amount: String(transferAmount) + " " + "PLN",
										});
										for (let i = 0; i < receiver.accountsArray.length; i++) {
											receiver.accountsArray[i].number ===
											receiverAccountObject.accountNumber
												? ((receiver.accountsArray[i].money = String(
														Number(receiver.accountsArray[i].money) +
															Number(transferAmount)
												  )),
												  receiver.transactionsArray.push({
														date: new Date().toLocaleDateString("en-GB", {
															day: "2-digit",
															month: "2-digit",
															year: "numeric",
														}),
														type: "Wpływy",
														title: title,
														amount: String(transferAmount) + " " + "PLN",
												  }))
												: null;
										}
										const senderTransferResponse = await fetch(
											transferEndpoint,
											{
												method: "POST",
												headers: {
													"Content-Type": "application/json",
												},
												body: JSON.stringify({
													accountId: accountId,
													accountsArray: accountsArray,
												}),
											}
										);
										const receiverTransferResponse = await fetch(
											transferEndpoint,
											{
												method: "POST",
												headers: {
													"Content-Type": "application/json",
												},
												body: JSON.stringify({
													accountId: receiverAccountObject.accountId,
													accountsArray: receiver.accountsArray,
												}),
											}
										);
										if (
											senderTransferResponse.status === 200 &&
											receiverTransferResponse.status === 200
										) {
											const senderTransactionResponse = await fetch(
												transactionsEndpoint,
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
											const receiverTransactionResponse = await fetch(
												transactionsEndpoint,
												{
													method: "POST",
													headers: {
														"Content-Type": "application/json",
													},
													body: JSON.stringify({
														accountId: receiverAccountObject.accountId,
														transactionsArray: receiver.transactionsArray,
													}),
												}
											);
											if (
												senderTransactionResponse.status === 200 &&
												receiverTransactionResponse.status === 200
											) {
												alert("Pomyślnie wysłano przelew!");
												dispatch({
													type: CHANGE_SITE,
													newSite: "my-account",
												});
												navigate("/dashboard");
											} else alert("Wystąpił błąd!");
										}
									} else alert("Uzupełnij poprawnie dane!");
								}}>
								Wyślij przelew
							</Button>
						</div>
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
