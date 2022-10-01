import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log("i run on every render");
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    };
    // searchWiki();
    // (async () => {
    //   await axios.get("wiki.com");
    // })();
    // axios
    //   .get("https://en.wikipedia.org/w/api.php", {
    //     params: {
    //       action: "query",
    //       list: "search",
    //       origin: "*",
    //       format: "json",
    //       srsearch: term,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input onChange={(e) => setTerm(e.target.value)} className="input" />
        </div>
      </div>
    </div>
  );
};
export default Search;
