import React from 'react'
import { Form ,Row,Col, Button } from 'react-bootstrap'

function inForm() {
    return (
        <div>
     <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
        </div>
    )
}

export default inForm
