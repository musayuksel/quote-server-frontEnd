import React, { useState } from "react";
import fetchData from "../utils/fetchData";

export default function SearchQuote() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState("");

  function submitHandle(event) {
    event.preventDefault();
    fetchData(`/quotes/search?term=${searchValue}`).then(
      (searchedQuotes) => {
        console.log(searchedQuotes);
      }
    );
  }

  return (
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
  );
}
