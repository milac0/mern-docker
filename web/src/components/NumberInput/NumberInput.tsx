import React from "react";
import styles from "./numberInput.scss";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<Props> = ({ handleChange }) => {
  return (
    <input
      className={styles.input}
      type="number"
      placeholder="n of words"
      onChange={handleChange}
    ></input>
  );
};

export default NumberInput;
