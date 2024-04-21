import { Button, Form, Input } from "antd";
import "./styles/SettingsViewStyles.css";

export default function SettingsView() {
	return (
		<div className='mainDiv'>
			<text className='changeAccountSettingsText'>Zmiana ustawień konta</text>
			<hr className='line' />
			<text className='informationText'>Dane kontaktowe</text>
			<hr className='line' />
			<Form layout='horizontal' autoComplete='off'>
				<Form.Item
					hasFeedback
					label='Telefon kontaktowy'
					name='phoneNumber'
					validateTrigger='onBlur'
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
					<Input placeholder='111 222 333' />
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
					<Input placeholder='example@gmail.com' />
				</Form.Item>
			</Form>
			<hr className='line' />
			<text className='informationText'>Limity transakcji</text>
			<hr className='line' />
			<Form layout='horizontal' autoComplete='off'>
				<Form.Item
					hasFeedback
					label='Limit dzienny'
					name='phoneNumber'
					validateTrigger='onBlur'
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
					<Input placeholder='10 000 PLN' />
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Limit pojedynczej transakcji'
					name='email'
					validateTrigger='onBlur'
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
					<Input placeholder='3 000 PLN' />
				</Form.Item>
			</Form>
			<Button type='primary' className='registerButton'>
				Zatwierdź
			</Button>
		</div>
	);
}
