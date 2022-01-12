import styles from './Input.module.css';
import nairaIcon from '../../../assets/icons/naira.png';

export const Input = props => {
    return (
      <>
        <label className={styles.Label}>Odd: </label>
        <input className={styles.Input} {...props} />
      </>
    );
}

export const InputVariant = props => {
    return (
      <div className={styles.InputVariant}>
        Stake:{" "} 
        <label className={styles.Prefix}>
          <img src={nairaIcon} alt="" />
        </label>
        <input className={styles.Input} {...props} />
      </div>
    );
}
