import classNames from 'classnames';
import React, { useState } from 'react';

import styles from './styles.module.scss';

const laneOptions = [1, 2, 3, 4, 5];

type Props = {
  setLane: React.Dispatch<React.SetStateAction<number>>;
  setWhen: React.Dispatch<React.SetStateAction<number>>;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
};

const Controller: React.FC<Props> = ({
  setLane,
  setWhen,
  setLength,
  setSpeed,
  setIsSubmit,
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
    setIsSubmit((prev) => !prev);
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
        <p className={styles.label}>When:</p>
        <input
          type='range'
          min={0.5}
          max={10}
          step={0.1}
          className={classNames(styles.value, styles.slider)}
          defaultValue={1}
          onChange={(e) => {
            setWhenTemp(parseFloat(e.target.value));
          }}
        />
        <p className={styles.text}>{whenTemp}</p>
      </div>
      <div className={styles.controller}>
        <p className={styles.label}>Speed:</p>
        <input
          type='range'
          min={1}
          max={5}
          step={0.1}
          className={classNames(styles.value, styles.slider)}
          defaultValue={1}
          onChange={(e) => {
            setSpeedTemp(parseFloat(e.target.value));
          }}
        />
        <p className={styles.text}>{speedTemp}</p>
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
