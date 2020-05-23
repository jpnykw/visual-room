import { Mesh } from 'three'
import React, { useRef } from 'react'
import { useFrame, extend, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'

extend({ EffectComposer, RenderPass, ShaderPass })

const Box: React.FC = () => {
  const ref = useRef({} as Mesh)
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  // post-processing 用の設定
  const { gl, scene, camera, size } = useThree()

  return (
    <>
      <mesh ref={ref}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color='#b82f1a' />
      </mesh>
    </>
  )
}

export default Box

