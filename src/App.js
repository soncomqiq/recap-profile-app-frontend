import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Route route="/" component={Login} />
        <Route route="/signup" component={Signup} />
        <Route route="/profile" component={Profile} />
        <Route route="/changepassword" component={ChangePassword} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
