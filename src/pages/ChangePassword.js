import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

export default class ChangePassword extends Component {
  render() {
    return (
      <Row style={{ height: '100%' }} type='flex' align="middle" justify="center">
        <Col>
          <Row>
            <Col>
              <Row>
                Old password:
                <Input placeholder="Old password" />
              </Row>
              <Row>
                New password:
                <Input placeholder="New password" />
              </Row>
              <Row>
                Confirm New password:
                <Input placeholder="Confirm New password" />
              </Row>
            </Col>
          </Row>
          <Row type="flex" justify="center" style={{ marginTop: '10px' }}>
            <Button>Change password</Button>
          </Row>
        </Col>
      </Row>
    )
  }
}
