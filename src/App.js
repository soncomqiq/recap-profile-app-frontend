import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import NavbarMenu from './components/NavbarMenu';

const { Header, Content } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMenu: localStorage.getItem('currentMenu')
    }
  }

  handdleMenu = () => {
    this.setState({ currentMenu: localStorage.getItem('currentMenu') })
  }

  render() {
    return (
      <Layout>
        <Header style={{ height: 'max-content' }}>
          <NavbarMenu handdleMenu={this.handdleMenu} menuKey={this.state.currentMenu} />
        </Header>
        <Content style={{ height: '90vh' }}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/changepassword" component={ChangePassword} />
          </Switch>
        </Content>
      </Layout >
    );
  }
}