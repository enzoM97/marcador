import React from 'react'
import SevenSegmentDisplay from './SevenSegmentDisplay'

const Score = () => {
  return (
    <div className="score">
      <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={0} />
      <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={0} />
      <SevenSegmentDisplay ledBorder={'transparent'} ledColorOn={'red'} ledColorOff={'black'} character={0} />
    </div>
  )
}

export default Score
