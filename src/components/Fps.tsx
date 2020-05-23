// フレームレート表示
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

interface FpsProps {
  fps: number
}

const Fps: React.FC<FpsProps> = (props) => {
  return (
    <Label>
      {props.fps} FPS
    </Label>
  )
}

const Label = styled.div`
  font-size: 27px;
  margin-left: 10px;
`

export default Fps

