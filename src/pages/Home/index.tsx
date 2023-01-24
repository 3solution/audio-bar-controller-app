import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

import Controller from '../../components/_ui/Controller';

import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Canvas
        camera={{ fov: 25, far: 20000, position: [0, 10, 30] }}
        className={styles.canvas}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} color={0xffffff} />
          <hemisphereLight intensity={0.1} color={0xffffff} />
          <directionalLight
            color={0xffffff}
            intensity={0.9}
            castShadow={true}
            position={[0, 100, 0]}
          />
        </Suspense>
      </Canvas>
      <Controller></Controller>
    </div>
  );
};

export default Home;
