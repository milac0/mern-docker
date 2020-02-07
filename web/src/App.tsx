import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import NumberInput from "./components/NumberInput/NumberInput";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

interface Props {}

const App: React.FC<Props> = () => {
  const [n, setN] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const { data: result } = await axios.get("/calculate");
  //     setResult(result);
  //   })();
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setN(e.currentTarget.value);

  return (
    <Fragment>
      <Header />
      <NumberInput handleChange={handleChange} />
      {/* <select>
          <option value="x">X</option>
        </select>
        <select>
          <option value="x">X</option>
        </select>
        <button>Compare</button>
        <div>
          <div>circle with color</div>
          <p>percentage</p>
        </div> */}
    </Fragment>
  );
};

export default App;
