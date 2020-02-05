import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./app.scss";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

interface Props {}

const App: React.FC<Props> = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      const { data: result } = await axios.get("/calculate");
      setResult(result);
    })();
  }, []);

  return <div className={styles.title}>{JSON.stringify(result)}!</div>;
};

export default App;
