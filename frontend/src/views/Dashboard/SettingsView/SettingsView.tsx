import { Button, Form, Input } from "antd";
import "./styles/SettingsViewStyles.css";
import { UserState } from "../../../utils/types/State";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
	CHANGE_DAILY_LIMIT,
	CHANGE_EMAIL,
	CHANGE_NUMBER_PHONE,
	CHANGE_SINGLE_TRANSACTION_LIMIT,
	CHANGE_SITE,
} from "../../../utils/types/ActionTypes";

export default function SettingsView() {
	const dispatch = useDispatch();
	const { email, dailyLimit, singleTransactionLimit, phoneNumber, accountId } =
		useSelector((state: UserState) => state.user);
	const [startData, setStartData] = useState({
		email: email,
		dailyLimit: dailyLimit,
		singleTransactionLimit: singleTransactionLimit,
		phoneNumber: phoneNumber,
	});
	return (
		<div className='mainDiv'>
			<text className='changeAccountSettingsText'>Zmiana ustawień konta</text>
			<hr className='line' />
			<text className='informationText'>Dane kontaktowe</text>
			<hr className='line' />
			<Form
				layout='horizontal'
				autoComplete='off'
				style={{
					width: "100%",
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
				}}>
				<Form.Item
					hasFeedback
					label='Telefon kontaktowy'
					name='phoneNumber'
					validateTrigger={["onBlur", "onSubmit"]}
					rules={[
						{
							min: 6,
							message: "Telefon kontaktowy musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Telefon kontaktowy może mieć maksymalnie 25 znaków!",
						},
						{
							required: true,
							message: "Proszę wprowadzić telefon kontaktowy!",
						},
					]}
					required={false}
					className='formItem'>
					<Input
						placeholder={phoneNumber}
						onChange={(event) => {
							dispatch({
								type: CHANGE_NUMBER_PHONE,
								newPhoneNumber: event.target.value,
							});
						}}
					/>
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Adres email'
					name='email'
					validateTrigger={["onBlur", "onSubmit"]}
					rules={[
						{
							min: 6,
							message: "Adres email musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Adres email może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić adres email!" },
					]}
					required={false}
					className='formItem'>
					<Input
						placeholder={email}
						onChange={(event) => {
							dispatch({
								type: CHANGE_EMAIL,
								newEmail: event.target.value,
							});
						}}
					/>
				</Form.Item>
			</Form>
			<hr className='line' />
			<text className='informationText'>Limity transakcji</text>
			<hr className='line' />
			<Form>
				<Form.Item
					hasFeedback
					label='Limit dzienny'
					name='phoneNumber'
					validateTrigger={["onBlur", "onSubmit"]}
					rules={[
						{
							min: 6,
							message: "Limit dzienny musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Limit dzienny może mieć maksymalnie 25 znaków!",
						},
						{
							required: true,
							message: "Proszę wprowadzić limit dzienny!",
						},
					]}
					required={false}
					className='formItem'>
					<Input
						placeholder={dailyLimit}
						onChange={(event) => {
							dispatch({
								type: CHANGE_DAILY_LIMIT,
								newDailyLimit: event.target.value,
							});
						}}
					/>
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Limit pojedynczej transakcji'
					name='email'
					validateTrigger={["onBlur", "onSubmit"]}
					rules={[
						{
							min: 6,
							message:
								"Limit pojedynczej transakcji musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message:
								"Limit pojedynczej transakcji może mieć maksymalnie 25 znaków!",
						},
						{
							required: true,
							message: "Proszę wprowadzić limit pojedynczej transakcji!",
						},
					]}
					required={false}
					className='formItem'>
					<Input
						placeholder={singleTransactionLimit}
						onChange={(event) => {
							dispatch({
								type: CHANGE_SINGLE_TRANSACTION_LIMIT,
								newSingleTransactionLimit: event.target.value,
							});
						}}
					/>
				</Form.Item>
			</Form>
			<Button
				type='primary'
				htmlType='submit'
				className='registerButton'
				style={{
					marginTop: "50px",
				}}
				onClick={async () => {
					if (
						startData.email !== email ||
						startData.dailyLimit !== dailyLimit ||
						startData.singleTransactionLimit !== singleTransactionLimit ||
						startData.phoneNumber !== phoneNumber
					) {
						let endpoint = `http://localhost:2137/user/${email}`;
						let response = await fetch(endpoint);
						if (response.status === 404) {
							endpoint = "http://localhost:2137/update-account";
							response = await fetch(endpoint, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									accountId: accountId,
									phoneNumber: phoneNumber,
									email: email,
									dailyLimit: dailyLimit,
									singleTransactionLimit: singleTransactionLimit,
								}),
							});
							response.status === 200
								? (alert("Zedytowano dane!"),
								  dispatch({ type: CHANGE_SITE, newSite: "my-account" }))
								: alert("Wystąpił problem!");
						} else alert("Wprowadź prawidłowe dane!");
					} else alert("Wprowadź prawidłowe dane!");
				}}>
				Zatwierdź
			</Button>
		</div>
	);
}
