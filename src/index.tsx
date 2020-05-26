import * as THREE from 'three'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, extend } from 'react-three-fiber'

import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
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

// 仮のObject
const TestObject = (layer: any = 1) => {
  const ref = useRef()
  // 本来はレイヤーを受け取る部分をマジックナンバーとする
  const color = useMemo(() => (layer == 1 ? '#873740' : '#070707'), [layer])

  return (
    <mesh ref={ref} position={[0, 0, 2]} layers={layer} receiveShadow castShadow>
      <torusKnotBufferGeometry attach="geometry" args={[0.5, 0.15, 150, 32]} />
      <meshPhysicalMaterial attach="material" color={color} roughness={1} clearcoat={1} clearcoatRoughness={0.2} />
    </mesh>
  )
}

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
          <pointLight />
          <spotLight castShadow intensity={4} angle={Math.PI / 10} position={[10, 10, 10]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} />

          {/* 先にシーンに描画する */}
          <TestObject />

          {/* Boxをエフェクトの代わりに使用 */}
          <Box />
        </Canvas>

        {/*
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
        */}

        <Fps fps={fps} />

        {/*
        <Switch>
          <Route exact path="/" component={Top}></Route>
          <Route path="/player" component={Player}></Route>
        </Switch>
        */}

        <Route exact path="/">
          <CSSTransition
            in={true}
            timeout={300}
            classNames=""
            unmountOnExit
          >
            <Top />
          </CSSTransition>
        </Route>

        <Route path="/player">
          <CSSTransition
            in={true}
            timeout={300}
            classNames=""
            unmountOnExit
          >
            <Player />
          </CSSTransition>
        </Route>
      </Container>
    </Router>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

ReactDOM.render(<App />, document.querySelector('#app'))

