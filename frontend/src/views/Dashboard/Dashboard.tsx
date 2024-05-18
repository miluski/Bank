import { Layout } from "antd";
import HeaderView from "../../utils/Header/Header";
import FooterView from "../../utils/Footer/Footer";
import "./styles/DashboardStyles.css";
import { useSelector } from "react-redux";
import { SiteState, UserState } from "../../utils/types/State";
import BudgetView from "../../utils/BudgetView/BudgetView";
import HistoryView from "./HistoryView/HistoryView";
import SettingsView from "./SettingsView/SettingsView";

const { Content } = Layout;

export default function Dashboard() {
	const { site } = useSelector((state: SiteState) => state.siteReducer);
	const { accountsArray, depositsArray } = useSelector(
		(state: UserState) => state.user
	);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'>
						{site === "my-account" ? (
							<BudgetView tiles={accountsArray} />
						) : site === "history" ? (
							<HistoryView />
						) : site === "savings" ? (
							<BudgetView tiles={depositsArray} />
						) : site === "settings" ? (
							<SettingsView />
						) : (
							<></>
						)}
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
