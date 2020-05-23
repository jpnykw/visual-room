// フレームレート表示
import React from 'react'
import ReactDOM from 'react-dom'

interface FpsProps {
  fps: number
}

const Fps: React.FC<FpsProps> = (props) => {
  return (
    <div>
      <h4>{props.fps} FPS</h4>
    </div>
  )
}

export default Fps

