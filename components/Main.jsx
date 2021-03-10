import React from 'react'
import Clock from './Clock'

import { Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <div id="main">
      <Container fluid>
        <Row>
          <Col id="clock">
            <span className="input" role="textbox" contentEditable>Equipo</span>
            <Clock />
          </Col>
        </Row>
        <Row>
          <Col>Local</Col>
          <Col>Visitante</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
