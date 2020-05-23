// トップページの実装
import React from 'react'
import ReactDOM from 'react-dom'

import Fps from '../components/Fps'
import Genre from '../components/Genre'

const Top: React.FC = () => {
  return (
    <div>
      <Fps fps={60} />
      <Genre id={0} />
    </div>
  )
}

export default Top

