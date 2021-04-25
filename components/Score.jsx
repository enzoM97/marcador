import React from 'react'
import SevenSegmentDisplay from './SevenSegmentDisplay'

const Score = () => {
  const ledSize = {
    width: '45px',
    height: '70px',
    marginTop: '-20px'
  }
  return (
    <div className="score">
      <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={0} />
      <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={0} />
      <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={0} />
    </div>
  )
}

export default Score
