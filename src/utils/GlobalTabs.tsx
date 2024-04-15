import { ConfigProvider, Tabs } from "antd";
import { useDispatch } from "react-redux";
import { CHANGE_SITE } from "./ActionTypes";
import "./styles/TabsStyles.css";
import { useLocation } from "react-router";

const globalTabItems = [
	{
		label: "Konta",
		key: "accounts",
	},
	{
		label: "Lokaty",
		key: "loans",
	},
	{
		label: "",
		key: "empty",
	},
];

const dashboardTabItems = [
	{
		label: "Moje konto",
		key: "my-account"
	},
	{
		label: "Historia",
		key: "history"
	},
	{
		label: "Oszczędności",
		key: "savings"
	},
	{
		label: "Ustawienia",
		key: "settings"
	}
]

export default function GlobalTabs() {
	const dispatch = useDispatch();
	const location = useLocation();
	const path = location.pathname;
	const tabItems = path === "/dashboard" ? dashboardTabItems : globalTabItems;
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
				defaultActiveKey='empty'
				items={tabItems}
				onChange={(actualKey: string) => {
					dispatch({ type: CHANGE_SITE, newSite: actualKey });
				}}
			/>
		</ConfigProvider>
	);
}
