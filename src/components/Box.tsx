import React, { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from 'react-three-fiber'

const Box: React.FC = () => {
  const ref = useRef({} as Mesh)
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))

  return (
   <mesh
      ref={ref}
      position={[0, 0, 0]}
      scale={[1.3, 1.3, 1.3]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color='#b82f1a' />
    </mesh>
  )
}

export default Box;

