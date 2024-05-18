import { ConfigProvider, Table } from "antd";
import { useSelector } from "react-redux";
import { UserState } from "../../../utils/types/State";

const columns = [
	{
		title: "Data transakcji",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "Rodzaj transakcji",
		dataIndex: "type",
		key: "type",
	},
	{
		title: "Tytuł transakcji",
		dataIndex: "title",
		key: "title",
	},
	{
		title: "Kwota transakcji",
		dataIndex: "amount",
		key: "amount",
		render: (text: string, record: any) => (
			<div style={{ color: record.type === "Wpływy" ? "green" : "red" }}>
				{record.type === "Wpływy" ? "+" : "-"}
				{text}
			</div>
		),
	},
];

export default function HistoryView() {
	const { transactionsArray } = useSelector((state: UserState) => state.user);
	return (
		<ConfigProvider
			theme={{
				components: {
					Table: {
						headerBg: "#FAF6F2",
						colorBgBase: "#FAF6F2",
						rowHoverBg: "white",
						colorBgContainer: "#FAF6F2",
					},
				},
			}}>
			<Table
				columns={columns}
				dataSource={transactionsArray}
				bordered={true}
				className='table'
			/>
		</ConfigProvider>
	);
}
