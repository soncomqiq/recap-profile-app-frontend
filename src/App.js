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
      <Content style={{ height: '90vh' }}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/changepassword" component={ChangePassword} />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
