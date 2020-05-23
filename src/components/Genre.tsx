// ジャンル選択部分（画面中央配置）の実装
import React from 'react'
import ReactDOM from 'react-dom'

import {
  Container
} from '@material-ui/core';

interface GenreProps {
  id: number
}

const Genre: React.FC<GenreProps> = (props) => {
  const label: string[] = ['cool'];

  return (
    <Container>
      {/* 左右に伸びるグラフィック */}
      <h2>{label[props.id]}</h2>
      {/* ジャンルに合わせたアイコンの表示 */}

      <h4>press right or left key to switch</h4>
    </Container>
  )
}

export default Genre

