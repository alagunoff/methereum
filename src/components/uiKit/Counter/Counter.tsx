import { useState } from 'react';

import { IProps } from './types';
import styles from './Counter.module.scss';

function Counter({
  defaultCount = 1, min = 1, max = 5, onChange,
}: IProps) {
  const [count, setCount] = useState(defaultCount);

  function handleCountDecrement() {
    const newCount = count - 1;

    setCount(newCount);

    if (onChange) {
      onChange(newCount);
    }
  }

  function handleCountIncrement() {
    const newCount = count + 1;

    setCount(newCount);

    if (onChange) {
      onChange(newCount);
    }
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.decrementButton}
        type="button"
        disabled={count === min}
        onClick={handleCountDecrement}
      >
        -
      </button>
      <div className={styles.countValueWrapper}>
        <span className={styles.countValue}>{count}</span>
        /
        <span className={styles.maxValue}>{max}</span>
      </div>
      <button
        className={styles.incrementButton}
        type="button"
        disabled={count === max}
        onClick={handleCountIncrement}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
