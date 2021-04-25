import React from 'react'
import SevenSegmentDisplay from './SevenSegmentDisplay'

const Fouls = () => {
  const ledSize = {
    width: '45px',
    height: '70px',
    marginTop: '-25px'
  }
  return (
    <div className="fouls-input">
      <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
    </div>
  )
}

export default Fouls
