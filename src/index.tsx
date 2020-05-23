import * as THREE from 'three'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { Canvas, extend } from 'react-three-fiber'

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import '../assets/style/main.css'
import Box from './components/Box'
import Fps from './components/Fps'

import Top from './pages/Top'
import Player from './pages/Player'

// ポストプロセス処理につかいそうなもの
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
extend({ EffectComposer, RenderPass, ShaderPass })

const App: React.FC<{}> = () => {
  const [fps, setFps] = useState(0)

  useEffect(() => {
    const timer = () => {
      count += 1

      const now = new Date().getTime()
      if (now - base >= 1000) {
        setFps(count)
        count = 0
        base = now
      }

      requestAnimationFrame(timer)
    }

    let base = new Date().getTime()
    let count = 0
    timer()
  }, [])

  return (
    <Router>
      <Container>
        <Canvas shadowMap id={'canvas'}>
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

        <Fps fps={fps} />

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

ReactDOM.render(<App />, document.querySelector('#app'))

