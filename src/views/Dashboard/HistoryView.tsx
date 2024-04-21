import { ConfigProvider, Table } from "antd";
import { transactionsData } from "./transactionsData";
import "./styles/DashboardStyles.css";

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
				dataSource={transactionsData}
				bordered={true}
				className='table'
			/>
		</ConfigProvider>
	);
}
