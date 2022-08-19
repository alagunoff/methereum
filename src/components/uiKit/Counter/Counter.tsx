import { IProps } from './types';
import styles from './Counter.module.scss';

function Counter({
  min, count, max, onChange,
}: IProps) {
  function handleCountDecrement() {
    onChange?.(count - 1);
  }

  function handleCountIncrement() {
    onChange?.(count + 1);
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
