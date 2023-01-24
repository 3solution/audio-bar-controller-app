import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

import Box from '../Box';

type Props = {
  lane: number;
  when: number;
  length: number;
  speed: number;
  isSubmit: boolean;
  setIsDisable: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainContent: React.FC<Props> = ({
  lane,
  when,
  length,
  speed,
  isSubmit,
  setIsDisable,
}) => {
  const { scene } = useThree();
  const movingBox = scene.getObjectByName('movingBox');
  const horizontalGroup = scene.getObjectByName('horizontalGroup');

  useEffect(() => {
    if (movingBox) {
      gsap.to(movingBox.position, {
        duration: speed + (speed / (5 + length)) * 6,
        y: -10.5 - (length * 3) / 2,
        delay: when,
        ease: 'none',
        onStart: () => {
          setIsDisable(true);
        },
        onComplete: () => {
          setIsDisable(false);
          movingBox.position.y = 10.5 + (length * 3) / 2;
        },
      });
    }
    if (horizontalGroup) {
      gsap.to(horizontalGroup.position, {
        duration: speed + (speed / (5 + length)) * 6,
        y: -21 - length * 3,
        delay: when,
        ease: 'none',
        onComplete: () => {
          horizontalGroup.position.y = 0;
        },
      });
    }
  }, [isSubmit]);

  return (
    <>
      <Box
        name='movingBox'
        position={[lane - 3, 10.5 + (length * 3) / 2, 0.1]}
        length={length * 3}
      />
    </>
  );
};

export default MainContent;
