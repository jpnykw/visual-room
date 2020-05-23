// ジャンル選択部分（画面中央配置）の実装
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

import {
  Container
} from '@material-ui/core';

interface GenreProps {
  label: string
}

const Genre: React.FC<GenreProps> = (props) => {
  return (
    <Content>
      {/* 左右に伸びるグラフィック */}
      <Type>{props.label}</Type>
      {/* ジャンルに合わせたアイコンの表示 */}
      <FontAwesomeIcon icon={faFire} />

      <Navi>press right or left key to switch</Navi>
    </Content>
  )
}

const Content = styled(Container)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Type = styled.div`
  font-size: 60px;
`

const Navi = styled.div`
  color: rgba(255, 255, 255, 0.37);
  letter-spacing: 3px;
  font-size: 16px;
  margin-top: 30px;
`

export default Genre

