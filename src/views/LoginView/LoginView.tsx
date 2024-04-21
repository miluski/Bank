import { Button, Form, Input, Layout } from "antd";
import HeaderView from "../../utils/Header/Header";
import FooterView from "../../utils/Footer/Footer";
import "./styles/LoginViewStyles.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { CHANGE_SITE } from "../../utils/ActionTypes";

const { Content } = Layout;

export default function LoginView() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
									<Input />
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
									<Input />
								</Form.Item>
							</Form>
							<Button
								type='primary'
								className='loginButton'
								onClick={() => {
									dispatch({ type: CHANGE_SITE, newSite: "my-account" });
									navigate("/dashboard");
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
