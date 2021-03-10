import React from 'react'
import Clock from './Clock'

import { Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <div id="main">
      <Container fluid>
        <Row id="firstRow">
          <Col id="teamAndClock">
            <span className="input" role="textbox" contentEditable>Equipo</span>
            <Clock />
          </Col>
        </Row>
        <Row id="secondRow">
          <Col className="home">
            <span className="input" role="textbox" contentEditable>Local</span>
          </Col>
          <Col className="guest">
            <span className="input" role="textbox" contentEditable>Visitante</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
