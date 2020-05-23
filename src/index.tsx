import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Canvas } from 'react-three-fiber'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  Button
} from '@material-ui/core';

import '../assets/style/main.css'
import Box from './components/Box'
import Fps from './components/Fps'

import Top from './pages/Top'
import Player from './pages/Player'

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Container>
        <Canvas id={'canvas'}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>

        <Link to="/">
          <Button>
            Go to top (debug)
          </Button>
        </Link>

        <Link to="/player">
          <Button>
            Go to player (debug)
          </Button>
        </Link>

        <Fps fps={60} />

        <Switch>
          <Route exact path="/" component={Top}></Route>
          <Route path="/player" component={Player}></Route>
        </Switch>
      </Container>
    </Router>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

ReactDOM.render(<App />, document.querySelector('#app'));

