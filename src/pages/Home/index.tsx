import React, { Suspense, useRef, useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import Controller from '../../components/_ui/Controller';
import MainContent from '../../components/_three/MainContent';
import { verticalLines } from '../../utils/info.js';

import styles from './styles.module.scss';

extend({ TextGeometry });

const horizontalLine = {
  position: {
    x: 0,
    y: -7.5,
    z: 0,
  },
  rotation: {
    x: 0,
    y: 0,
    z: Math.PI / 2,
  },
  radius: 0.04,
  length: 5,
  color: '#b3b3b3',
};

const Home: React.FC = () => {
  const [lane, setLane] = useState(1);
  const [when, setWhen] = useState(1);
  const [length, setLength] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [isSubmit, setIsSubmit] = useState(true);
  const [isDisable, setIsDisable] = useState(false);
  const horizontalGroup: any = useRef();

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
            <meshStandardMaterial attach='material' color='#3D3020' />
          </mesh>
          {verticalLines.map((item, index: number) => (
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
          <group
            name='horizontalGroup'
            ref={horizontalGroup}
            position={[0, 0, 0]}
          >
            {new Array(20).fill(0).map((item, index: number) => (
              <mesh
                key={index}
                position={[
                  horizontalLine.position.x,
                  horizontalLine.position.y + index * 3,
                  horizontalLine.position.z,
                ]}
                rotation={[
                  horizontalLine.rotation.x,
                  horizontalLine.rotation.y,
                  horizontalLine.rotation.z,
                ]}
              >
                <cylinderBufferGeometry
                  attach='geometry'
                  args={[
                    horizontalLine.radius,
                    horizontalLine.radius,
                    horizontalLine.length,
                    10,
                  ]}
                />
                <meshStandardMaterial
                  attach='material'
                  color={horizontalLine.color}
                />
              </mesh>
            ))}
          </group>
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
