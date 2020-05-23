// ジャンル選択部分（画面中央配置）の実装
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import {
  Container
} from '@material-ui/core';

interface GenreProps {
  id: number
}

const Genre: React.FC<GenreProps> = (props) => {
  const label: string[] = ['Cool', 'Kawaii'];

  return (
    <Content>
      {/* 左右に伸びるグラフィック */}
      <Type>{label[props.id]}</Type>
      {/* ジャンルに合わせたアイコンの表示 */}

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
  font-size: 20px;
`

export default Genre

