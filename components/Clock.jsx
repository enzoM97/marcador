import React from 'react'
import SevenSegmentDisplay from './SevenSegmentDisplay'
import { Row, Col } from 'react-bootstrap'

const Clock = () => {
  return (
    <Row>
      <Col xs={9} sm={6} md={4} id="clock">
          <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={1} />
          <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
          <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={':'} />
          <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
          <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
      </Col>
    </Row>
  )
}

export default Clock
