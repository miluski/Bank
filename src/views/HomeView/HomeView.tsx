import { Layout } from 'antd';
import HeaderView from '../../utils/Header';
import FooterView from '../../utils/Footer';

const { Content } = Layout;

export default function HomeView() {
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
