import './App.less';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import LayoutComponent from './components/Layout'
import CreateUser from './features/Admin/CreateUser'
import LoadingComponent from './components/LoadingComponent'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <LayoutComponent>
      <CreateUser/>
      <LoadingComponent/>
    </LayoutComponent>
  );
}

export default App;
