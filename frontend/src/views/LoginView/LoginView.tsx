import { Button, Form, Input, Layout } from "antd";
import HeaderView from "../../utils/Header/Header";
import FooterView from "../../utils/Footer/Footer";
import "./styles/LoginViewStyles.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
	CHANGE_ACCOUNTS_ARRAY,
	CHANGE_ACCOUNT_ID,
	CHANGE_DAILY_LIMIT,
	CHANGE_DEPOSITS_ARRAY,
	CHANGE_EMAIL,
	CHANGE_IS_LOGGED_IN,
	CHANGE_NUMBER_PHONE,
	CHANGE_PASSWORD,
	CHANGE_SINGLE_TRANSACTION_LIMIT,
	CHANGE_SITE,
	CHANGE_TRANSACTIONS_ARRAY,
	RESET_STATE,
} from "../../utils/types/ActionTypes";
import { UserState } from "../../utils/types/State";
import { useEffect } from "react";

const { Content } = Layout;

export default function LoginView() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { email, password } = useSelector((state: UserState) => state.user);
	useEffect(() => {
		dispatch({ type: RESET_STATE });
	}, []);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadLoginContentDiv'>
					<div className='loginContentDiv'>
						<div className='loginFormDiv'>
							<text className='loginText'>Logowanie</text>
							<Form layout='vertical' autoComplete='off'>
								<Form.Item
									hasFeedback
									label='Adres email'
									name='email'
									validateTrigger='onBlur'
									rules={[
										{
											min: 6,
											message: "Adres email musi mieć co najmniej 6 znaków!",
										},
										{
											max: 25,
											message: "Adres email może mieć maksymalnie 25 znaków!",
										},
										{
											required: true,
											message: "Proszę wprowadzić adres email!",
										},
									]}
									required={false}
									className='formItem'>
									<Input
										onChange={(event) =>
											dispatch({
												type: CHANGE_EMAIL,
												newEmail: event.target.value,
											})
										}
									/>
								</Form.Item>
								<Form.Item
									hasFeedback
									label='Hasło'
									name='password'
									validateTrigger='onBlur'
									rules={[
										{
											min: 6,
											message: "Hasło musi mieć co najmniej 6 znaków!",
										},
										{
											max: 25,
											message: "Hasło może mieć maksymalnie 25 znaków!",
										},
										{ required: true, message: "Proszę wprowadzić hasło!" },
									]}
									required={false}
									className='formItem'>
									<Input
										type='password'
										onChange={(event) =>
											dispatch({
												type: CHANGE_PASSWORD,
												newPassword: event.target.value,
											})
										}
									/>
								</Form.Item>
							</Form>
							<Button
								type='primary'
								className='loginButton'
								onClick={async () => {
									const endpoint = "http://localhost:2137/login";
									const zrzyganyUser = await fetch(endpoint, {
										method: "POST",
										headers: {
											"Content-Type": "application/json",
										},
										body: JSON.stringify({ email: email, password: password }),
									});
									let pojemnikNaRzygi;
									try {
										pojemnikNaRzygi = await zrzyganyUser.json();
									} catch (error) {
										pojemnikNaRzygi = zrzyganyUser.status;
									}
									if (
										pojemnikNaRzygi !== 300 &&
										pojemnikNaRzygi !== 500 &&
										pojemnikNaRzygi !== 401
									) {
										console.log(pojemnikNaRzygi);
										dispatch({ type: CHANGE_SITE, newSite: "my-account" });
										dispatch({
											type: CHANGE_IS_LOGGED_IN,
											newIsLoggedIn: true,
										});
										dispatch({
											type: CHANGE_DAILY_LIMIT,
											newDailyLimit: pojemnikNaRzygi._doc.dailyLimit,
										});
										dispatch({
											type: CHANGE_SINGLE_TRANSACTION_LIMIT,
											newSingleTransactionLimit:
												pojemnikNaRzygi._doc.singleTransactionLimit,
										});
										dispatch({
											type: CHANGE_ACCOUNTS_ARRAY,
											newAccountsArray: pojemnikNaRzygi._doc.accountsArray,
										});
										dispatch({
											type: CHANGE_TRANSACTIONS_ARRAY,
											newTransactionsArray:
												pojemnikNaRzygi._doc.transactionsArray,
										});
										dispatch({
											type: CHANGE_DEPOSITS_ARRAY,
											newDepositsArray: pojemnikNaRzygi._doc.depositsArray,
										});
										dispatch({
											type: CHANGE_NUMBER_PHONE,
											newPhoneNumber: pojemnikNaRzygi._doc.phoneNumber,
										});
										dispatch({
											type: CHANGE_ACCOUNT_ID,
											newAccountId: pojemnikNaRzygi._doc._id,
										});
										navigate("/dashboard");
									} else alert("Niepoprawne dane logowania!");
								}}>
								Zaloguj się
							</Button>
						</div>
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
