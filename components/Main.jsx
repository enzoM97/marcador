import React from 'react'
import Clock from './Clock'
import Score from './Score'
import Fouls from './Fouls'
import Quarter from './Quarter'
import ShotClock from './ShotClock'

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
            <Score />
          </Col>
          <Col className="quarter">
            <span className="quarter">Periodo</span>
            <Quarter />
          </Col>
          <Col className="guest">
            <span className="input" role="textbox" contentEditable>Visitante</span>
            <Score />
          </Col>
        </Row>
        <Row id="thirdRow">
          <Col className="fouls-home">
            <span className="fouls-text">Faltas</span>
            <Fouls />
          </Col>
          <Col className="shot-clock">
            <ShotClock />
          </Col>
          <Col className="fouls-guest">
            <span className="fouls-text">Faltas</span>
            <Fouls />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
