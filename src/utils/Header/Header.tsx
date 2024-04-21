import { Button, Layout } from "antd";
import "./styles/HeaderStyles.css";
import GlobalTabs from "../GlobalTabs/GlobalTabs";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SITE } from "../ActionTypes";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { State } from "../State";

const { Header } = Layout;

export default function HeaderView() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;
	const { site } = useSelector((state: State) => state);
	useEffect(() => {
		console.log("rerender");
	}, [site]);
	return (
		<Header className='header'>
			<div className='leftHeaderContent'>
				<text
					className='bankText'
					onClick={() => {
						dispatch({ type: CHANGE_SITE, newSite: "accounts" });
						navigate("/");
					}}>
					Bank
				</text>
				<GlobalTabs />
			</div>
			<div>
				{currentPath !== "/login" && currentPath != "/dashboard" ? (
					<Button
						type='primary'
						className='loginHeaderButton'
						onClick={() => {
							dispatch({ type: CHANGE_SITE, newSite: "login" });
							navigate("/login");
						}}>
						Zaloguj się
					</Button>
				) : (
					<></>
				)}
				{currentPath !== "/open-account" && currentPath != "/dashboard" ? (
					<Button
						type='primary'
						className='registerButton'
						onClick={() => {
							dispatch({ type: CHANGE_SITE, newSite: "open-account" });
							navigate("/open-account");
						}}>
						Otwórz konto
					</Button>
				) : (
					<></>
				)}
				{currentPath === "/dashboard" ? (
					<text className='welcomeText'>Witaj, XYZ!</text>
				) : (
					<></>
				)}
			</div>
		</Header>
	);
}
