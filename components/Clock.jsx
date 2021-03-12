import React from 'react'

import { Row, Col } from 'react-bootstrap'

const Clock = () => {
  return (
    <Row>
      <Col xs={8} sm={6} md={4} id="clock">
        <span className="min">10</span>
        <span className="colon">:</span>
        <span className="sec">00</span>
      </Col>
    </Row>
  )
}

export default Clock
