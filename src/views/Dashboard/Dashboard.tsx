import { Layout } from "antd";
import HeaderView from "../../utils/Header/Header";
import FooterView from "../../utils/Footer/Footer";
import "./styles/DashboardStyles.css";
import { useSelector } from "react-redux";
import { State } from "../../utils/State";
import BudgetView from "../../utils/BudgetView/BudgetView";
import { accountsData } from "./MyAccountView/AccountsData";
import { depositsData } from "./SavingsView/DepositsData";
import HistoryView from "./HistoryView/HistoryView";
import SettingsView from "./SettingsView/SettingsView";

const { Content } = Layout;

export default function Dashboard() {
	const { site } = useSelector((state: State) => state);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'>
						{site === "my-account" ? (
							<BudgetView tiles={accountsData} />
						) : site === "history" ? (
							<HistoryView />
						) : site === "savings" ? (
							<BudgetView tiles={depositsData} />
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
