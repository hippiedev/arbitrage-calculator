import { useState } from 'react';
import styles from './AddOdds.module.css'
import {Input, InputVariant} from './Input/Input'
import addIcon from '../../assets/icons/icons8-plus-+-24.png';

const AddOdds = props => {
    let [inputNum, addInputNum] = useState(2);
    const inputItems = Array.from(Array(inputNum).keys());;
    const handleAddNum = () => {
        addInputNum(inputNum+1)
    }  
    return (
      <form className={styles.AddOdds}>
          <InputVariant type="number" />
        {inputItems.map((item) => {
            return <div key={item} className={styles.InputWrap}>
            <Input type="number" />
          </div>
        })}
        <div className={styles.AddInput} onClick={handleAddNum}>Add More Odds<img src={addIcon} alt="" /></div>
        <button type="submit">Calculate</button>
      </form>
    );
}

export default AddOdds
