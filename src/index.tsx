import React from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'

import Box from './components/Box'

const App: React.FC<{}> = () => {
  return (
    <Container>
      <Canvas>
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

