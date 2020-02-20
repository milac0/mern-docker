import React, { useState, Fragment } from "react";
import axios from "axios";
import Option from "./enums/Option";
import Header from "./components/Header/Header";
import NumberInput from "./components/NumberInput/NumberInput";
import SelectOption from "./components/SelectOption/SelectOption";
import Text from "./components/Text/Text";
import Results from "./components/Results/Results";
import Button from "./components/Button/Button";
import compareStrings from "./services/compareStrings";
import useFetch from "./hooks/useFetch";

axios.defaults.baseURL = "http://localhost:8080/api/v1";

interface Props {}

const App: React.FC<Props> = () => {
  const [select1, setSelect1] = useState(Option.bacon);
  const [select2, setSelect2] = useState(Option.bacon);
  const [numberOfWords, setNumberOfWords] = useState(0);
  const [similarity, setSimilarity] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleNumberChange = (num: number) => {
    setNumberOfWords(num);
  };

  const { data: data1, loading: loading1 } = useFetch(select1, numberOfWords);
  const { data: data2, loading: loading2 } = useFetch(select2, numberOfWords);

  //drill loading to Text

  const handleButtonClick = async () => {
    const similarity = await compareStrings(data1, data2);
    setSimilarity(similarity);
    setShowResults(true);
  };

  return (
    <Fragment>
      <Header />
      <NumberInput handleNumberChange={handleNumberChange} />
      <SelectOption onSelectionChange={setSelect1} />
      <Text text={data1} />
      <SelectOption onSelectionChange={setSelect2} />
      <Text text={data2} />
      <Button handleButtonClick={handleButtonClick} />
      {showResults && <Results similarity={similarity} />}
    </Fragment>
  );
};

export default App;
