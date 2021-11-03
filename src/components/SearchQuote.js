import React, { useState } from "react";
import fetchData from "../utils/fetchData";
import ShowSearchQuotes from "./ShowSearchQuotes";

export default function SearchQuote({ color }) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  function submitHandle(event) {
    event.preventDefault();
    fetchData(`/quotes/search?term=${searchValue}`).then(
      (searchedQuotes) => {
        setFilteredQuotes(searchedQuotes);
      }
    );
  }
  // console.log(filteredQuotes);

  return (
    <>
      <form className="searchForm" onSubmit={submitHandle}>
        <input
          type="text"
          name="term"
          value={searchValue}
          placeholder="seach quote"
          onChange={(event) =>
            setSearchValue(event.target.value)
          }
        />
        <button
          type="submit"
          className="searchButton"
          id="newQuote"
        >
          Search quote
        </button>
      </form>
      <ShowSearchQuotes
        filteredQuotes={filteredQuotes}
        color={color}
      />
    </>
  );
}
