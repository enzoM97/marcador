import React from 'react'
import SevenSegmentDisplay from './SevenSegmentDisplay'

const ShotClock = () => {
  const ledSize = {
    width: '45px',
    height: '70px'
  }
  return (
    <div id="shotClock">
      <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={2} />
      <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={4} />
    </div>
  )
}

export default ShotClock
