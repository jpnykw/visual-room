// フレームレート表示
import React from 'react'
import ReactDOM from 'react-dom'

interface FpsProps {
  fps: number
}

const Fps: React.FC<FpsProps> = (props) => {
  return (
    <h4>{props.fps} FPS</h4>
  )
}

export default Fps

