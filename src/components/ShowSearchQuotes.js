import React from "react";

export default function ShowSearchQuotes({
  filteredQuotes,
  color,
}) {
  const listOfQuotes = filteredQuotes.map(
    (quote, index) => {
      return (
        <li style={{ color: `${color}` }}>
          {quote.quote} --by {quote.author}
        </li>
      );
    }
  );
  return <ul className="quoteList">{listOfQuotes}</ul>;
}
