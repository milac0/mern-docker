import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import NumberInput from "./components/NumberInput/NumberInput";
import SelectOption from "./components/SelectOption/SelectOption";
import Text from "./components/Text/Text";
import Results from "./components/Results/Results";
import Button from "./components/Button/Button";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

interface Props {}

const App: React.FC<Props> = () => {
  const [n, setN] = useState("");
  const [similarity, setSimilarity] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setN(e.currentTarget.value);

  const compareStrings = async () => {
    const body = {
      string1: text1,
      string2: text2
    };
    const {
      data: { similarity }
    } = await axios.post("/calculate", body);
    setSimilarity(similarity);
    setShowResults(true);
  };

  return (
    <Fragment>
      <Header />
      <NumberInput handleChange={handleNumberChange} />
      <SelectOption n={n} handleText={setText1} />
      <Text text={text1} />
      <SelectOption n={n} handleText={setText2} />
      <Text text={text2} />
      <Button compareStrings={compareStrings} />
      <Results similarity={similarity} showResults={showResults} />
    </Fragment>
  );
};

export default App;
