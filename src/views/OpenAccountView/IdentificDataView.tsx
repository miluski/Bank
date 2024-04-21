import { Button, Form, Input, Select } from "antd";
import { CHANGE_CURRENT_REGISTER_PAGE } from "../../utils/ActionTypes";
import { useDispatch } from "react-redux";

export default function IdentificDataView() {
	const dispatch = useDispatch();
	return (
		<>
			<text className='loginText'>Dane identyfikacyjne</text>
			<Form layout='horizontal' autoComplete='off'>
				<Form.Item
					hasFeedback
					label='Rodzaj dokumentu'
					name='documentType'
					validateTrigger='onBlur'
					required={false}
					className='formItem'>
					<Select
						options={[
							{ value: "idCard", label: "Dowód osobisty" },
							{ value: "passport", label: "Paszport" },
						]}
            placeholder="Rodzaj dokumentu"
					/>
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Seria i numer dokumentu'
					name='documentSerieAndNumber'
					validateTrigger='onBlur'
					rules={[
						{
							min: 6,
							message: "Seria i numer dokumentu musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Seria i numer dokumentu może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić serię i numer dokumentu!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
				<Form.Item
					hasFeedback
					label='PESEL'
					name='pesel'
					validateTrigger='onBlur'
					rules={[
						{
							min: 11,
							message: "PESEL musi mieć co najmniej 11 znaków!",
						},
						{
							max: 11,
							message: "PESEL może mieć maksymalnie 11 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić pesel!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Data urodzenia'
					name='birthDate'
					validateTrigger='onBlur'
					rules={[
						{
							min: 6,
							message: "Data urodzenia musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Data urodzenia może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić datę urodzenia!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
        <Form.Item
					hasFeedback
					label='Nazwisko panieńskie matki'
					name='motherSurname'
					validateTrigger='onBlur'
					rules={[
						{
							min: 6,
							message: "Nazwisko panieńskie matki musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Nazwisko panieńskie matki może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić nazwisko panieńskie matki!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
			</Form>
      <hr className='myLine' />
      <text className='loginText'>Miejsce zamieszkania</text>
			<Form layout='horizontal' autoComplete='off'>
				<Form.Item
					hasFeedback
					label='Kraj'
					name='country'
					validateTrigger='onBlur'
					required={false}
					className='formItem'
          rules={[
						{
							min: 6,
							message: "Kraj musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Kraj może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić kraj!" },
					]}>
					<Input />
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Kod pocztowy'
					name='postCode'
					validateTrigger='onBlur'
					rules={[
						{
							min: 6,
							message: "Kod pocztowy musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Kod pocztowy może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić kod pocztowy!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Miejscowość'
					name='city'
					validateTrigger='onBlur'
					rules={[
						{
							min: 5,
							message: "Miejscowość musi mieć co najmniej 5 znaków!",
						},
						{
							max: 50,
							message: "Miejscowość może mieć maksymalnie 50 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić miejscowość!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
				<Form.Item
					hasFeedback
					label='Ulica'
					name='street'
					validateTrigger='onBlur'
					rules={[
						{
							min: 6,
							message: "Ulica musi mieć co najmniej 6 znaków!",
						},
						{
							max: 25,
							message: "Ulica może mieć maksymalnie 25 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić ulicę!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
        <Form.Item
					hasFeedback
					label='Numer domu'
					name='houseNumber'
					validateTrigger='onBlur'
					rules={[
						{
							min: 1,
							message: "Numer domu musi mieć co najmniej 1 znak!",
						},
						{
							max: 5,
							message: "Numer domu może mieć maksymalnie 5 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić numer domu!" },
					]}
					required={false}
					className='formItem'>
					<Input />
				</Form.Item>
        <Form.Item
					hasFeedback
					label='Numer mieszkania'
					name='apartmentNumber'
					validateTrigger='onBlur'
					rules={[
						{
							min: 1,
							message: "Numer mieszkania musi mieć co najmniej 1 znak!",
						},
						{
							max: 5,
							message: "Numer mieszkania może mieć maksymalnie 5 znaków!",
						},
						{ required: true, message: "Proszę wprowadzić numer mieszkania!" },
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
						newCurrentRegisterPage: "chooseAccountType",
					});
				}}>
				Dalej
			</Button>
		</>
	);
}
