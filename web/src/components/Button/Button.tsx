import React from "react";
import styles from "./button.scss";

interface Props {
  compareStrings: () => void;
}

const Button: React.FC<Props> = ({ compareStrings }) => {
  return (
    <button onClick={compareStrings} className={styles.btn}>
      Compare
    </button>
  );
};

export default Button;
