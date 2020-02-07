import React from "react";
import styles from "./header.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      <h1>Similaritipsum</h1>
    </div>
  );
};

export default Header;
