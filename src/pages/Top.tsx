// トップページの実装
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Genre from '../components/Genre'

const Top: React.FC = () => {
  const label: string[] = ['Cool', 'Kawaii'];
  const [id, setId] = useState(0)

  useEffect(() => {
    document.body.addEventListener('keydown', event => {
      // TODO: Hooksを発火させると異常に重くなる原因の調査
    })
  }, [id])

  return (
    <>
      <Genre label={label[id]}/>
      <Connect>connect</Connect>
    </>
  )
}

const Connect = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
`

export default Top

