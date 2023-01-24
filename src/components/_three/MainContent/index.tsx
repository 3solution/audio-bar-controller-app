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

  useEffect(() => {
    if (movingBox) {
      gsap.to(movingBox.position, {
        duration: 5 / speed,
        y: -10 - (length * 3) / 2,
        delay: when,
        ease: 'back.out(1)',
        onStart: () => {
          setIsDisable(true);
        },
        onComplete: () => {
          setIsDisable(false);
          gsap.to(movingBox.position, {
            duration: 0,
            y: 10 + (length * 3) / 2,
            delay: 0,
          });
        },
      });
    }
  }, [isSubmit]);

  return (
    <>
      <Box
        name='movingBox'
        position={[lane - 3, 10 + (length * 3) / 2, 0.1]}
        length={length * 3}
      />
    </>
  );
};

export default MainContent;
