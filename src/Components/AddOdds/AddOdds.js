import { useState } from "react";
import styles from "./AddOdds.module.css";
import { Input, InputVariant } from "./Input/Input";
import addIcon from "../../assets/icons/icons8-plus-+-24.png";

const AddOdds = ({calculationHandler}) => {
  const [inputs, setInputs] = useState({
    0: {
      value: "",
    },
    1: {
      value: "",
    }
  });
  const [stake, setStake] = useState("");
  const handleAddNum = () => {
    const objectLength = Object.keys(inputs).length;
    setInputs({ ...inputs, [objectLength]: {value: "" } });
  };

  const handleEnteredOdd = (event, id) => {
    setInputs({
      ...inputs,
      [id]: { value: event.target.value },
    });
  };
  
  const handleEnteredStake = (event) => {
    setStake(event.target.value)
  }
  const handleSubmit = () => {
    // const entries = Object.values(inputs)
    // console.log(entries)
    // const result = entries.reduce(
    //   (prevEntry, currEntry) => parseFloat(prevEntry) + parseFloat(currEntry.value),
    //   0
    // );
    calculationHandler(parseInt(stake), inputs)
    
  }
  return (
    <div className={styles.AddOdds}>
      <InputVariant
        type="number"
        value={stake}
        onChange={(e) => handleEnteredStake(e)}
      />
      {Object.entries(inputs).map((input) => {
        return (
          <div key={input[0]} className={styles.InputWrap}>
            <Input
              type="number"
              value={input[1].value}
              onChange={(e) => handleEnteredOdd(e, input[0])}
            />
          </div>
        );
      })}
      <div className={styles.AddInput} onClick={handleAddNum}>
        Add More Odds
        <img src={addIcon} alt="" />
      </div>
      <button onClick={handleSubmit}>Calculate</button>
    </div>
  );
};

export default AddOdds;
