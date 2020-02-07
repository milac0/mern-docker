import React from "react";
import styles from "./selectOption.scss";
import Option from "../../enums/Option";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  select: Option;
}

const SelectOption: React.FC<Props> = ({ handleChange, select }) => {
  return (
    <div className={styles.text}>
      <select onChange={handleChange} value={select}>
        {Object.keys(Option).map((key: keyof typeof Option, i) => (
          <option key={i}>{key}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
