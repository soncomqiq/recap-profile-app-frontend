import React, { Component } from 'react'
import { Row, Col, Button, Input } from 'antd'

export default class Signup extends Component {
  render() {
    return (
      <Row type='flex' justify="center">
        <Col xs={24} sm={22} md={18} lg={14}>
          <Row type='flex' justify="center">
            <img src="logoinw.png" />
          </Row>
          <Row>
            <Col>
              Email:
            <Input placeholder="Email" />
            </Col>
            <Col>
              Password:
            <Input placeholder="Password" />
            </Col>
            <Col>
              Confirm Password:
            <Input placeholder="Confirm Password" />
            </Col>
            <Col>
              Name:
            <Input placeholder="Name" />
            </Col>
          </Row>
          <Row style={{ marginTop: '10px' }} type='flex' justify="center">
            <Button>Signup</Button>
          </Row>
        </Col>
      </Row>
    )
  }
}
