import { useEffect, useState } from "react";
import Result from "./Result";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [apiData, setApiData] = useState([]);
  const [debouncedTxt, setDebouncedTxt] = useState("");
  const [results, setResults] = useState([]);

  const getData = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    setApiData(data.results);
  };

  useEffect(() => {
    if (debouncedTxt) {
      handleSearch();
    }
  }, [debouncedTxt]);
  const handleSearch = () => {
    const filteredData = apiData.filter((episode) =>
      episode?.name.toLowerCase().includes(debouncedTxt.toLowerCase())
    );

    setResults(filteredData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTxt(searchText);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);
  return (
    <div className=" flex-col justify-center gap-2 m-4">
      <input
        type="text"
        placeholder="Search"
        className="p-2 m-2 border border-red-500"
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
      ></input>
      <button
        type="button"
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Search
      </button>

      <div className="flex-col">
        {results.map((result) => (
          <div key={result?.id}>
            <Result result={result} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
