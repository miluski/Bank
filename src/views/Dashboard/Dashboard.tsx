import { Layout } from 'antd';
import HeaderView from '../../utils/Header/Header';
import FooterView from '../../utils/Footer/Footer';
import "./styles/DashboardStyles.css";

const { Content } = Layout;

export default function Dashboard() {
	return (
		<Layout>
			<HeaderView />
			<Content>
				<div className='leadContentDiv'>
					<div className='contentDiv'></div>
				</div>
			</Content>
			<FooterView />
		</Layout>
	);
}
