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
          <span className="input" role="textbox" contentEditable>Equipo</span>
          <Clock />
        </Col>
      </Row>
      <Row id="secondRow">
        <Col xs={4} className="home">
          <span className="input" role="textbox" contentEditable>Local</span>
          <Score />
        </Col>
        <Col xs={4} className="quarter">
          <span className="quarter">Periodo</span>
          <Quarter />
        </Col>
        <Col xs={4} className="guest">
          <span className="input" role="textbox" contentEditable>Visitante</span>
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
