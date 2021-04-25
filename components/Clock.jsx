import React from 'react'
import SevenSegmentDisplay from './SevenSegmentDisplay'
import { Row, Col } from 'react-bootstrap'

const Clock = () => {
  const ledSize = {
    width: '70px',
    height: '100px'
  }
  return (
    <Row>
      <Col xs={9} sm={6} md={4} id="clock">
          <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={1} />
          <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
          <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={':'} />
          <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
          <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
      </Col>
    </Row>
  )
}

export default Clock
