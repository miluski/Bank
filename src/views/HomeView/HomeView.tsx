import { Layout } from "antd";
import HeaderView from "../../utils/Header";
import FooterView from "../../utils/Footer";
import AccountsOfferView from "./AccountsOfferView";
import { useSelector } from "react-redux";
import { State } from "../../utils/State";
import "./styles/HomeViewStyles.css";
import "./styles/AccountsOfferView.css";

const { Content } = Layout;

export default function HomeView() {
	const { site } = useSelector((state: State) => state);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'>
						{site === "accounts" ? <AccountsOfferView /> : <></>}
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
