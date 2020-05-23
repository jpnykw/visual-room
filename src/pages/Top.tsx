// トップページの実装
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Genre from '../components/Genre'

const Top: React.FC = () => {
  return (
    <div>
      <Genre id={0} />
      <Connect>connect</Connect>
    </div>
  )
}

const Connect = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
`;

export default Top

