export const getPercentage = (num: number) => (num * 100).toFixed(2);

export const getColor = (num: number) => {
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
