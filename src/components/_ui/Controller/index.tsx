import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './styles.module.scss';

const laneOptions = [1, 2, 3, 4, 5];

type Props = {
  setLane: React.Dispatch<React.SetStateAction<number>>;
  setWhen: React.Dispatch<React.SetStateAction<number>>;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
};

const Controller: React.FC<Props> = ({
  setLane,
  setWhen,
  setLength,
  setSpeed,
}) => {
  const [laneTemp, setLaneTemp] = useState(1);
  const [whenTemp, setWhenTemp] = useState(1);
  const [lengthTemp, setLengthTemp] = useState(1);
  const [speedTemp, setSpeedTemp] = useState(1);

  const onsubmit = () => {
    setLane(laneTemp);
    setWhen(whenTemp);
    setLength(lengthTemp);
    setSpeed(speedTemp);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Controller</p>
      <div className={styles.controller}>
        <p className={styles.label}>Lane:</p>
        <select
          className={styles.value}
          onChange={(e) => setLaneTemp(parseInt(e.target.value))}
        >
          {laneOptions.map((item, index: number) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.controller}>
        <p className={styles.label}>When:</p>
        <input
          type='number'
          min={0.5}
          max={10}
          className={classNames(styles.value, styles.input)}
          value={whenTemp}
          onChange={(e) =>
            setWhenTemp(
              e.target.value === '' || parseFloat(e.target.value) < 0.5
                ? 0.5
                : parseFloat(e.target.value)
            )
          }
        />
      </div>
      <div className={styles.controller}>
        <p className={styles.label}>Length:</p>
        <select
          className={styles.value}
          onChange={(e) => setLengthTemp(parseInt(e.target.value))}
        >
          {laneOptions.map((item, index: number) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.controller}>
        <p className={styles.label}>Speed:</p>
        <input
          type='number'
          min={1}
          max={5}
          className={classNames(styles.value, styles.input)}
          value={speedTemp}
          onChange={(e) =>
            setSpeedTemp(
              e.target.value === '' || parseFloat(e.target.value) < 1
                ? 1
                : parseFloat(e.target.value)
            )
          }
        />
      </div>
      <button
        className={styles.button}
        onClick={() => {
          onsubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Controller;
