import React from 'react'
import SevenSegmentDisplay from './SevenSegmentDisplay'

const Quarter = () => {
  const ledSize = {
    width: '45px',
    height: '70px'
  }
  return (
    <div className="quarter-input">
      <SevenSegmentDisplay style={ledSize} ledBorder={'transparent'} ledColorOn={'green'} ledColorOff={'black'} character={0} />
    </div>
  )
}

export default Quarter
