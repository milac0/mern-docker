import axios from "axios";

export default async (text1: string, text2: string): Promise<number> => {
  const body = {
    string1: text1,
    string2: text2
  };
  const {
    data: { similarity }
  } = await axios.post("/calculate", body);
  return similarity;
};
