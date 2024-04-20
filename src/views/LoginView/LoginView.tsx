import { Layout } from 'antd';
import HeaderView from '../../utils/Header/Header';
import FooterView from '../../utils/Footer/Footer';
import "./styles/LoginViewStyles.css";

const { Content } = Layout;

export default function LoginView() {
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
