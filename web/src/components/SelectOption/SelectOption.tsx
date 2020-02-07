import React, { useState, useEffect } from "react";
import styles from "./selectOption.scss";
import Option from "../../enums/Option";
import axios from "axios";

interface Props {
  handleText: React.Dispatch<React.SetStateAction<string>>;
  n: string;
}

const SelectOption: React.FC<Props> = ({ handleText, n }) => {
  const [select, setSelect] = useState(Option.bacon);

  useEffect(() => {
    (async () => {
      const body = { name: select, n };
      try {
        const {
          data: { string }
        } = await axios.post("/lorem", body);
        handleText(string);
      } catch (e) {
        handleText("Error downloading data. Try again!");
      }
    })();
  }, [n, select]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value as Option);
  };

  return (
    <div className={styles.option}>
      <select onChange={handleSelect} value={select}>
        {Object.keys(Option).map((key: keyof typeof Option, i) => (
          <option key={i}>{key}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
