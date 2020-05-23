import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'

import '../assets/style/main.css'
import Box from './components/Box'

import Top from './pages/Top'
import Player from './pages/Player'

const App: React.FC<{}> = () => {
  return (
    <Container>
      <Top />

      <Canvas id={"canvas"}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

ReactDOM.render(<App />, document.querySelector('#app'));

