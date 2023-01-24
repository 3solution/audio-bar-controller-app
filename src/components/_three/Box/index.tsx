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
      args={[1, length, 0.2]}
      radius={0.05}
    >
      <meshLambertMaterial attach='material' color='#404040' />
    </RoundedBox>
  );
};

export default Box;
