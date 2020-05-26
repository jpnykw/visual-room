import { Mesh } from 'three'
import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame, extend, useThree } from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'

import AdditiveBlendingShader from '../shaders/AdditiveBlendingShader'
import VolumetricLightShader from '../shaders/VolumetricLightShader'

extend({ EffectComposer, RenderPass, ShaderPass })

const DEFAULT_LAYER: any = 0
const OCCLUSION_LAYER: any = 1

const Box: React.FC = () => {
  // const ref = useRef({} as Mesh)
  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  // post-processing 用の設定
  const { gl, scene, camera, size } = useThree()
  const occlusionComposer = useRef()
  const composer = useRef()
  const light = useRef()

  /*
  // Object is possibly 'undefined' の解決方法を探る
  useEffect(() => {
    occlusionComposer?.current?.setSize(size?.width, size?.height)
    composer.current.setSize(size.width, size.height)
  }, [size])

  useFrame(() => {
    light.current.rotation.z += 0.005
    camera.layers.set(OCCLUSION_LAYER)
    occlusionComposer.current.render()
    camera.layers.set(DEFAULT_LAYER)
    composer.current.render()
  }, 1)
  */

  return (
    <>
      {/*
      <mesh ref={ref}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color='#b82f1a' />
      </mesh>
      */}

      <mesh ref={light} layers={OCCLUSION_LAYER}>
        <boxBufferGeometry attach="geometry" args={[0.5, 20, 1]} />
        <meshBasicMaterial attach="material" color="lightblue" />
      </mesh>

      <effectComposer ref={occlusionComposer} args={[gl]} renderToScreen={false}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass attachArray="passes" args={[VolumetricLightShader]} needsSwap={false} />
      </effectComposer>

       <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass attachArray="passes" args={[AdditiveBlendingShader]} />
        <shaderPass attachArray="passes" args={[FXAAShader]} uniforms-resolution-value={[1 / size.width, 1 / size.height]} renderToScreen />
      </effectComposer>
    </>
  )
}

export default Box

