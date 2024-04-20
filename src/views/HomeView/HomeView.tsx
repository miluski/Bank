import { Layout } from "antd";
import "./HomeViewStyles.css";
import { useSelector } from "react-redux";
import { State } from "../../utils/State";
import HeaderView from "../../utils/Header/Header";
import FooterView from "../../utils/Footer/Footer";
import AccountOfferView from "./AccountOfferView/AccountOfferView";
import DepositOfferView from "./DepositOfferView/DepositOfferView";
import SingleAccountOfferView from "../../utils/OfferView/SingleAccountOfferView";
import SingleDepositOfferView from "../../utils/OfferView/SingleDepositOfferView";

const { Content } = Layout;

export default function HomeView() {
	const { site } = useSelector((state: State) => state);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'>
						{site === "accounts" ? (
							<AccountOfferView />
						) : site === "deposits" ? (
							<DepositOfferView />
						) : site === "singleAccountOffer" ? (
							<SingleAccountOfferView />
						) : site === "singleDepositOffer" ? (
							<SingleDepositOfferView />
						) : null}
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
