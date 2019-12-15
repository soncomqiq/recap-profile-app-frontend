import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

export default class Login extends Component {
  render() {
    return (
      <Row type='flex' justify='center' align='middle' style={{ height: '100%' }}>
        <Col style={{ width: 'min-content' }}>
          <img src="logoinw.png" />
        </Col>
        <Col style={{ width: 'max-content' }}>
          <Row>
            Username:
            <Input placeholder="Username" />
          </Row>
          <Row>
            Password:
            <Input placeholder="Password" />
          </Row>
          <Row style={{ marginTop: '5px' }}>
            <Col span={12}  >
              <Row type="flex" justify="center">
                <Button type="link">Sign Up</Button>
              </Row>
            </Col>
            <Col span={12}>
              <Row type="flex" justify="center">
                <Button type="primary">Login</Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
