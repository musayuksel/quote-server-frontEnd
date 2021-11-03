import React, { useState } from "react";
import fetchData from "./utils/fetchData";
import pickFromArray from "./utils/pickFromArray";
import "./App.css";

let color = "#fd7e14";
function App() {
  const colorTemplate = [
    "#00ADB5",
    "#F08A5D",
    "#B83B5E",
    "#346751",
    "#125D98",
    "#6A2C70",
    "#E23E57",
    "#716F81",
    "#FF7600",
  ];

  const [quote, setQuote] = useState({
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  });

  document.body.style.background = color;
  function newQuoteHandler(event) {
    fetchData("/quotes/random").then((newQuote) => {
      color = pickFromArray(colorTemplate);
      setQuote(newQuote);
    });
  }

  return (
    <section className="App">
      <blockquote className="blockquote text-center">
        <p className="mb-0">
          <span
            style={{ fontSize: "136px", color: `${color}` }}
          >
            ,,
          </span>
          <span style={{ color: `${color}` }}>
            {quote.quote}
          </span>
        </p>
        <article
          style={{ color: `${color}` }}
          id="author"
          className="blockquote-footer"
        >
          {quote.author}
        </article>
        <button
          style={{
            backgroundColor: `${color}`,
            color: "white",
          }}
          onClick={newQuoteHandler}
        >
          New quote
        </button>
      </blockquote>
    </section>
  );
}

export default App;
