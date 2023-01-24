import { Canvas, extend } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import Controller from '../../components/_ui/Controller';

import styles from './styles.module.scss';
import MainContent from '../../components/_three/MainContent';

extend({ TextGeometry });

const lines = [
  {
    position: {
      x: 0.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    radius: 0.01,
    length: 18,
    color: '#b3b3b3',
  },
  {
    position: {
      x: 1.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    radius: 0.01,
    length: 18,
    color: '#b3b3b3',
  },
  {
    position: {
      x: 2.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    radius: 0.05,
    length: 18,
    color: '#ff0000',
  },
  {
    position: {
      x: -0.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    radius: 0.01,
    length: 18,
    color: '#b3b3b3',
  },
  {
    position: {
      x: -1.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    radius: 0.01,
    length: 18,
    color: '#b3b3b3',
  },
  {
    position: {
      x: -2.5,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    radius: 0.05,
    length: 18,
    color: '#ff0000',
  },
  {
    position: {
      x: 0,
      y: 1.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: Math.PI / 2,
    },
    radius: 0.01,
    length: 5,
    color: '#b3b3b3',
  },
  {
    position: {
      x: 0,
      y: 4.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: Math.PI / 2,
    },
    radius: 0.01,
    length: 5,
    color: '#b3b3b3',
  },
  {
    position: {
      x: 0,
      y: 7.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: Math.PI / 2,
    },
    radius: 0.01,
    length: 5,
    color: '#b3b3b3',
  },
  {
    position: {
      x: 0,
      y: -1.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: Math.PI / 2,
    },
    radius: 0.01,
    length: 5,
    color: '#b3b3b3',
  },
  {
    position: {
      x: 0,
      y: -4.5,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: Math.PI / 2,
    },
    radius: 0.01,
    length: 5,
    color: '#b3b3b3',
  },
  {
    position: {
      x: 0,
      y: -7.49,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: Math.PI / 2,
    },
    radius: 0.01,
    length: 5,
    color: '#b3b3b3',
  },
];

const Home: React.FC = () => {
  const [lane, setLane] = useState(1);
  const [when, setWhen] = useState(1);
  const [length, setLength] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [isSubmit, setIsSubmit] = useState(true);
  const [isDisable, setIsDisable] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Canvas
        camera={{ fov: 40, far: 2000, position: [0, -13, 3] }}
        className={styles.canvas}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} color={0xffffff} />
          <hemisphereLight intensity={0.4} color={0xffffff} />
          <directionalLight
            color={0xffffff}
            intensity={0.9}
            castShadow={true}
            position={[0, 100, 0]}
          />
          <mesh position={[0, 0, 0]} scale={[5, 15, 1]}>
            <planeBufferGeometry />
            <meshStandardMaterial attach='material' color='rgba(0,0,255,0.7)' />
          </mesh>
          {lines.map((item, index: number) => (
            <mesh
              key={index}
              position={[item.position.x, item.position.y, item.position.z]}
              rotation={[item.rotation.x, item.rotation.y, item.rotation.z]}
            >
              <cylinderBufferGeometry
                attach='geometry'
                args={[item.radius, item.radius, item.length, 10]}
              />
              <meshStandardMaterial attach='material' color={item.color} />
            </mesh>
          ))}
          <MainContent
            lane={lane}
            when={when}
            length={length}
            speed={speed}
            isSubmit={isSubmit}
            setIsDisable={setIsDisable}
          />
        </Suspense>
      </Canvas>
      <div className={styles.hiddenBlock}></div>
      <Controller
        setLane={setLane}
        setWhen={setWhen}
        setLength={setLength}
        setSpeed={setSpeed}
        setIsSubmit={setIsSubmit}
        isDisable={isDisable}
      />
    </div>
  );
};

export default Home;
