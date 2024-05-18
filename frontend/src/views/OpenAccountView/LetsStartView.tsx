import { Input, Button, Form } from "antd";
import "./styles/OpenAccountViewStyles.css";
import { useDispatch, useSelector } from "react-redux";
import {
	CHANGE_CURRENT_REGISTER_PAGE,
	CHANGE_EMAIL,
	CHANGE_NAME,
	CHANGE_NUMBER_PHONE,
	CHANGE_SURNAME,
	RESET_STATE,
} from "../../utils/types/ActionTypes";
import { UserState } from "../../utils/types/State";
import { useEffect } from "react";

export default function LetsStartView() {
	const dispatch = useDispatch();
	const { name, surname, email, phoneNumber } = useSelector(
		(state: UserState) => state.user
	);
	useEffect(()=>{
		dispatch({ type: RESET_STATE });
	},[]);
	return (
		<>
			<text className='loginText'>Zaczynajmy!</text>
			<Form layout='horizontal' autoComplete='off'>
				<Form.Item
					hasFeedback
					label='Imię'
					name='name'
					validateTrigger='onBlur'
					rules={[
						{
							min: 3,
							message: "Imię musi mieć co najmniej 3 znaki!",
						},
						{
							max: 25,
							message: "Imię może mieć maksymalnie 25 znaków!",
						},
						{
							required: true,
							message: "Proszę wprowadzić imię!",
						},
					]}
					required={false}
					className='formItem'>
					<Input
						onChange={(cochcesz) => {
							dispatch({ type: CHANGE_NAME, newName: cochcesz.target.value });
						}}
					/>
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Nazwisko'
					name='surname'
					validateTrigger='onBlur'
					rules={[
						{
							min: 6,
							message: "Nazwisko musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Nazwisko może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić nazwisko!" },
					]}
					required={false}
					className='formItem'>
					<Input
						onChange={(cochcesz) => {
							dispatch({
								type: CHANGE_SURNAME,
								newSurname: cochcesz.target.value,
							});
						}}
					/>
				</Form.Item>
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
						{ required: true, message: "Proszę wprowadzić adres email!" },
					]}
					required={false}
					className='formItem'>
					<Input
						onChange={(cochcesz) => {
							dispatch({ type: CHANGE_EMAIL, newEmail: cochcesz.target.value });
						}}
					/>
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Numer telefonu'
					name='phoneNumber'
					validateTrigger='onBlur'
					rules={[
						{
							min: 6,
							message: "Numer telefonu musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Numer telefonu może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić numer telefonu!" },
					]}
					required={false}
					className='formItem'>
					<Input
						onChange={(cochcesz) => {
							dispatch({
								type: CHANGE_NUMBER_PHONE,
								newPhoneNumber: cochcesz.target.value,
							});
						}}
					/>
				</Form.Item>
			</Form>
			<Button
				type='primary'
				className='nextButton'
				onClick={async () => {
					const endpoint = `http://localhost:2137/user/${email}`;
					const response = await fetch(endpoint);
					name.length >= 3 &&
					surname.length >= 6 &&
					email.length >= 6 &&
					phoneNumber >= 6 &&
					response.status === 404
						? dispatch({
							type: CHANGE_CURRENT_REGISTER_PAGE,
							newCurrentRegisterPage: "identific",
						  })
						: alert("Nie można utworzyć konta dla wskazanego użytkownika!");
				}}>
				Dalej
			</Button>
		</>
	);
}
