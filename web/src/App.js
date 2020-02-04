import React, { useEffect, useState } from "react";

const App = () => {
  const [result, setResult] = useState("");
  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:8080/api/v1/calculate");
      const result = await data.json();
      setResult(result);
    })();
  }, []);

  return <div className="title">{JSON.stringify(result)} !!</div>;
};

export default App;
