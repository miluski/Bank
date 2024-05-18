import { ConfigProvider, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SITE } from "../types/ActionTypes";
import "./styles/TabsStyles.css";
import { useLocation, useNavigate } from "react-router";
import { SiteState } from "../types/State";

const globalTabItems = [
	{
		label: "Konta",
		key: "accounts",
	},
	{
		label: "Lokaty",
		key: "deposits",
	},
	{
		label: "",
		key: "empty",
	},
];

const dashboardTabItems = [
	{
		label: "Moje konto",
		key: "my-account",
	},
	{
		label: "Historia",
		key: "history",
	},
	{
		label: "Oszczędności",
		key: "savings",
	},
	{
		label: "Ustawienia",
		key: "settings",
	},
];

export default function GlobalTabs() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { site } = useSelector((state: SiteState) => state.siteReducer);
	const path = location.pathname;
	const tabItems =
		path === "/dashboard" ||
		path === "/send-transfer" ||
		path === "/create-deposit"
			? dashboardTabItems
			: globalTabItems;

	let defaultActiveKey =
		path !== "/login" && path !== "/open-account" ? site : "empty";
	defaultActiveKey =
		defaultActiveKey === "singleAccountOffer"
			? "accounts"
			: defaultActiveKey === "singleDepositOffer"
			? "deposits"
			: defaultActiveKey;
	return (
		<ConfigProvider
			theme={{
				components: {
					Tabs: {
						inkBarColor: "#FF8400",
						itemSelectedColor: "black",
						itemHoverColor: "black",
						fontSize: 20,
						fontFamily: "Roboto Slab",
					},
				},
			}}>
			<Tabs
				className='tabs'
				activeKey={defaultActiveKey}
				items={tabItems}
				onChange={(actualKey: string) => {
					dispatch({ type: CHANGE_SITE, newSite: actualKey });
					path === "/dashboard"
						? null
						: path === "/send-transfer" || path === "/create-deposit"
						? navigate("/dashboard")
						: navigate("/");
				}}
			/>
		</ConfigProvider>
	);
}
