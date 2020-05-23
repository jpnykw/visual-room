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
      <h2>{label[props.id]}</h2>
      {/* ジャンルに合わせたアイコンの表示 */}

      <h4>press right or left key to switch</h4>
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

export default Genre

