import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import NumberInput from "./components/NumberInput/NumberInput";
import SelectOption from "./components/SelectOption/SelectOption";
import Text from "./components/Text/Text";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

interface Props {}

const App: React.FC<Props> = () => {
  const [n, setN] = useState("");

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setN(e.currentTarget.value);

  return (
    <Fragment>
      <Header />
      <NumberInput handleChange={handleNumberChange} />
      <SelectOption n={n} handleText={setText1} />
      <Text text={text1} />
      <SelectOption n={n} handleText={setText2} />
      <Text text={text2} />
      {/* 
        <button>Compare</button>
        <div>
          <div>circle with color</div>
          <p>percentage</p>
        </div> */}
    </Fragment>
  );
};

export default App;
