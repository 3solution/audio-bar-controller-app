import React from 'react';
import { RoundedBox } from '@react-three/drei';

type Props = {
  name: string;
  position: [number, number, number];
  length: number;
};

const Box: React.FC<Props> = ({ name, position, length }) => {
  return (
    <RoundedBox
      name={name}
      position={position}
      args={[0.9, length, 0.2]}
      radius={0.05}
    >
      <meshLambertMaterial
        attach='material'
        color='#F140C5'
        opacity={0.7}
        transparent
      />
    </RoundedBox>
  );
};

export default Box;
