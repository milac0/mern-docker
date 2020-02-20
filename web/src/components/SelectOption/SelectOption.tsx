import React from "react";
import styles from "./selectOption.scss";
import Option from "../../enums/Option";

interface Props {
  onSelectionChange: React.Dispatch<React.SetStateAction<Option>>;
}

const SelectOption: React.FC<Props> = ({ onSelectionChange }) => {
  return (
    <div className={styles.option}>
      <select onChange={e => onSelectionChange(e.target.value as Option)}>
        {Object.keys(Option).map((key: keyof typeof Option, i) => (
          <option key={i}>{key}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
