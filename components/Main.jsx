import React from 'react'
import Clock from './Clock'
import Score from './Score'
import Fouls from './Fouls'
import Quarter from './Quarter'
import ShotClock from './ShotClock'

import { Container, Row, Col } from 'react-bootstrap'

const Main = () => {
  return (
    <Container id="main">
      <Row id="firstRow">
        <Col id="teamAndClock">
          <Clock />
        </Col>
      </Row>
      <Row id="textRow">
        <Col xs={4} id="firstCol">
          <span className="input" role="textbox" contentEditable>Local</span>
        </Col>
        <Col xs={4} id="secondCol">
          <span className="quarter-text">Periodo</span>
        </Col>
        <Col xs={4} id="thirdCol">
        <span className="input" role="textbox" contentEditable>Visitante</span>
        </Col>
      </Row>
      <Row id="secondRow">
        <Col xs={4} className="home">
          <Score />
        </Col>
        <Col xs={4} className="quarter">
          <Quarter />
        </Col>
        <Col xs={4} className="guest">
          <Score />
        </Col>
      </Row>
      <Row id="thirdRow">
        <Col xs={4} className="fouls-home">
          <span className="fouls-text">Faltas</span>
          <Fouls />
        </Col>
        <Col xs={4} className="shot-clock">
          <ShotClock />
        </Col>
        <Col xs={4} className="fouls-guest">
          <span className="fouls-text">Faltas</span>
          <Fouls />
        </Col>
      </Row>
    </Container>
  )
}

export default Main
