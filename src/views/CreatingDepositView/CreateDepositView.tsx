import { Button, Form, Layout, Select } from "antd";
import { Content } from "antd/es/layout/layout";
import FooterView from "../../utils/Footer/Footer";
import HeaderView from "../../utils/Header/Header";
import { depositOfferTiles } from "../HomeView/DepositOfferView/DepositOfferTiles";
import { Tile } from "../../utils/OfferView/Tile";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_SELECTED_ACCOUNT_TYPE } from "../../utils/ActionTypes";
import { State } from "../../utils/State";
import "./styles/CreateDepositViewStyles.css";

const { Option } = Select;

export default function CreateDepositView() {
	const dispatch = useDispatch();
	const { selectedAccountTypeIndex } = useSelector((state: State) => state);
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'>
						<div className='sendingTransferDiv'>
							<text className='transferText'>Zakładanie lokaty</text>
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
							</Form>
							<text className='depositType'>Typ lokaty</text>
							<div className='mainChooseTilesDiv'>
								{depositOfferTiles.map((tile: Tile, index: number) => (
									<div
										className='singleChooseTile'
										key={index}
										style={{
											backgroundColor:
												index === selectedAccountTypeIndex
													? "#FFC920"
													: "#F98B07",
										}}
										onClick={() => {
											dispatch({
												type: CHANGE_SELECTED_ACCOUNT_TYPE,
												newSelectedAccountTypeIndex: index,
											});
										}}>
										<text className='title'>{tile.title}</text>
										<text className='percent'>{tile.percent} %</text>
										<text className='description'>{tile.description}</text>
									</div>
								))}
							</div>
							<Button type='primary' className='loginHeaderButton'>
								Załóż lokatę
							</Button>
						</div>
					</div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
