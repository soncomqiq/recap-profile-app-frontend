import React, { Component } from 'react'
import { Menu, Icon } from 'antd';

export default class NavbarMenu extends Component {
  handleClick = (e) => {
    localStorage.setItem('currentMenu', e.key)
  }

  render() {
    return (
      <Menu
        selectedKeys={[localStorage.getItem('currentMenu')]}
        mode="horizontal"
        theme="dark"
        onClick={this.handleClick}
      >
        <Menu.Item key="login">
          <a href="/">
            <Icon type="pie-chart" />
            <span>Login</span>
          </a>
        </Menu.Item>
        <Menu.Item key="signup">
          <a href="/signup">
            <Icon type="desktop" />
            <span>Signup</span>
          </a>
        </Menu.Item>
        <Menu.Item key="password">
          <a href="/changepassword">
            <Icon type="inbox" />
            <span>Change Password</span>
          </a>
        </Menu.Item>
        <Menu.Item key="profile">
          <a href="/profile">
            <Icon type="inbox" />
            <span>Profile</span>
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}
