import { Mesh } from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame, extend, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'

extend({ EffectComposer, RenderPass, ShaderPass })

const Box: React.FC = () => {
  const ref = useRef({} as Mesh)
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  // post-processing 用の設定
  const { gl, scene, camera, size } = useThree()
  const composer = useRef()

  return (
    <>
      <mesh ref={ref}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color='#b82f1a' />
      </mesh>

      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass attachArray="passes" args={[FXAAShader]} uniforms-resolution-value={[1 / size.width, 1 / size.height]} renderToScreen />
      </effectComposer>
    </>
  )
}

export default Box

