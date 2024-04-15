import { Layout } from 'antd';
import HeaderView from '../../utils/Header';
import FooterView from '../../utils/Footer';
import "./styles/OpenAccountViewStyles.css";

const { Content } = Layout;

export default function OpenAccountView() {
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
  )
}