import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Canvas, useFrame } from 'react-three-fiber'

const App: React.FC<{}> = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>,
  )
};

ReactDOM.render(<App />, document.querySelector('#app'));
