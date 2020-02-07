import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import NumberInput from "./components/NumberInput/NumberInput";
import Option from "./enums/Option";
import SelectOption from "./components/SelectOption/SelectOption";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

interface Props {}

const App: React.FC<Props> = () => {
  const [n, setN] = useState("");
  const [select, setSelect] = useState({
    select1: Option.bacon,
    select2: Option.bacon
  });

  // useEffect(() => {
  //   (async () => {
  //     const { data: result } = await axios.get("/calculate");
  //     setResult(result);
  //   })();
  // }, []);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setN(e.currentTarget.value);

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    setSelect({ ...select, [id]: e.target.value as Option });
  };
  const { select1, select2 } = select;
  return (
    <Fragment>
      <Header />
      <NumberInput handleChange={handleNumberChange} />
      <SelectOption
        handleChange={e => handleOptionChange(e, "select1")}
        select={select1}
      />
      <SelectOption
        handleChange={e => handleOptionChange(e, "select2")}
        select={select2}
      />
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
