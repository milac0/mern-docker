import React from "react";
import styles from "./numberInput.scss";

interface Props {
  handleNumberChange: (num: number) => void;
}

const NumberInput: React.FC<Props> = ({ handleNumberChange }) => {
  return (
    <input
      className={styles.input}
      type="number"
      placeholder="n of words"
      min={0}
      // max="max input number"
      onChange={e => handleNumberChange(parseInt(e.target.value, 10))}
    ></input>
  );
};

export default NumberInput;
