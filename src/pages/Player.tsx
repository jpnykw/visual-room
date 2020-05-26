// プレイヤーの実装
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

const Player: React.FC = () => {
  return (
    <>
      <Back>
        <Link to="/">
          <FontAwesomeIcon icon={faUndoAlt} />
        </Link>
      </Back>
    </>
  )
}

const Back = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
`

export default Player

