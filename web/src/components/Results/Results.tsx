import React from "react";
import styles from "./results.scss";
import { getPercentage, getColor } from "./results.helpers";

interface Props {
  similarity: number;
}

const Results: React.FC<Props> = ({ similarity }) => {
  const color = getColor(similarity);
  const percentage = getPercentage(similarity);

  return (
    <div className={styles.results}>
      <div style={{ backgroundColor: color }}></div>
      <h1>{percentage}%</h1>
    </div>
  );
};

export default Results;
