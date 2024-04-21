import { Input, Button, Form } from "antd";
import "./styles/OpenAccountViewStyles.css";
import { useDispatch } from "react-redux";
import { CHANGE_CURRENT_REGISTER_PAGE } from "../../utils/ActionTypes";

export default function LetsStartView() {
	const dispatch = useDispatch();
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
							min: 6,
							message: "Imię musi mieć co najmniej 6 znaków!",
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
					<Input />
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
					<Input />
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
					<Input />
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
					<Input />
				</Form.Item>
			</Form>
			<Button
				type='primary'
				className='nextButton'
				onClick={() => {
					dispatch({
						type: CHANGE_CURRENT_REGISTER_PAGE,
						newCurrentRegisterPage: "identific",
					});
				}}>
				Dalej
			</Button>
		</>
	);
}
