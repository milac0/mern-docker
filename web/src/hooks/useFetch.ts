import { useState, useEffect } from "react";
import axios from "axios";

export default (select: string, numberOfWords: number) => {
  const [state, setState] = useState({ data: "", loading: true });

  useEffect(() => {
    if (isNaN(numberOfWords) || numberOfWords === 0) {
      return setState({ data: "", loading: false });
    }

    setState(state => ({ data: state.data, loading: true }));
    (async () => {
      const params = { name: select, n: numberOfWords };
      try {
        const { data } = await axios.get("/lorem", {
          params,
          responseType: "stream"
        });
        setState({ data: data.slice(0, 25000), loading: false });
      } catch (e) {
        const msg = "Error downloading data. Try again!";
        setState({ data: msg, loading: false });
      }
    })();
  }, [numberOfWords, select]);

  return state;
};
