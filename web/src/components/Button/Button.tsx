import React from "react";
import styles from "./button.scss";

interface Props {
  handleButtonClick: () => void;
}

const Button: React.FC<Props> = ({ handleButtonClick }) => {
  return (
    <button onClick={handleButtonClick} className={styles.btn}>
      Compare
    </button>
  );
};

export default Button;
