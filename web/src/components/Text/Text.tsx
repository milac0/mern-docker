import React from "react";
import styles from "./text.scss";

interface Props {
  text: string;
}

const Text: React.FC<Props> = ({ text }) => {
  return text.length ? (
    <div className={styles.text}>
      <p>{text}</p>
    </div>
  ) : null;
};

export default Text;
