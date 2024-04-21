import { Button, Form, Input, Layout, Radio, Select } from "antd";
import { Content } from "antd/es/layout/layout";
import FooterView from "../../utils/Footer/Footer";
import HeaderView from "../../utils/Header/Header";
import "./styles/SendingTransferViewStyles.css";

const { Option } = Select;

export default function SendingTransferView() {
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
									<Select defaultValue={"account1"}>
										<Option value='account1'>
											Konto 1, 30......1999, 2000 PLN
										</Option>
										<Option value='account2'>
											Konto 2, 31......1999, 30000 PLN
										</Option>
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
									<Input />
								</Form.Item>
								<Form.Item
									hasFeedback
									label='Numer konta odbiorcy'
									name='receiverNumber'
									validateTrigger='onBlur'
									rules={[
										{
											min: 6,
											message:
												"Numer konta odbiorcy musi mieć co najmniej 6 znaków!",
										},
										{
											max: 25,
											message:
												"Numer konta odbiorcy może mieć maksymalnie 25 znaków!",
										},
										{
											required: true,
											message: "Proszę wprowadzić numer konta odbiorcy!",
										},
									]}
									required={false}
									className='sendingFormItem'>
									<Input />
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
									<Input />
								</Form.Item>
								<Form.Item
									hasFeedback
									label='Typ przelewu'
									name='transferType'
									className='sendingFormItem'>
									<Radio.Group defaultValue={1}>
										<Radio value={1}>Zwyczajny</Radio>
										<Radio value={2}>Ekspresowy</Radio>
									</Radio.Group>
								</Form.Item>
							</Form>
							<Button type='primary' className='registerButton'>
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
