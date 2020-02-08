import React from "react";
import styles from "./results.scss";

interface Props {
  similarity: number;
  showResults: boolean;
}

const Results: React.FC<Props> = ({ similarity, showResults }) => {
  const getPercentage = (num: number) => (num * 100).toFixed(2);

  const getColor = (num: number) => {
    let color = "";
    if (num === 0) {
      color = "black";
    } else if (num <= 0.25) {
      color = "grey";
    } else if (num <= 0.5) {
      color = "orange";
    } else if (num <= 0.75) {
      color = "blue";
    } else {
      color = "green";
    }
    return color;
  };

  return (
    showResults && (
      <div className={styles.results}>
        <div style={{ backgroundColor: getColor(similarity) }}></div>
        <h1>{getPercentage(similarity)}%</h1>
      </div>
    )
  );
};

export default Results;
