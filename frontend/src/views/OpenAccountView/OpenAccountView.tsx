import { Layout } from "antd";
import HeaderView from "../../utils/Header/Header";
import FooterView from "../../utils/Footer/Footer";
import "./styles/OpenAccountViewStyles.css";
import LetsStartView from "./LetsStartView";
import { useDispatch, useSelector } from "react-redux";
import { SiteState } from "../../utils/types/State";
import IdentificDataView from "./IdentificDataView";
import ChooseAccountTypeView from "./ChooseAccountTypeView";
import { useEffect } from "react";
import { CHANGE_CURRENT_REGISTER_PAGE } from "../../utils/types/ActionTypes";

const { Content } = Layout;

export default function OpenAccountView() {
	const { currentRegisterPage } = useSelector((state: SiteState) => state.siteReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({
			type: CHANGE_CURRENT_REGISTER_PAGE,
			newCurrentRegisterPage: "start",
		});
	}, []);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadRegisterContentDiv'>
					<div className='registerContentDiv'>
						<div className='registerFormDiv'>
							{currentRegisterPage === "start" && <LetsStartView />}
							{currentRegisterPage === "identific" && <IdentificDataView />}
							{currentRegisterPage === "chooseAccountType" && (
								<ChooseAccountTypeView />
							)}
						</div>
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
